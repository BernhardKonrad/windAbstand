import sys

def writeCircle(file,lat,lng,radius=1000,color="#AA0011"):
	file.write('var circle = new google.maps.Circle({center:new google.maps.LatLng(' + str(lat) + ', ' + str(lng) + '),radius:' + str(radius)+ ',fillColor:"' + str(color) + '",strokeWeight:1,fillOpacity:1}); \n')
	file.write('circles.push(circle);\n')


outname = 'circleFun.txt'
fout = open(outname,'w')

if not len(sys.argv) > 1:
	print 'No Input Files'
	quit()

colors = ['#ff7f24','#76b7e1','#c8adcc','#FF00FF']
for counter,inname in enumerate(sys.argv[1:]):
	fin = open(inname,'r')

	for line in fin:
		try:
			lat,lng = line.split(',')
			lng = lng.replace('\n','')
#			writeMarker(fout,ortsname,lat,lng)
			writeCircle(fout,lat,lng,1000,colors[counter])
		except ValueError:
			ortsname=line.replace('\n','').replace('\r','')
	fin.close()
fout.close()
