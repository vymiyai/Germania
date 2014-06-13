"use strict";


// values indicate x to y battlefields. For y to x, sort the random rolled values into reverse order...
// influence points podem ser desnecessarios considerando que todos as batalhas tem um fator de influencia igual sobre as batalhas.
// mínimo sempre 0.5?

var BATTLEFIELDS = {};

BATTLEFIELDS.OPEN_FIELD_CHARGE = {
    // value 6
    ATTACKER:{
        Rifleman:{ apDam:0, m: 1.25 },
        Sniper:{ apDam:0, m: 1.25 },
        "Submachine gunner":{ apDam:0, m: 1.25 },
        "Machine gunner":{ apDam:0, m: 0.75 },
        Medic:{ apDam:0, m: 0.75 },
        "Anti-tank specialist":{ apDam:0, m: 0.75 },
		"Anti-tank rifleman":{ apDam:0, m: 1 }
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