#!/bin/bash
python autoapp.py &
FOO_PID=$!
sleep 5
wget http://localhost:5000 -O offline/index.html
sed -i'' -e 's%/static/build/%./static/build/%g' offline/index.html
cp -Rp app/static offline/
sed -i'' -e 's%/static/build/%./static/build/%g' offline/static/build/app_js*
cd offline
rm -f index.html-e
zip -r9 nanopaperwallet_01.zip *
md5sum nanopaperwallet_01.zip > nanopaperwallet_01.zip.md5
echo "DONE offline/nanopaperwallet_01.zip"
kill $FOO_PID

