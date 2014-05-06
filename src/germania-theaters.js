"use strict";

var THEATERS = {};

// a theater definition should contain...
// the opening and ending cinemmatics of the theater
// the attributes and cinematics of a battle.
// the range of attributes in case of random battle...
// the definitions of random event encounters that will be rolled at the theater instantiation.

// this global variable must not store full instances of battles...

THEATERS[ "STADTMITTE" ] = {};
THEATERS[ "STADTMITTE" ][ "STADTMITTE" ] = [
    [ "AVENUE", "STREETS", "AVENUE" ] ];
    
THEATERS[ "STADTMITTE" ][ "HAUPTBAHNHOF" ] = [
    [ "AVENUE", "STREETS", "AVENUE" ],
    [ "AVENUE", "STREETS", "LARGE_BUILDING" ],
    [ "AVENUE", "LARGE_BUILDING", "PARK" ],
    [ "AVENUE", "STREETS", "STREETS" ],
    [ "AVENUE", "STREETS", "PARK" ] ];

THEATERS[ "HAUPTBAHNHOF" ] = {};    
THEATERS[ "HAUPTBAHNHOF" ][ "HAUPTBAHNHOF" ] = [
    [ "AVENUE", "STREETS", "PARK" ] ];

THEATERS[ "HAUPTBAHNHOF" ][ "STADTMITTE" ] = $.extend( {}, THEATERS[ "STADTMITTE" ][ "HAUPTBAHNHOF" ] ).reverse();

// Stadtmitte - Hauptbahnhof.
/*

[   MAIN-AVENUE ][  STREETS         ][  MAIN-AVENUE     ]
[   MAIN-AVENUE ][  STREETS         ][  LARGE_BUILDING  ]
[   MAIN-AVENUE ][  LARGE_BUILDING  ][  PARK            ]
[   MAIN-AVENUE ][  STREETS         ][  STREETS         ]
[   MAIN-AVENUE ][  STREETS         ][  PARK            ]

*/