"use strict";


// values indicate x to y battlefields. For y to x, sort the random rolled values into reverse order...
// influence points podem ser desnecessarios considerando que todos as batalhas tem um fator de influencia igual sobre as batalhas.
// mínimo sempre 0.5?

var BATTLEFIELDS = {};

BATTLEFIELDS.OPEN_FIELD_CHARGE = {
    // value 6
    ATTACKER:{
        Rifleman:{ m: 1.25 },
        Sniper:{ m: 1.25 },
        "Submachine gunner":{ m: 1.25 },
        "Machine gunner":{ m: 0.75 },
        Medic:{ m: 0.75 },
        "Anti-tank specialist":{ m: 0.75 },
		"Anti-tank rifleman":{ m: 1 }
    },
    DEFENDER:{
        Rifleman:{ apDam: 1.25 },
        Sniper:{ apDam: 1 },
        "Submachine gunner":{ apDam: 1.25 },
        "Machine gunner":{ apDam: 2 },
        Medic:{ apDam: 0.25 },
        "Anti-tank specialist":{ apDam: 0.25 },
		"Anti-tank rifleman":{ apDam: 1 }
    }
};

BATTLEFIELDS.THROUGH_THE_RUINS = {
    // value 7
    ATTACKER:{
        Rifleman:{ apDam: 1 },
        Sniper:{ apDam: 0.5 },
        "Submachine gunner":{ apDam: 2 },
        "Machine gunner":{ apDam: 0.25 },
        Medic:{ apDam: 3 },
        "Anti-tank specialist":{ apDam:0.25 },
		"Anti-tank rifleman":{ apDam: 1 }
    },
    DEFENDER:{
        Rifleman:{ apDam: 1 },
        Sniper:{ apDam: 0.75 },
        "Submachine gunner":{ apDam: 2 },
        "Machine gunner":{ apDam: 0.75 },
        Medic:{ apDam: 2 },
        "Anti-tank specialist":{ apDam:0.25 },
		"Anti-tank rifleman":{ apDam: 1 }
    }
};

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
