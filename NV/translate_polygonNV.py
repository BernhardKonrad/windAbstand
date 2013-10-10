import sys

def f(whichName):
	return(whichName)


readFile = sys.argv[1]
bla,blub,infile = sys.argv[1].split('/')
outfile = infile.replace('-raw','-LK')

LKName = {'aschaffenburg-raw.txt': f('LKAschaffenburg'),
'bad-kissingen-raw.txt': f('LKBadKissingen'),
'hassberge-raw.txt': f('LKHassberge'),
'kitzingen-raw.txt': f('LKKitzingen'),
'main-spessart-raw.txt': f('LKMainSpessart'),
'miltenberg-raw.txt': f('LKMiltenberg'),
'rhoen-grabfeld-raw.txt': f('LKRhoenGrabfeld'),
'schweinfurt-land-raw.txt': f('LKSchweinfurt'),
'wue-land-raw.txt': f('LKWuerzburg')
}[infile]

fin = open(readFile,'r')
fout = open(outfile,'w')

endOfDocument=False

fout.write('var ' + LKName + ' = [\n')

LKName = LKName[2:]

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
		fout.write('["' + LKName + '",' + lat + ',' + lng + '],\n')
	else:
		fout.write('["' + LKName + '",' + lat + ',' + lng + '],\n')

fout.write('];\n')

fin.close()
fout.close()


