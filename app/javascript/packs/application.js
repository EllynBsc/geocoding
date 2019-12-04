import "bootstrap";

import 'mapbox-gl/dist/mapbox-gl.css'; // import the css of the package mapbox-gl
import { initMapbox } from '../plugins/init_mapbox' // import the function file
initMapbox(); //invoke the function


import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
// adding the css of the search bar of the map

import { initAutocomplete } from '../plugins/init_autocomplete'

initAutocomplete(); //invoke the function initAutocomplete
