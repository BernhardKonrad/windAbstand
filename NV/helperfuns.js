function MarkerPin(color) {
	var pin = new google.maps.MarkerImage(
	"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + color,new google.maps.Size(21, 34),new google.maps.Point(0,0),new google.maps.Point(10, 34));
	return pin;
}

function set_info_window(map, marker, info_window, content) {
	google.maps.event.addListener(marker, 'click', function () {
		info_window.setContent(content);
		info_window.open(map, marker);
	})
}


// Translate database variables

function getLandkreisPoints(Landkreis){
	points = [];
	for (var i=0, length=Landkreis.length; i<length; i++){
		var point = new google.maps.LatLng(Landkreis[i][1],Landkreis[i][2])
		points.push(point)
	}
	return(points)
}

function getPolygon(Landkreis){
	var poly = new google.maps.Polygon({
		paths: getLandkreisPoints(Landkreis),
		map: null,
		strokeColor:"#FF0000",
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: "#FF0000",
		fillOpacity: 0,
		clickable: false
	})
	return(poly)
}

function getMarkers(Ortschaften){
	var markers = []
	for (var i=0, length=Ortschaften.length; i < length; i++){
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(Ortschaften[i][1],Ortschaften[i][2]),
			map: null,
			icon: MarkerPin(Ortschaften[i][3]),
			title: Ortschaften[i][0] + '\n' + Ortschaften[i][1] + '\n' + Ortschaften[i][2]
		});
		markers.push(marker);
		}
	return(markers)
}

var windradIcon = new google.maps.MarkerImage(
    'http://ec.l.thumbs.canstockphoto.com/canstock16647054.jpg',
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(25, 25)
);

function getMarkersStandorte(Standorte){
	var markers = []
	for (var i=0, length=Standorte.length; i < length; i++){
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(Standorte[i][1],Standorte[i][2]),
			map: null,
			icon: windradIcon,
			title: Standorte[i][0] + '\n' + Standorte[i][1] + '\n' + Standorte[i][2]
		});
		markers.push(marker);
		}
	return(markers)
}

function getCircles(Ortschaften,rad){
	var circles = []
	for (var i=0, length=Ortschaften.length; i < length; i++){
		var circle = new google.maps.Circle({
			center: new google.maps.LatLng(Ortschaften[i][1],Ortschaften[i][2]),
			map: null,
			radius: rad,
			fillColor: Ortschaften[i][3],
			strokeWeight: 0,
			fillOpacity: 0.3,
			zIndex: -100
		});
		circles.push(circle);
	}
	return(circles)
}



//
// Landkreise
var LKAschaffenburgL = getPolygon(LKAschaffenburg)
var LKAschaffenburgR = getPolygon(LKAschaffenburg)
var LKBadKissingenL = getPolygon(LKBadKissingen)
var LKBadKissingenR = getPolygon(LKBadKissingen)
var LKHassbergeL = getPolygon(LKHassberge)
var LKHassbergeR = getPolygon(LKHassberge)
var LKKitzingenL = getPolygon(LKKitzingen)
var LKKitzingenR = getPolygon(LKKitzingen)
var LKMainSpessartL = getPolygon(LKMainSpessart)
var LKMainSpessartR = getPolygon(LKMainSpessart)
var LKMiltenbergL = getPolygon(LKMiltenberg)
var LKMiltenbergR = getPolygon(LKMiltenberg)
var LKRhoenGrabfeldL = getPolygon(LKRhoenGrabfeld)
var LKRhoenGrabfeldR = getPolygon(LKRhoenGrabfeld)
var LKSchweinfurtL = getPolygon(LKSchweinfurt)
var LKSchweinfurtR = getPolygon(LKSchweinfurt)
var LKWuerzburgL = getPolygon(LKWuerzburg)
var LKWuerzburgR = getPolygon(LKWuerzburg)

// Standorte
var markersStandorteL = getMarkersStandorte(Standorte)
var markersStandorteR = getMarkersStandorte(Standorte)

// Ein-pro-Ortschaft Marker
var markersAschaffenburgEinL = getMarkers(OrtschaftenAschaffenburgEin)
var markersAschaffenburgEinR = getMarkers(OrtschaftenAschaffenburgEin)
var markersBadKissingenEinL = getMarkers(OrtschaftenBadKissingenEin)
var markersBadKissingenEinR = getMarkers(OrtschaftenBadKissingenEin)
var markersHassbergeEinL = getMarkers(OrtschaftenHassbergeEin)
var markersHassbergeEinR = getMarkers(OrtschaftenHassbergeEin)
var markersKitzingenEinL = getMarkers(OrtschaftenKitzingenEin)
var markersKitzingenEinR = getMarkers(OrtschaftenKitzingenEin)
var markersMainSpessartEinL = getMarkers(OrtschaftenMainSpessartEin)
var markersMainSpessartEinR = getMarkers(OrtschaftenMainSpessartEin)
var markersMiltenbergEinL = getMarkers(OrtschaftenMiltenbergEin)
var markersMiltenbergEinR = getMarkers(OrtschaftenMiltenbergEin)
var markersRhoenGrabfeldEinL = getMarkers(OrtschaftenRhoenGrabfeldEin)
var markersRhoenGrabfeldEinR = getMarkers(OrtschaftenRhoenGrabfeldEin)
var markersSchweinfurtEinL = getMarkers(OrtschaftenSchweinfurtEin)
var markersSchweinfurtEinR = getMarkers(OrtschaftenSchweinfurtEin)
var markersWuerzburgEinL = getMarkers(OrtschaftenWuerzburgEin)
var markersWuerzburgEinR = getMarkers(OrtschaftenWuerzburgEin)


// Alle Marker
var markersAschaffenburgL = getMarkers(OrtschaftenAschaffenburg)
var markersAschaffenburgR = getMarkers(OrtschaftenAschaffenburg)
var markersBadKissingenL = getMarkers(OrtschaftenBadKissingen)
var markersBadKissingenR = getMarkers(OrtschaftenBadKissingen)
var markersHassbergeL = getMarkers(OrtschaftenHassberge)
var markersHassbergeR = getMarkers(OrtschaftenHassberge)
var markersKitzingenL = getMarkers(OrtschaftenKitzingen)
var markersKitzingenR = getMarkers(OrtschaftenKitzingen)
var markersMainSpessartL = getMarkers(OrtschaftenMainSpessart)
var markersMainSpessartR = getMarkers(OrtschaftenMainSpessart)
var markersMiltenbergL = getMarkers(OrtschaftenMiltenberg)
var markersMiltenbergR = getMarkers(OrtschaftenMiltenberg)
var markersRhoenGrabfeldL = getMarkers(OrtschaftenRhoenGrabfeld)
var markersRhoenGrabfeldR = getMarkers(OrtschaftenRhoenGrabfeld)
var markersSchweinfurtL = getMarkers(OrtschaftenSchweinfurt)
var markersSchweinfurtR = getMarkers(OrtschaftenSchweinfurt)
var markersWuerzburgL = getMarkers(OrtschaftenWuerzburg)
var markersWuerzburgR = getMarkers(OrtschaftenWuerzburg)


// Kreise
var circlesAschaffenburgL = getCircles(OrtschaftenAschaffenburg,1000)
var circlesAschaffenburgR = getCircles(OrtschaftenAschaffenburg,2000)
var circlesBadKissingenL = getCircles(OrtschaftenBadKissingen,1000)
var circlesBadKissingenR = getCircles(OrtschaftenBadKissingen,2000)
var circlesHassbergeL = getCircles(OrtschaftenHassberge,1000)
var circlesHassbergeR = getCircles(OrtschaftenHassberge,2000)
var circlesKitzingenL = getCircles(OrtschaftenKitzingen,1000)
var circlesKitzingenR = getCircles(OrtschaftenKitzingen,2000)
var circlesMainSpessartL = getCircles(OrtschaftenMainSpessart,1000)
var circlesMainSpessartR = getCircles(OrtschaftenMainSpessart,2000)
var circlesMiltenbergL = getCircles(OrtschaftenMiltenberg,1000)
var circlesMiltenbergR = getCircles(OrtschaftenMiltenberg,2000)
var circlesRhoenGrabfeldL = getCircles(OrtschaftenRhoenGrabfeld,1000)
var circlesRhoenGrabfeldR = getCircles(OrtschaftenRhoenGrabfeld,2000)
var circlesSchweinfurtL = getCircles(OrtschaftenSchweinfurt,1000)
var circlesSchweinfurtR = getCircles(OrtschaftenSchweinfurt,2000)
var circlesWuerzburgL = getCircles(OrtschaftenWuerzburg,1000)
var circlesWuerzburgR = getCircles(OrtschaftenWuerzburg,2000)

//

function getWhichMap(whichMap){
	if (whichMap == "left"){
		thisMap = LKAschaffenburgL.getMap();
	}
	else if (whichMap == "right") {
		thisMap = LKAschaffenburgR.getMap();
	}
	else {
		thisMap = null;
	}
	return(thisMap)
}

function setRadius(whichMap,radius) {
	if (whichMap == "left") {
		for (var i=0, length=circlesAschaffenburgL.length; i<length; i++){
			circlesAschaffenburgL[i].setRadius(radius);
		}
		for (var i=0, length=circlesBadKissingenL.length; i<length; i++){
			circlesBadKissingenL[i].setRadius(radius);
		}
		for (var i=0, length=circlesHassbergeL.length; i<length; i++){
			circlesHassbergeL[i].setRadius(radius);
		}
		for (var i=0, length=circlesKitzingenL.length; i<length; i++){
			circlesKitzingenL[i].setRadius(radius);
		}
		for (var i=0, length=circlesMainSpessartL.length; i<length; i++){
			circlesMainSpessartL[i].setRadius(radius);
		}
		for (var i=0, length=circlesMiltenbergL.length; i<length; i++){
			circlesMiltenbergL[i].setRadius(radius);
		}
		for (var i=0, length=circlesRhoenGrabfeldL.length; i<length; i++){
			circlesRhoenGrabfeldL[i].setRadius(radius);
		}
		for (var i=0, length=circlesSchweinfurtL.length; i<length; i++){
			circlesSchweinfurtL[i].setRadius(radius);
		}
		for (var i=0, length=circlesWuerzburgL.length; i<length; i++){
			circlesWuerzburgL[i].setRadius(radius);
		}
	}
	else {
		for (var i=0, length=circlesAschaffenburgR.length; i<length; i++){
			circlesAschaffenburgR[i].setRadius(radius);
		}
		for (var i=0, length=circlesBadKissingenR.length; i<length; i++){
			circlesBadKissingenR[i].setRadius(radius);
		}
		for (var i=0, length=circlesHassbergeR.length; i<length; i++){
			circlesHassbergeR[i].setRadius(radius);
		}
		for (var i=0, length=circlesKitzingenR.length; i<length; i++){
			circlesKitzingenR[i].setRadius(radius);
		}
		for (var i=0, length=circlesMainSpessartR.length; i<length; i++){
			circlesMainSpessartR[i].setRadius(radius);
		}
		for (var i=0, length=circlesMiltenbergR.length; i<length; i++){
			circlesMiltenbergR[i].setRadius(radius);
		}
		for (var i=0, length=circlesRhoenGrabfeldR.length; i<length; i++){
			circlesRhoenGrabfeldR[i].setRadius(radius);
		}
		for (var i=0, length=circlesSchweinfurtR.length; i<length; i++){
			circlesSchweinfurtR[i].setRadius(radius);
		}
		for (var i=0, length=circlesWuerzburgR.length; i<length; i++){
			circlesWuerzburgR[i].setRadius(radius);
		}
	}
}

function setMap(Ortschaften,whichMap){
	thisMap = getWhichMap(whichMap);
	for (var i=0, length=Ortschaften.length; i<length; i++){
		Ortschaften[i].setMap(thisMap);
	}
}


function makeCirclesTransparent(whichMap,alpha) {
	var strokeWeight = 1*!(alpha==0 || alpha==0.3 || alpha==1);
	if (whichMap == "left") {
		for (var i=0, length=circlesAschaffenburgL.length; i<length; i++){
			circlesAschaffenburgL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesBadKissingenL.length; i<length; i++){
			circlesBadKissingenL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesHassbergeL.length; i<length; i++){
			circlesHassbergeL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesKitzingenL.length; i<length; i++){
			circlesKitzingenL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesMainSpessartL.length; i<length; i++){
			circlesMainSpessartL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesMiltenbergL.length; i<length; i++){
			circlesMiltenbergL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesRhoenGrabfeldL.length; i<length; i++){
			circlesRhoenGrabfeldL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesSchweinfurtL.length; i<length; i++){
			circlesSchweinfurtL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesWuerzburgL.length; i<length; i++){
			circlesWuerzburgL[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
	}
	else {
		for (var i=0, length=circlesAschaffenburgR.length; i<length; i++){
			circlesAschaffenburgR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesBadKissingenR.length; i<length; i++){
			circlesBadKissingenR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesHassbergeR.length; i<length; i++){
			circlesHassbergeR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesKitzingenR.length; i<length; i++){
			circlesKitzingenR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesMainSpessartR.length; i<length; i++){
			circlesMainSpessartR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesMiltenbergR.length; i<length; i++){
			circlesMiltenbergR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesRhoenGrabfeldR.length; i<length; i++){
			circlesRhoenGrabfeldR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesSchweinfurtR.length; i<length; i++){
			circlesSchweinfurtR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
		for (var i=0, length=circlesWuerzburgR.length; i<length; i++){
			circlesWuerzburgR[i].setOptions({'fillOpacity': alpha, 'strokeWeight': strokeWeight});
		}
	}
}


function changeCircles(whichLandkreisString,makeVisible){
	leftMap = LKAschaffenburgL.getMap();
	rightMap = LKAschaffenburgR.getMap();
	switch (whichLandkreisString){
		case "Aschaffenburg":
			circlesLandkreisL = circlesAschaffenburgL;
			circlesLandkreisR = circlesAschaffenburgR;
			markersLandkreisEinL = markersAschaffenburgEinL;
			markersLandkreisEinR = markersAschaffenburgEinR;
			markersLandkreisL = markersAschaffenburgL;
			markersLandkreisR = markersAschaffenburgR;
			break;
		case "BadKissingen":
			circlesLandkreisL = circlesBadKissingenL;
			circlesLandkreisR = circlesBadKissingenR;
			markersLandkreisEinL = markersBadKissingenEinL;
			markersLandkreisEinR = markersBadKissingenEinR;
			markersLandkreisL = markersBadKissingenL;
			markersLandkreisR = markersBadKissingenR;
			break;
		case "Hassberge":
			circlesLandkreisL = circlesHassbergeL;
			circlesLandkreisR = circlesHassbergeR;
			markersLandkreisEinL = markersHassbergeEinL;
			markersLandkreisEinR = markersHassbergeEinR;
			markersLandkreisL = markersHassbergeL;
			markersLandkreisR = markersHassbergeR;
			break;
		case "Kitzingen":
			circlesLandkreisL = circlesKitzingenL;
			circlesLandkreisR = circlesKitzingenR;
			markersLandkreisEinL = markersKitzingenEinL;
			markersLandkreisEinR = markersKitzingenEinR;
			markersLandkreisL = markersKitzingenL;
			markersLandkreisR = markersKitzingenR;
			break;
		case "MainSpessart":
			circlesLandkreisL = circlesMainSpessartL;
			circlesLandkreisR = circlesMainSpessartR;
			markersLandkreisEinL = markersMainSpessartEinL;
			markersLandkreisEinR = markersMainSpessartEinR;
			markersLandkreisL = markersMainSpessartL;
			markersLandkreisR = markersMainSpessartR;
			break;
		case "Miltenberg":
			circlesLandkreisL = circlesMiltenbergL;
			circlesLandkreisR = circlesMiltenbergR;
			markersLandkreisEinL = markersMiltenbergEinL;
			markersLandkreisEinR = markersMiltenbergEinR;
			markersLandkreisL = markersMiltenbergL;
			markersLandkreisR = markersMiltenbergR;
			break;
		case "RhoenGrabfeld":
			circlesLandkreisL = circlesRhoenGrabfeldL;
			circlesLandkreisR = circlesRhoenGrabfeldR;
			markersLandkreisEinL = markersRhoenGrabfeldEinL;
			markersLandkreisEinR = markersRhoenGrabfeldEinR;
			markersLandkreisL = markersRhoenGrabfeldL;
			markersLandkreisR = markersRhoenGrabfeldR;
			break;
		case "Schweinfurt":
			circlesLandkreisL = circlesSchweinfurtL;
			circlesLandkreisR = circlesSchweinfurtR;
			markersLandkreisEinL = markersSchweinfurtEinL;
			markersLandkreisEinR = markersSchweinfurtEinR;
			markersLandkreisL = markersSchweinfurtL;
			markersLandkreisR = markersSchweinfurtR;
			break;
		case "Wuerzburg":
			circlesLandkreisL = circlesWuerzburgL;
			circlesLandkreisR = circlesWuerzburgR;
			markersLandkreisEinL = markersWuerzburgEinL;
			markersLandkreisEinR = markersWuerzburgEinR;
			markersLandkreisL = markersWuerzburgL;
			markersLandkreisR = markersWuerzburgR;
			break;
	}
	if (makeVisible) {
		for (var i=0, length=circlesLandkreisL.length; i<length; i++){
			circlesLandkreisL[i].setMap(leftMap);
			circlesLandkreisR[i].setMap(rightMap);
			markersLandkreisL[i].setMap(leftMap);
			markersLandkreisR[i].setMap(rightMap);
		}
		for (var i=0, length=markersLandkreisEinL.length; i<length; i++){
			markersLandkreisEinL[i].setMap(leftMap);
			markersLandkreisEinR[i].setMap(rightMap);
		}
	}
	else {
		for (var i=0, length=circlesLandkreisL.length; i<length; i++){
			circlesLandkreisL[i].setMap(null);
			circlesLandkreisR[i].setMap(null);
			markersLandkreisL[i].setMap(null);
			markersLandkreisR[i].setMap(null);
		}
		for (var i=0, length=markersLandkreisEinL.length; i<length; i++){
			markersLandkreisEinL[i].setMap(null);
			markersLandkreisEinR[i].setMap(null);
		}
	}

makeMarkersVisible("left",whichMarker("left"))
makeMarkersVisible("right",whichMarker("right"))
}

function whichMarker(whichMap){
	switch (whichMap){
		case "left":
			markerList = document.getElementsByName("markersL");
			break;
		case "right":
			markerList = document.getElementsByName("markersR");
			break;
	}
	if (markerList[0].checked){
		return("keiner");
	}
	else if (markerList[1].checked){
		return("einer");
	}
	else {
		return("alle");
	}
}

function makeMarkersVisible(whichMap,whichMarkers) {
	switch (whichMarkers){
		case "keiner":
			var alleMap = null;
			var einerMap = null;
			break;
		case "einer":
			var alleMap = null;
			var einerMap = getWhichMap(whichMap);
			break;
		case "alle":
			var alleMap = getWhichMap(whichMap);
			var einerMap = null;
			break;
	}

	if (whichMap == "left") {
		if (isActive('checkAschaffenburg')){
			for (var i=0, length=markersAschaffenburgL.length; i<length; i++){
				markersAschaffenburgL[i].setMap(alleMap);
			}
			for (var i=0, length=markersAschaffenburgEinL.length; i<length; i++){
				markersAschaffenburgEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkBadKissingen')){
			for (var i=0, length=markersBadKissingenL.length; i<length; i++){
				markersBadKissingenL[i].setMap(alleMap);
			}
			for (var i=0, length=markersBadKissingenEinL.length; i<length; i++){
				markersBadKissingenEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkHassberge')){
			for (var i=0, length=markersHassbergeL.length; i<length; i++){
				markersHassbergeL[i].setMap(alleMap);
			}
			for (var i=0, length=markersHassbergeEinL.length; i<length; i++){
				markersHassbergeEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkKitzingen')){
			for (var i=0, length=markersKitzingenL.length; i<length; i++){
				markersKitzingenL[i].setMap(alleMap);
			}
			for (var i=0, length=markersKitzingenEinL.length; i<length; i++){
				markersKitzingenEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkMainSpessart')){
			for (var i=0, length=markersMainSpessartL.length; i<length; i++){
				markersMainSpessartL[i].setMap(alleMap);
			}
			for (var i=0, length=markersMainSpessartEinL.length; i<length; i++){
				markersMainSpessartEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkMiltenberg')){
			for (var i=0, length=markersMiltenbergL.length; i<length; i++){
				markersMiltenbergL[i].setMap(alleMap);
			}
			for (var i=0, length=markersMiltenbergEinL.length; i<length; i++){
				markersMiltenbergEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkRhoenGrabfeld')){
			for (var i=0, length=markersRhoenGrabfeldL.length; i<length; i++){
				markersRhoenGrabfeldL[i].setMap(alleMap);
			}
			for (var i=0, length=markersRhoenGrabfeldEinL.length; i<length; i++){
				markersRhoenGrabfeldEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkSchweinfurt')){
			for (var i=0, length=markersSchweinfurtL.length; i<length; i++){
				markersSchweinfurtL[i].setMap(alleMap);
			}
			for (var i=0, length=markersSchweinfurtEinL.length; i<length; i++){
				markersSchweinfurtEinL[i].setMap(einerMap);
			}
		}
		if (isActive('checkWuerzburg')){
			for (var i=0, length=markersWuerzburgL.length; i<length; i++){
				markersWuerzburgL[i].setMap(alleMap);
			}
			for (var i=0, length=markersWuerzburgEinL.length; i<length; i++){
				markersWuerzburgEinL[i].setMap(einerMap);
			}
		}
	}
	else if (whichMap == "right") {
		if (isActive('checkAschaffenburg')){
			for (var i=0, length=markersAschaffenburgR.length; i<length; i++){
				markersAschaffenburgR[i].setMap(alleMap);
			}
			for (var i=0, length=markersAschaffenburgEinR.length; i<length; i++){
				markersAschaffenburgEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkBadKissingen')){
			for (var i=0, length=markersBadKissingenR.length; i<length; i++){
				markersBadKissingenR[i].setMap(alleMap);
			}
			for (var i=0, length=markersBadKissingenEinR.length; i<length; i++){
				markersBadKissingenEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkHassberge')){
			for (var i=0, length=markersHassbergeR.length; i<length; i++){
				markersHassbergeR[i].setMap(alleMap);
			}
			for (var i=0, length=markersHassbergeEinR.length; i<length; i++){
				markersHassbergeEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkKitzingen')){
			for (var i=0, length=markersKitzingenR.length; i<length; i++){
				markersKitzingenR[i].setMap(alleMap);
			}
			for (var i=0, length=markersKitzingenEinR.length; i<length; i++){
				markersKitzingenEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkMainSpessart')){
			for (var i=0, length=markersMainSpessartR.length; i<length; i++){
				markersMainSpessartR[i].setMap(alleMap);
			}
			for (var i=0, length=markersMainSpessartEinR.length; i<length; i++){
				markersMainSpessartEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkMiltenberg')){
			for (var i=0, length=markersMiltenbergR.length; i<length; i++){
				markersMiltenbergR[i].setMap(alleMap);
			}
			for (var i=0, length=markersMiltenbergEinR.length; i<length; i++){
				markersMiltenbergEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkRhoenGrabfeld')){
			for (var i=0, length=markersRhoenGrabfeldR.length; i<length; i++){
				markersRhoenGrabfeldR[i].setMap(alleMap);
			}
			for (var i=0, length=markersRhoenGrabfeldEinR.length; i<length; i++){
				markersRhoenGrabfeldEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkSchweinfurt')){
			for (var i=0, length=markersSchweinfurtR.length; i<length; i++){
				markersSchweinfurtR[i].setMap(alleMap);
			}
			for (var i=0, length=markersSchweinfurtEinR.length; i<length; i++){
				markersSchweinfurtEinR[i].setMap(einerMap);
			}
		}
		if (isActive('checkWuerzburg')){
			for (var i=0, length=markersWuerzburgR.length; i<length; i++){
				markersWuerzburgR[i].setMap(alleMap);
			}
			for (var i=0, length=markersWuerzburgEinR.length; i<length; i++){
				markersWuerzburgEinR[i].setMap(einerMap);
			}
		}
	}
}

function isActive(whichLandkreis){
	return(document.getElementById(whichLandkreis).checked);
}
