"use strict";

// define basic save/load capabilities through local storage.
// uses global variable VARIABLES for simplicity's sake.
var Profiler = function()
{
  	// save global variables in a stringified JSON object.
  	this.saveProfile = function( profileName )
    {
    	window.localStorage.setItem( profileName, JSON.stringify( VARIABLES ) );
    };
  
  	// load global variables from a stringified JSON object.
  	this.loadProfile = function( profileName )
    {
    	VARIABLES = JSON.parse( window.localStorage.getItem( profileName ) );
    };
  
  	// deletes a profile.
  	this.deleteProfile = function( profileName )
    {
    	window.localStorage.removeItem( profileName );
    };
};