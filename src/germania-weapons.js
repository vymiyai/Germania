"use strict";

// Luger P08 mais precisa que a P38, mas mais rara.

var WEAPONS = {};

// usando as medidas no extremo das tabelas no Wikipedia bullet weight x bullet diameter, o dano seria..
// Mauser 7.92x57mm 12,8 * 8,08 = 103,424 +/- 20%
// Parabellum 9x19mm 7,45 * 9,01 = 67,1245 +/- 20%

// Sniper sovietico pra fins de estatistica: 50% 800m, 80% 500m

WEAPONS.KARABINER_98K           = { name:"Karabiner 98k", 
                                    category: "PRIMARY", 
                                    type:"RIFLE",
                                    minimumDamage:5, 
                                    maximumDamage:10, 
                                    distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, 
                                    distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, 
                                    bonuses:{} };
                                    
WEAPONS.SCOPED_KARABINER_98K    = { name:"Scoped Karabiner 98k", 
                                    category: "PRIMARY", 
                                    type:"RIFLE",
                                    minimumDamage:5, 
                                    maximumDamage:10, 
                                    distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, 
                                    distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, 
                                    bonuses:{} };
                                    
WEAPONS.LUGER_P08               = { name:"Luger P08", 
                                    category: "SECONDARY", 
                                    type:"PISTOL",
                                    minimumDamage:5, 
                                    maximumDamage:10, 
                                    distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, 
                                    distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, 
                                    bonuses:{} };
                                    
WEAPONS.WALTHER_P38             = { name:"Walther P38", 
                                    category: "SECONDARY", 
                                    type:"PISTOL",
                                    minimumDamage:5, 
                                    maximumDamage:10, 
                                    distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, 
                                    distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, 
                                    bonuses:{} };

WEAPONS.MG_34                   = { name:"Maschinengewehr 34", 
                                    category: "PRIMARY", 
                                    type:"MACHINE_GUN",
                                    minimumDamage:5, 
                                    maximumDamage:10, 
                                    distanceDamageModifier:function( distance ){ var distanceMap = [ 1.0, 1.0, 0.9, 0.8, 0.7 ]; return distanceMap[ distance ]; }, 
                                    distanceAccuracyModifier:function( distance ){ var distanceMap = [ 0.5, 0.9, 0.8, 0.7, 0.6 ]; return distanceMap[ distance ]; }, 
                                    bonuses:{ BASIC_SPEED: -2 } };