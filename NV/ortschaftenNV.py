#!/usr/bin/python
import sys
import re

color = sys.argv[2]
readFile = sys.argv[1]
bla,blub,infile = sys.argv[1].split('/')
outfile = infile.replace('.txt','-Ort.txt')

fin = open(readFile,'r')
fout = open(outfile,'w')

fout.write('var Ortschaften' + infile.replace('.txt','') + ' = [\n')

for line in fin:
	try:
		lat,lng = line.split(',')
		lng = lng.replace('\n','').replace('\r','')
		fout.write('["' + ortsname + '",' + lat + ',' + lng + ',"' + color + '"],\n')
	except ValueError:
		ortsname=line.replace('\n','').replace('\r','')
fout.write('["' + ortsname + '",' + lat + ',' + lng + ',"' + color + '"]];\n')
fin.close()
fout.close()


