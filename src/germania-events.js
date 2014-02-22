"use strict";

var EVENTS = {};

// EVENT 01 - KILL 10 ENEMY SOLDIERS
var EVENT01 = new Event( [ function(){ return VARIABLES[ "SOLDIERS KILLED" ] >= 10; } ] );
EVENTS[ "EVENT 01" ] = EVENT01;

// EVENT 02 - TALK TO LOTTA
var EVENT02 = new Event( [ function(){ return VARIABLES[ "TALKED TO LOTTA" ] >= 1; } ] );
EVENTS[ "EVENT 02" ] = EVENT02;

// EVENT 03 - REACH THE BUNKER
var EVENT03 = new Event( [ EVENT01, EVENT02 ] );
EVENTS[ "EVENT 03" ] = EVENT03;