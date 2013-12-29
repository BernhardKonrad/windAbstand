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

outfile = 'standorte-temp.js'
fout = open(outfile,'w')

fout.write('var Standorte = [\n')

for i,latlng in enumerate(zip(lat,lng)):
	fout.write('["Windrad' + str(i) + '",' + latlng[0] + ',' + latlng[1] + ']')
	if i < len(lat)-1:
		fout.write(',\n')
	else:
		fout.write('];')
fout.close()



#############    make-standorte   ###############

def lineIsData(line):
    return line[0] == '['

def getLatLng(line):
#    ["Windrad0",49.373611111111,11.498333333333],
    line = line.replace('["','').replace('"','').replace('],','').replace('\n','')
    name,lat,lng = line.split(',')
    return lat + ',' + lng


def writeFromDict(neueEintragsliste):
    lineToWrite = ''
    for zahl,eintrag in enumerate(neueEintragsliste):
        if zahl%2 == 0:
            lineToWrite = lineToWrite + '[' + str(eintrag) + ','
        else:
            lineToWrite = lineToWrite + str(eintrag) + '],\n'
    return lineToWrite


def writefromStandorte(line):
    # ["Windrad1",49.664166666667,9.3416666666667],
    line = line.replace('["','').replace('"','').replace('],','').replace('\n','').replace(']];','')
    name,lat,lng = line.split(',')
    return '[' + lat + ',' + lng + '],\n'


from standorte_dict import standorte_dict 


infileStandorte = 'standorte-temp.js'
fin = open(infileStandorte,'r')

outfile = 'standorte.js'
fout = open(outfile,'w')

lineToWrite = 'var Standorte = [\n'
for line in fin:
    if not lineIsData(line):
        continue
    fout.write(lineToWrite)
    originalLatLng = getLatLng(line)
    if originalLatLng in standorte_dict:
        lineToWrite = writeFromDict(standorte_dict[originalLatLng])
        del standorte_dict[originalLatLng]
    else:
        lineToWrite = writefromStandorte(line)
fin.close()


if not len(standorte_dict) == 0:
    print 'Dictionary not empty'
else:
    print 'Dictionary empty'
    
for eintrag in standorte_dict:
    fout.write(lineToWrite)
    lineToWrite = writeFromDict(standorte_dict[eintrag])
lineToWrite = lineToWrite[0:-2]
lineToWrite = lineToWrite + '];'
fout.write(lineToWrite)
   
while eintrag in standorte_dict:
    del standorte_dict[eintrag]
fout.close()
