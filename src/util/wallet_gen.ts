import * as nanocurrency from 'nanocurrency'

export default class WalletGen {
    // Generate seed and index 0 account
    static async genWallet() : Promise<any> {
        const seed = await nanocurrency.generateSeed()
        const address = nanocurrency.deriveAddress(
            nanocurrency.derivePublicKey(nanocurrency.deriveSecretKey(seed, 0)),
            {
                useNanoPrefix: true
            }
        )
        return {seed:seed, address:address}
    }
}