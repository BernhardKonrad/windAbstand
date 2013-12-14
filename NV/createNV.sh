python translate_polygonNV.py ../Landkreise/aschaffenburg-raw.txt
python translate_polygonNV.py ../Landkreise/bad-kissingen-raw.txt
python translate_polygonNV.py ../Landkreise/hassberge-raw.txt
python translate_polygonNV.py ../Landkreise/kitzingen-raw.txt
python translate_polygonNV.py ../Landkreise/main-spessart-raw.txt
python translate_polygonNV.py ../Landkreise/miltenberg-raw.txt
python translate_polygonNV.py ../Landkreise/rhoen-grabfeld-raw.txt
python translate_polygonNV.py ../Landkreise/schweinfurt-land-raw.txt
python translate_polygonNV.py ../Landkreise/wue-land-raw.txt


python ortschaftenNV.py ../Ortschaften/Aschaffenburg.txt ffa900
python ortschaftenNV.py ../Ortschaften/BadKissingen.txt ed6703
python ortschaftenNV.py ../Ortschaften/Hassberge.txt 5cadff
python ortschaftenNV.py ../Ortschaften/Kitzingen.txt ff97ff
python ortschaftenNV.py ../Ortschaften/MainSpessart.txt cf0eed
python ortschaftenNV.py ../Ortschaften/Miltenberg.txt ffffff
python ortschaftenNV.py ../Ortschaften/RhoenGrabfeld.txt 0eedc4
python ortschaftenNV.py ../Ortschaften/Schweinfurt.txt 3333d6
python ortschaftenNV.py ../Ortschaften/Wuerzburg.txt 00cc00


python einMarkerNV.py ../Ortschaften/Aschaffenburg.txt ffa900
python einMarkerNV.py ../Ortschaften/BadKissingen.txt ed6703
python einMarkerNV.py ../Ortschaften/Hassberge.txt 5cadff
python einMarkerNV.py ../Ortschaften/Kitzingen.txt ff97ff
python einMarkerNV.py ../Ortschaften/MainSpessart.txt cf0eed
python einMarkerNV.py ../Ortschaften/Miltenberg.txt ffffff
python einMarkerNV.py ../Ortschaften/RhoenGrabfeld.txt 0eedc4
python einMarkerNV.py ../Ortschaften/Schweinfurt.txt 3333d6
python einMarkerNV.py ../Ortschaften/Wuerzburg.txt 00cc00


cat aschaffenburg-LK.txt > landkreise.js
cat bad-kissingen-LK.txt >> landkreise.js
cat hassberge-LK.txt >> landkreise.js
cat kitzingen-LK.txt >> landkreise.js
cat main-spessart-LK.txt >> landkreise.js
cat miltenberg-LK.txt >> landkreise.js
cat rhoen-grabfeld-LK.txt >> landkreise.js
cat schweinfurt-land-LK.txt >> landkreise.js
cat wue-land-LK.txt >> landkreise.js


cat Aschaffenburg-Ort.txt > ortschaften.js
cat BadKissingen-Ort.txt >> ortschaften.js
cat Hassberge-Ort.txt >> ortschaften.js
cat Kitzingen-Ort.txt >> ortschaften.js
cat MainSpessart-Ort.txt >> ortschaften.js
cat Miltenberg-Ort.txt >> ortschaften.js
cat RhoenGrabfeld-Ort.txt >> ortschaften.js
cat Schweinfurt-Ort.txt >> ortschaften.js
cat Wuerzburg-Ort.txt >> ortschaften.js


cat Aschaffenburg-ein.txt >> ortschaften.js
cat BadKissingen-ein.txt >> ortschaften.js
cat Hassberge-ein.txt >> ortschaften.js
cat Kitzingen-ein.txt >> ortschaften.js
cat MainSpessart-ein.txt >> ortschaften.js
cat Miltenberg-ein.txt >> ortschaften.js
cat RhoenGrabfeld-ein.txt >> ortschaften.js
cat Schweinfurt-ein.txt >> ortschaften.js
cat Wuerzburg-ein.txt >> ortschaften.js

# sed -i 's/\ä/\&auml\;/g;s/\Ä/\&Auml\;/g;s/\ö/\&ouml\;/g;s/\Ö/\&Ouml\;/g;s/\ü/\&uuml\;/g;s/\Ü/\&Uuml\;/g;s/\ß/\&szlig\;/g' NV.html
# cat NV.html | sed 's/\\FC/\&uuml\;/g;' > NV1.html

rm *.txt

