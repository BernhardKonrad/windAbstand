python translate_polygon.py ../Landkreise/wue-land-raw.txt
python translate_polygon.py ../Landkreise/kitzingen-raw.txt
python translate_polygon.py ../Landkreise/schweinfurt-land-raw.txt
python einMarker.py ../Ortschaften/Würzburg.txt
python einMarker.py ../Ortschaften/Schweinfurt.txt
cat pre.txt > setzen.html
cat ../Landkreise/wue-land.txt >> setzen.html
cat ../Landkreise/kitzingen.txt >> setzen.html
cat ../Landkreise/schweinfurt-land.txt >> setzen.html
cat Würzburg-ein.txt >> setzen.html
cat Schweinfurt-ein.txt >> setzen.html
cat post.txt >> setzen.html
rm Schweinfurt-ein.txt
rm Würzburg-ein.txt
rm wue-ein.txt
