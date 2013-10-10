import sys

color = sys.argv[2]
readFile = sys.argv[1]
bla,blub,infile = sys.argv[1].split('/')
outfile = infile.replace('.txt','-ein.txt')

fin = open(readFile,'r')
fout = open(outfile,'w')

fout.write('var Ortschaften' + infile.replace('.txt','Ein') + ' = [\n')

VeryFirstLine=True
IAmLast=False

for line in fin:	
	try:
		lat,lng = line.split(',')
		lng = lng.replace('\n','').replace('\r','')
	except ValueError:
		if not VeryFirstLine:
			fout.write('["' + ortsname + '",' + lat + ',' + lng + ',"' + color + '"],\n')
		ortsname=line.replace('\n','').replace('\r','')
	VeryFirstLine=False
fout.write('];\n')
fin.close()
fout.close()
