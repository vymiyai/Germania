"use strict";

var SOLDIERS = {};

// name
// weapon
// basic speed
// hp
// max hp

// Debug soldiers...
SOLDIERS.SOLDIER_01 = { name:"GENERIC SOLDIER 01", primary:WEAPONS[ "KARABINER_98K" ], secondary:WEAPONS[ "WALTHER_P38" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return Math.floor( ( Math.random() * 15 ) + 5 ) }, getHp:function(){ return 100; }, getMaxHp:function(){ return 100; }, getTurnBasedAbilities:function(){ return []; } };
SOLDIERS.SOLDIER_02 = { name:"GENERIC SOLDIER 02", primary:WEAPONS[ "MG_34" ], secondary:WEAPONS[ "LUGER_P08" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return 10; }, getHp:function(){ return 100; }, getMaxHp:function(){ return 100; }, getTurnBasedAbilities:function(){ return []; } };

// Aurinko (temp).
SOLDIERS.AURINKO = { name:"AURINKO", primary:WEAPONS[ "SCOPED_KARABINER_98K" ], secondary:WEAPONS[ "LUGER_P08" ], equipment1:null, equipment2:null, getBasicSpeed:function(){ return Math.floor( ( Math.random() * 15 ) + 5 ) }, getHp:function(){ return 200; }, getMaxHp:function(){ return 200; }, getTurnBasedAbilities:function(){ return []; } };


// Finnish army.
SOLDIERS.VALTION    = {};   // pistol/rifle?

// Austrian army.
SOLDIERS.STEYR      = {};   // submachine gun
SOLDIERS.LUGER      = {};   // pistol
SOLDIERS.MANNLICHER = {};   // rifle

// German army.
SOLDIERS.WALTHER    = {};   // pistol
SOLDIERS.SOLOTHURN  = {};   // AT rifle
SOLDIERS.MAUSER     = {};   // rifle/machine gun

// Italian army.
SOLDIERS.BERETTA    = {};   // submachine gun
SOLDIERS.BREDA      = {};   // machine gun