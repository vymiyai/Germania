"use strict";


// values indicate x to y battlefields. For y to x, sort the random rolled values into reverse order...
// influence points podem ser desnecessarios considerando que todos as batalhas tem um fator de influencia igual sobre as batalhas.
// mínimo sempre 0.5?

var BATTLEFIELDS = {};

BATTLEFIELDS.OPEN_FIELD_CHARGE = {
    // value 6
    ATTACKER:{
        RIFLEMAN:{ basicSpeed: 1.25 },
        SNIPER:{ basicSpeed: 1.25 },
        SUBMACHINE_GUNNER:{ basicSpeed: 1.25 },
        MACHINE_GUNNER:{ basicSpeed: 0.75 },
        MEDIC:{ basicSpeed: 0.75 },
        ANTI_TANK_SPECIALIST:{ basicSpeed: 0.75 },
		ANTI_TANK_RIFLEMAN:{ basicSpeed: 1 }
    },
    DEFENDER:{
        RIFLEMAN:{ firePower: 1.25 },
        SNIPER:{ firePower: 1 },
        SUBMACHINE_GUNNER:{ firePower: 1.25 },
        MACHINE_GUNNER:{ firePower: 2 },
        MEDIC:{ firePower: 0.25 },
        ANTI_TANK_SPECIALIST:{ firePower: 0.25 },
		ANTI_TANK_RIFLEMAN:{ firePower: 1 }
    }
};

BATTLEFIELDS.THROUGH_THE_RUINS = {
    // value 7
    ATTACKER:{
        RIFLEMAN:{ firePower: 1 },
        SNIPER:{ firePower: 0.5 },
        SUBMACHINE_GUNNER:{ firePower: 2 },
        MACHINE_GUNNER:{ firePower: 0.25 },
        MEDIC:{ firePower: 3 },
        ANTI_TANK_SPECIALIST:{ firePower:0.25 },
		ANTI_TANK_RIFLEMAN:{ firePower: 1 }
    },
    DEFENDER:{
        RIFLEMAN:{ firePower: 1 },
        SNIPER:{ firePower: 0.75 },
        SUBMACHINE_GUNNER:{ firePower: 2 },
        MACHINE_GUNNER:{ firePower: 0.75 },
        MEDIC:{ firePower: 2 },
        ANTI_TANK_SPECIALIST:{ firePower:0.25 },
		ANTI_TANK_RIFLEMAN:{ firePower: 1 }
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
