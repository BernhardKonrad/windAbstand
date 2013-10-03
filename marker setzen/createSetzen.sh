python translate_polygon.py ../Landkreise/aschaffenburg-raw.txt
python translate_polygon.py ../Landkreise/bad-kissingen-raw.txt
python translate_polygon.py ../Landkreise/haßberge-raw.txt
python translate_polygon.py ../Landkreise/kitzingen-raw.txt
python translate_polygon.py ../Landkreise/main-spessart-raw.txt
python translate_polygon.py ../Landkreise/miltenberg-raw.txt
python translate_polygon.py ../Landkreise/rhön-grabfeld-raw.txt
python translate_polygon.py ../Landkreise/schweinfurt-land-raw.txt
python translate_polygon.py ../Landkreise/wue-land-raw.txt
python einMarker.py ../Ortschaften/Würzburg.txt
python einMarker.py ../Ortschaften/Schweinfurt.txt
python einMarker.py ../Ortschaften/Kitzingen.txt
python einMarker.py ../Ortschaften/Main-Spessart.txt
cat pre.txt > setzen.html
cat ../Landkreise/aschaffenburg.txt >> setzen.html
cat ../Landkreise/bad-kissingen.txt >> setzen.html
cat ../Landkreise/haßberge.txt >> setzen.html
cat ../Landkreise/kitzingen.txt >> setzen.html
cat ../Landkreise/main-spessart.txt >> setzen.html
cat ../Landkreise/miltenberg.txt >> setzen.html
cat ../Landkreise/rhön-grabfeld.txt >> setzen.html
cat ../Landkreise/schweinfurt-land.txt >> setzen.html
cat ../Landkreise/wue-land.txt >> setzen.html
cat Würzburg-ein.txt >> setzen.html
cat Schweinfurt-ein.txt >> setzen.html
cat Main-Spessart-ein.txt >> setzen.html
cat Kitzingen-ein.txt >> setzen.html
cat post.txt >> setzen.html
rm Schweinfurt-ein.txt
rm Würzburg-ein.txt
rm Kitzingen-ein.txt
rm Main-Spessart-ein.txt
