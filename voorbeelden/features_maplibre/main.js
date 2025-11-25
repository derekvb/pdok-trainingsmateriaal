import * as maplibregl from "https://esm.sh/maplibre-gl";
import OGCFeatureCollection from './mapbox-gl-ogc-feature-collection.patched.js';

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://api.pdok.nl/kadaster/brt-achtergrondkaart/ogc/v1/styles/standaard__webmercatorquad?f=json', // style URL
    center: [5.4407, 52.0518], // starting position [lng, lat]
    zoom: 7, // starting zoom
    minZoom: 6,
    maxZoom: 16,
});

map.on('load', () => {
    const geslotenvisserijsource = 'collection-src'

    new OGCFeatureCollection(geslotenvisserijsource, map, {
        url: 'https://api.pdok.nl/rvo/gesloten-gebieden-visserij/ogc/v1',
        collectionId: 'geslotenvisserij',
        limit: 100
    })

    map.addLayer({
        'id': 'geslotenvisserij',
        'source': geslotenvisserijsource,
        'type': 'fill',
        'paint': {
            'fill-color': '#B42222',
            'fill-opacity': 0.7
        }
    })
})