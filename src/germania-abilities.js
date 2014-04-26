"use strict";

var ABILITIES = {};

ABILITIES.WEAPON_ABILITIES = {};
ABILITIES.WEAPON_ABILITIES.SURE_SHOT = function( distance ){ return 1; };
ABILITIES.WEAPON_ABILITIES.MIGHTY_SHOT = function( target ){ var weaponClone = $.extend( {}, target.primary ); return function( distance ){ return 10 * weaponClone.getBaseDamage( distance ); }; };
ABILITIES.WEAPON_ABILITIES.MIGHTIER_SHOT = function( target ){ var weaponClone = $.extend( {}, target.primary ); return function( distance ){ return 11 * weaponClone.getBaseDamage( distance ); }; };