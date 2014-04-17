"use strict";

var WEAPONS = {};

//function( target ){ var weaponClone = $.extend( {}, target.primary ); target.primary.getBaseDamage = function( distance ){ return 100 * weaponClone.getBaseDamage( distance ); }; }

WEAPONS.RIFLE = { name:"Rifle", minimumDamage:5, maximumDamage:10, distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, ability:function( target ){ var weaponClone = $.extend( {}, target.primary ); target.primary.getBaseDamage = function( distance ){ return 10 * weaponClone.getBaseDamage( distance ); }; } };
WEAPONS.SCOPED_RIFLE = { name:"Scoped rifle", minimumDamage:5, maximumDamage:10, distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, ability:function( target ){ /*target.addAbility( function(){ alert( "ABILITY ACTIVATED - NO MISS!" ); } );*/ target.primary.getBaseAccuracy = function( distance ){ return 1; }; } };