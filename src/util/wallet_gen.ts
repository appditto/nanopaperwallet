import { blake2b, blake2bFinal, blake2bInit, blake2bUpdate } from 'blakejs'

var nacl = require("./nacl.js")

export default class WalletGen {
    // Generate seed and index 0 account
    static async genWallet() : Promise<any> {
        const seed = WalletGen.generateSeedBytes();
        const privateKey = WalletGen.deriveSecretKey(seed, 0)
        const publicKey = WalletGen.generatePublicFromPrivate(privateKey);
        const address = WalletGen.getAddressFromPublic(publicKey)
        return {seed: WalletGen.uint8ToHex(seed), address:address}
    }

    static generateSeedBytes() {
        return nacl.randomBytes(32)
    }

    static generatePublicFromPrivate(accountSecretKeyBytes : Uint8Array) : Uint8Array {
        return nacl.sign.keyPair.fromSecretKey(accountSecretKeyBytes).publicKey
    }

    static deriveSecretKey(seedBytes: Uint8Array, index: number): Uint8Array {
        const indexBuffer = new ArrayBuffer(4)
        const indexView = new DataView(indexBuffer)
        indexView.setUint32(0, index)
        const indexBytes = new Uint8Array(indexBuffer)

        const context = blake2bInit(32)
        blake2bUpdate(context, seedBytes)
        blake2bUpdate(context, indexBytes)
        const secretKeyBytes = blake2bFinal(context)

        return secretKeyBytes
    }

    static getAddressFromPublic(accountPublicKeyBytes : Uint8Array, prefix = "nano") : string {
        const accountHex = WalletGen.uint8ToHex(accountPublicKeyBytes)
        const keyBytes = WalletGen.uint4ToUint8(WalletGen.hexToUint4(accountHex)) // For some reason here we go from u, to hex, to 4, to 8??
        const checksum = WalletGen.uint5ToString(
            WalletGen.uint4ToUint5(WalletGen.uint8ToUint4(blake2b(keyBytes, null, 5).reverse()))
        )
        const account = WalletGen.uint5ToString(WalletGen.uint4ToUint5(WalletGen.hexToUint4(`0${accountHex}`)))
    
        return `${prefix}_${account}${checksum}`
    }

    /** Byte Helpers */

    static hexToUint4(hexValue : string) : Uint8Array {
        const uint4 = new Uint8Array(hexValue.length)
        for (let i = 0; i < hexValue.length; i++)
            uint4[i] = parseInt(hexValue.substr(i, 1), 16)
    
        return uint4
    }

    static uint8ToUint4(uintValue : Uint8Array) : Uint8Array {
        const uint4 = new Uint8Array(uintValue.length * 2)
        for (let i = 0; i < uintValue.length; i++) {
            uint4[i * 2] = (uintValue[i] / 16) | 0
            uint4[i * 2 + 1] = uintValue[i] % 16
        }
    
        return uint4
    }

    static uint8ToHex(uintValue : Uint8Array) : string {
        let hex = ""
        let aux
        for (let i = 0; i < uintValue.length; i++) {
            aux = uintValue[i].toString(16).toUpperCase()
            if (aux.length == 1) aux = "0" + aux
            hex += aux
            aux = ""
        }
    
        return hex
    }

    static uint4ToUint8(uintValue : Uint8Array) {
        const length = uintValue.length / 2
        const uint8 = new Uint8Array(length)
        for (let i = 0; i < length; i++)
            uint8[i] = uintValue[i * 2] * 16 + uintValue[i * 2 + 1]
    
        return uint8
    }
    
    static uint4ToUint5(uintValue : Uint8Array) {
        var length = (uintValue.length / 5) * 4
        var uint5 = new Uint8Array(length)
        for (let i = 1; i <= length; i++) {
            let n = i - 1
            let m = i % 4
            let z = n + (i - m) / 4
            let right = uintValue[z] << m
            let left
            if ((length - i) % 4 == 0) left = uintValue[z - 1] << 4
            else left = uintValue[z + 1] >> (4 - m)
            uint5[n] = (left + right) % 32
        }
        return uint5
    }

    static uint5ToString(uint5 : Uint8Array) : string {
        const letter_list = "13456789abcdefghijkmnopqrstuwxyz".split("")
        let string = ""
        for (let i = 0; i < uint5.length; i++) string += letter_list[uint5[i]]
    
        return string
    }
}