"use strict";


// values indicate x to y battlefields. For y to x, sort the random rolled values into reverse order...
// influence points podem ser desnecessarios considerando que todos as batalhas tem um fator de influencia igual sobre as batalhas.
// mínimo sempre 0.5?

var BATTLEFIELDS = {};

BATTLEFIELDS.OPEN_FIELD_CHARGE = {
    ATTACKER:{
        "Rifleman":             { m: 1.25 },
        "Sniper":               { m: 1.25 },
        "Submachine gunner":    { m: 1.25 },
        "Machine gunner":       { m: 0.75 },
        "Medic":                { m: 1 },
        "Anti-tank specialist": { m: 0.75 },
		"Anti-tank rifleman":   { m: 0.75 }
    },
    DEFENDER:{
        "Rifleman":             { rof: 0.75 },
        "Sniper":               { rof: 0.5},
        "Submachine gunner":    { rof: 2 },
        "Machine gunner":       { rof: 2.5 },
        "Medic":                { rof: 0.75 },
        "Anti-tank specialist": { rof: 0.25 },
		"Anti-tank rifleman":   { rof: 0.25 }
    },
    getDamageMultipliers: function( attackerInfluence, defenderInfluence )
    {
        //return { ATTACKER:0, DEFENDER:defenderInfluence/attackerInfluence };
        return { ATTACKER:0, DEFENDER:defenderInfluence/attackerInfluence };
    }
};

BATTLEFIELDS.THROUGH_THE_RUINS = {
    ATTACKER:{
        "Rifleman":             { apDam: 1.25 },
        "Sniper":               { apDam: 0.75 },
        "Submachine gunner":    { apDam: 3 },
        "Machine gunner":       { apDam: 0.25 },
        "Medic":                { apDam: 1.25 },
        "Anti-tank specialist": { apDam: 0.25 },
		"Anti-tank rifleman":   { apDam: 0.25 }
    },
    DEFENDER:{
        "Rifleman":             { apDam: 1 },
        "Sniper":               { apDam: 1 },
        "Submachine gunner":    { apDam: 2.5 },
        "Machine gunner":       { apDam: 1 },
        "Medic":                { apDam: 1 },
        "Anti-tank specialist": { apDam: 0.25 },
		"Anti-tank rifleman":   { apDam: 0.25 }
    },
    getDamageMultipliers: function( attackerInfluence, defenderInfluence )
    {
        //return { ATTACKER:0, DEFENDER:defenderInfluence/attackerInfluence };
        return { ATTACKER:attackerInfluence/defenderInfluence, DEFENDER:defenderInfluence/attackerInfluence };
    }
};