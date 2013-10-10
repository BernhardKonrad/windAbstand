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
python ortschaftenNV.py ../Ortschaften/Hassberge.txt ed0e0e
python ortschaftenNV.py ../Ortschaften/Kitzingen.txt ff97ff
python ortschaftenNV.py ../Ortschaften/MainSpessart.txt cf0eed
python ortschaftenNV.py ../Ortschaften/Miltenberg.txt 5da559
python ortschaftenNV.py ../Ortschaften/RhoenGrabfeld.txt 0eedc4
python ortschaftenNV.py ../Ortschaften/Schweinfurt.txt 0e97ed
python ortschaftenNV.py ../Ortschaften/Wuerzburg.txt 077f2b


python einMarkerNV.py ../Ortschaften/Aschaffenburg.txt ffa900
python einMarkerNV.py ../Ortschaften/BadKissingen.txt ed6703
python einMarkerNV.py ../Ortschaften/Hassberge.txt ed0e0e
python einMarkerNV.py ../Ortschaften/Kitzingen.txt ff97ff
python einMarkerNV.py ../Ortschaften/MainSpessart.txt cf0eed
python einMarkerNV.py ../Ortschaften/Miltenberg.txt 5da559
python einMarkerNV.py ../Ortschaften/RhoenGrabfeld.txt 0eedc4
python einMarkerNV.py ../Ortschaften/Schweinfurt.txt 0e97ed
python einMarkerNV.py ../Ortschaften/Wuerzburg.txt 077f2b


cat pre.html > NV.html


cat aschaffenburg-LK.txt >> NV.html
cat bad-kissingen-LK.txt >> NV.html
cat hassberge-LK.txt >> NV.html
cat kitzingen-LK.txt >> NV.html
cat main-spessart-LK.txt >> NV.html
cat miltenberg-LK.txt >> NV.html
cat rhoen-grabfeld-LK.txt >> NV.html
cat schweinfurt-land-LK.txt >> NV.html
cat wue-land-LK.txt >> NV.html


cat Aschaffenburg-Ort.txt >> NV.html
cat BadKissingen-Ort.txt >> NV.html
cat Hassberge-Ort.txt >> NV.html
cat Kitzingen-Ort.txt >> NV.html
cat MainSpessart-Ort.txt >> NV.html
cat Miltenberg-Ort.txt >> NV.html
cat RhoenGrabfeld-Ort.txt >> NV.html
cat Schweinfurt-Ort.txt >> NV.html
cat Wuerzburg-Ort.txt >> NV.html


cat Aschaffenburg-ein.txt >> NV.html
cat BadKissingen-ein.txt >> NV.html
cat Hassberge-ein.txt >> NV.html
cat Kitzingen-ein.txt >> NV.html
cat MainSpessart-ein.txt >> NV.html
cat Miltenberg-ein.txt >> NV.html
cat RhoenGrabfeld-ein.txt >> NV.html
cat Schweinfurt-ein.txt >> NV.html
cat Wuerzburg-ein.txt >> NV.html


cat post.html >> NV.html

rm *.txt

