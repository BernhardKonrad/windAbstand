import sys
import re

def writeMarker(file,lat,lng,ortsname,whichMap='map-canvas'):
	file.write('var marker = new google.maps.Marker({position:new google.maps.LatLng(' + str(lat) + ', ' + str(lng) + '),icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png",title:"' + re.escape(ortsname) + '"});')
	file.write('marker.setMap(map);')


def writeCircle(file,lat,lng,whichMap,radius=2000,color="#AA0011"):
	file.write('var circle = new google.maps.Circle({map:' + whichMap + ',center:new google.maps.LatLng(' + str(lat) + ', ' + str(lng) + '),radius:' + str(radius)+ ',fillColor:"' + str(color) + '",strokeWeight:1,fillOpacity:0.3}); \n')

bla,blub,outname = sys.argv[1].split('/')
outname = outname.replace('.txt','-ein.txt')
fout = open(outname,'w')

if not len(sys.argv) > 1:
	print 'No Input Files'
	quit()

colors = ['#ff7f24','#76b7e1']
for counter,inname in enumerate(sys.argv[1:]):
	fin = open(inname,'r')
	IAmFirst=False

	for line in fin:
		try:
			lat,lng = line.split(',')
			lng = lng.replace('\n','')
			if IAmFirst:
				writeMarker(fout,lat,lng,ortsname)
				IAmFirst=False
#			writeCircle(fout,lat,lng,'map1000',1000,colors[counter])
#			writeCircle(fout,lat,lng,'map2000',2000,colors[counter])
		except ValueError:
			ortsname=line.replace('\n','').replace('\r','')
			IAmFirst=True
	fin.close()
fout.close()
