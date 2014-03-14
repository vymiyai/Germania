"use strict";

var WEAPONS = {};

WEAPONS[ "RIFLE" ] = new Weapon( "Rifle", 5, 10, function( distance ){ return 1; }, function( distance ){ return 1; } );