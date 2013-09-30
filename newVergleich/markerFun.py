import sys

def writeMarker(file,ortname,lat,lng):
	file.write('var marker = new google.maps.Marker({position:new google.maps.LatLng(' + str(lat) + ', ' + str(lng) + ')});')
	file.write('markers.push(marker);\n')


outname = 'markerFun.txt'
fout = open(outname,'w')

if not len(sys.argv) > 1:
	print 'No Input Files'
	quit()

colors = ['#ff7f24','#76b7e1','#c8adcc']
for counter,inname in enumerate(sys.argv[1:]):
	fin = open(inname,'r')

	for line in fin:
		try:
			lat,lng = line.split(',')
			lng = lng.replace('\n','')
			writeMarker(fout,ortsname,lat,lng)
		except ValueError:
			ortsname=line.replace('\n','').replace('\r','')
	fin.close()
fout.close()
