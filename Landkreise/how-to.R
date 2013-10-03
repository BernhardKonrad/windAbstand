# extract Landkreisgrenzen (hier Schweinfurt)
load("~/Downloads/DEU_adm3.RData")
gadm@polygons[gadm@data$NAME_3=='Schweinfurt']