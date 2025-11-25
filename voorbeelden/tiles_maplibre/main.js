import * as maplibregl from "https://esm.sh/maplibre-gl"; //import 

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.pdok.nl/kadaster/brt-achtergrondkaart/ogc/v1/styles/standaard__webmercatorquad?f=json', // style URL
    center: [5.4407, 52.0518], // starting position [lng, lat]
    zoom: 7, // starting zoomlevel
    minZoom: 6, // minimum zoomlevel zoom out
    maxZoom: 14 // maximum zoomlevel zoom in
});