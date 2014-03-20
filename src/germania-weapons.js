"use strict";

var WEAPONS = {};

WEAPONS.RIFLE = new Weapon( "Rifle", 5, 10, function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; } );