"use strict";

var SOLDIERS = {};

// name
// primary
// secondary
// basic speed
// hp
// max hp

// Debug soldiers...
//SOLDIERS.SOLDIER_01 = { name:"GENERIC SOLDIER 01", primary:WEAPONS[ "KARABINER_98K" ], secondary:WEAPONS[ "WALTHER_P38" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return Math.floor( ( Math.random() * 15 ) + 5 ) }, getHp:function(){ return 100; }, getMaxHp:function(){ return 100; }, getTurnBasedAbilities:function(){ return []; } };
//SOLDIERS.SOLDIER_02 = { name:"GENERIC SOLDIER 02", primary:WEAPONS[ "MG_34" ], secondary:WEAPONS[ "LUGER_P08" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return 10; }, getHp:function(){ return 100; }, getMaxHp:function(){ return 100; }, getTurnBasedAbilities:function(){ return []; } };

// Aurinko (temp).
//SOLDIERS.AURINKO = { name:"AURINKO", primary:WEAPONS[ "SCOPED_KARABINER_98K" ], secondary:WEAPONS[ "LUGER_P08" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return Math.floor( ( Math.random() * 15 ) + 5 ) }, getHp:function(){ return 200; }, getMaxHp:function(){ return 200; }, getTurnBasedAbilities:function(){ return []; } };
/*
    this.name       = stats.name;

    this.apDam      = stats.apDam;      // anti-personnel damage.
    this.atDam      = stats.atDam;      // anti-tank damage.
    this.acc        = stats.acc;        // accuracy.
    this.rof        = stats.rof;        // rate of fire.
    this.m          = stats.m;          // movement.
    this.hp         = stats.hp;         // hit points.
    
    this.currentHp  = stats.currentHp;
    this.maxHp      = stats.maxHp;

    this.primary    = stats.primary;
    this.secondary  = stats.secondary;
*/

SOLDIERS.SOLDIER_01  = { name:"Soldier (rifle)", soldierClass:"Rifleman", apDam:2, atDam:2, acc:2, rof:2, m:2, hp:2, primary:"Karabiner 98k", secondary:"Walther P38" };
SOLDIERS.SOLDIER_02  = { name:"Soldier (SMG)", soldierClass:"Rifleman", apDam:1, atDam:1, acc:2, rof:3, m:3, hp:2, primary:"MP40", secondary:"Walther P38" };

SOLDIERS.AURINKO  = { name:"Aurinko", soldierClass:"Rifleman", apDam:1, atDam:1, acc:1, rof:1, m:1, hp:1, primary:"-", secondary:"-" };

// Finnish army.
SOLDIERS.VALTION    = { name:"Lotta Valtion", soldierClass:"Medic", apDam:3, atDam:2, acc:3, rof:2, m:3, hp:5, primary:"Mosin-Nagant M/39", secondary:"Lahti L-35" };               // rifle?

// Austrian army.
SOLDIERS.STEYR      = { name:"Jan Steyr", soldierClass:"Submachine gunner", apDam:2, atDam:1, acc:2, rof:4, m:5, hp:4, primary:"MP40 Steyr Custom", secondary:"Steyr 1912" };              // submachine gun
SOLDIERS.MANNLICHER = { name:"Erika Mannlicher", soldierClass:"Sniper", apDam:3, atDam:2, acc:5, rof:2, m:3, hp:3, primary:"Scoped Steyr-Mannlicher M1895", secondary:"Luger P08" };    // sniper rifle

// German army.
SOLDIERS.GROSSFUSS  = { name:"Dieter Grossfuss", soldierClass:"Machine gunner", apDam:3, atDam:2, acc:3, rof:5, m:3, hp:2, primary:"MG42", secondary:"Walther P38" };                           // machine gun
SOLDIERS.MAUSER     = { name:"Bernhard Mauser", soldierClass:"Rifleman", apDam:3, atDam:2, acc:3, rof:3, m:3, hp:4, primary:"Karabiner 98k Custom", secondary:"Mauser HSc" };            // rifle
SOLDIERS.SCHNEIDER  = { name:"Paul Schneider", soldierClass:"Anti-tank specialist", apDam:2, atDam:5, acc:1, rof:2, m:4, hp:4, primary:"Panzerfaust 60 Custom", secondary:"Walther P38" };          // panzerfaust

// Swiss army.
SOLDIERS.SOLOTHURN  = { name:"Julian Solothurn", soldierClass:"Anti-tank rifleman", apDam:5, atDam:3, acc:3, rof:3, m:1, hp:3, primary:"Solothurn S-18/1000", secondary:"Sauer 38H" };              // AT rifle