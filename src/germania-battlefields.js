"use strict";


// values indicate x to y battlefields. For y to x, sort the random rolled values into reverse order...

var BATTLEFIELDS = {};

// distance 1 battlefields.
BATTLEFIELDS.HOUSE_TO_HOUSE = { "distance": 1 };
BATTLEFIELDS.CLOSE_QUARTERS = { "distance": 1 };

// distance 2 battlefields.
BATTLEFIELDS.STREETS = { "distance": 2 };
BATTLEFIELDS.LARGE_BUILDING = { "distance": 2 };

// distance 3 battlefields.
BATTLEFIELDS.PARK = { "distance": 3 };
BATTLEFIELDS.AVENUE = { "distance": 3 };

//BATTLEFIELDS[ "PODISH-INCUBATOR" ] = { 0.4:["COMMERCIAL-AREA"], 0.6:[ "KONIGSBAU", "SCHLOSSPLATZ" ], 1.0:[ "COMMERCIAL-AREA" ] };