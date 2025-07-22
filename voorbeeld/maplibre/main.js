import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.pdok.nl/kadaster/brt-achtergrondkaart/ogc/v1/styles/standaard__webmercatorquad?f=json', // style URL
    center: [5.4407, 52.0518], // starting position [lng, lat]
    zoom: 7, // starting zoom
    minZoom: 6,
    maxZoom: 16,
});

map.on('load', () => {(async () => {
   const geslotenvoorvisserij = await fetch('https://api.pdok.nl/rvo/gesloten-gebieden-visserij/ogc/v1/collections/geslotenvisserij/items?limit=100', {
   headers: {
      'Accept': 'application/geo+json'
   }
   }).then(response => response.json());

   map.addSource('geslotenvoorvisserij', {
      type: 'geojson',
      data: geslotenvoorvisserij
   });

   map.addLayer({
      'id': 'geslotenvoorvisserij',
      'type': 'fill',
      "paint": {
      "fill-color": "rgba(255, 255, 255, 0)",
      "fill-outline-color": "#000000ff",
      "outline-width": 
       }, 
      'source': 'geslotenvoorvisserij'
   });
})()
                     }
      );
