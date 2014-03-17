"use strict";

var WEAPONS = {};

WEAPONS[ "RIFLE" ] = new Weapon( "Rifle", 5, 10, function( distance ){ return 1; }, function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; } );