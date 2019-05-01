#!/bin/bash
# For generating the offline bundle
rm -r app/static
rm offline/*
cp src/router/index.ts.offline src/router/index.ts
npm run build
cp src/router/index.ts.online src/router/index.ts
export $(cat .env | xargs)
./venv/bin/python autoapp.py &
FOO_PID=$!
sleep 5
wget http://localhost:5000 -O offline/walletgen.html
sed -i'' -e 's%/static/build/%./static/build/%g' offline/walletgen.html
cp -Rp app/static offline/
sed -i'' -e 's%/static/build/%./static/build/%g' offline/static/build/app_js*
cd offline
rm walletgen.html-e
zip -r9 nanopaperwallet_01.zip *
md5 nanopaperwallet_01.zip > nanopaperwallet_01.zip.md5
rm -rf walletgen* static
echo "DONE offline/nanopaperwallet_01.zip"
kill $FOO_PID

