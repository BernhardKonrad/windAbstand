#!/usr/bin/python

import urllib2
opener = urllib2.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
infile = opener.open('http://de.wikipedia.org/wiki/Liste_von_Windkraftanlagen_in_Bayern')
page = infile.read()
lat = []
lng = []
while page:
    try:
        chunk,page = page.split('<span class="latitude">',1)
        lat_el,page = page.split('</span>',1)
        chunk,page = page.split('<span class="longitude">',1)
        lng_el,page = page.split('</span>',1)
        lat.append(lat_el)
        lng.append(lng_el)
    except ValueError:
            break

outfile = 'standorte.js'
fout = open(outfile,'w')

fout.write('var Standorte = [\n')

for i,latlng in enumerate(zip(lat,lng)):
	if i < len(lat)-1:
		fout.write('["Windrad",' + latlng[0] + ',' + latlng[1] + '],\n')
	else:
		fout.write('["Windrad",' + latlng[0] + ',' + latlng[1] + ']];\n')
fout.close()


