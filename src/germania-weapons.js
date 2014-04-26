"use strict";

var WEAPONS = {};

WEAPONS.RIFLE = { name:"Rifle", minimumDamage:5, maximumDamage:10, distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, ability:function( target ){ target.primary.getBaseDamage = ABILITIES.WEAPON_ABILITIES.MIGHTY_SHOT( target ); } };
WEAPONS.SCOPED_RIFLE = { name:"Scoped rifle", minimumDamage:5, maximumDamage:10, distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, ability:function( target ){ target.primary.getBaseDamage = ABILITIES.WEAPON_ABILITIES.MIGHTIER_SHOT( target ); target.primary.getBaseAccuracy = ABILITIES.WEAPON_ABILITIES.SURE_SHOT; /*target.addAbility( function(){ alert( "ABILITY ACTIVATED - NO MISS!" ); } );*/ } };