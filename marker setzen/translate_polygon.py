import sys

def writePostPolygon(whichFile):
	whichFile.write('Landkreis = new google.maps.Polygon({paths: triangleCoords,strokeColor:"#FF0000",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#FF0000",fillOpacity: 0,clickable: false});Landkreis.setMap(map);')

infile = sys.argv[1]
outfile = infile.replace('-raw','')

fin = open(infile,'r')
fout = open(outfile,'w')

endOfDocument=False

fout.write('var triangleCoords = [')

for line in fin:
	a,b = line.split(']')
	try:
		a,lng,lat = b.split(' ')
	except ValueError:
		a,b,lng,lat = b.split(' ')
	if '\n' in lat:
		lat = lat.replace('\n','')
	else:
		endOfDocument=True
	if not endOfDocument:
		fout.write('new google.maps.LatLng(' + lat + ',' + lng + '),\n')
	else:
		fout.write('new google.maps.LatLng(' + lat + ',' + lng + ')\n')

fout.write('];\n')
writePostPolygon(fout)

fin.close()
fout.close()


