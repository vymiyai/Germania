"use strict";
        
var ProfilerHelper = function()
{
  	this.profiler = new Profiler();
  
	this.createDefaultProfile = function()
    {
    	VARIABLES[ "SOLDIERS KILLED" ] = 0;
      	VARIABLES[ "TALKED TO LOTTA" ] = 0;
      
      	this.profiler.saveProfile( "defaultProfile" );
    };
  
	this.createProfile01 = function()
    {
    	VARIABLES[ "SOLDIERS KILLED" ] = 10;
      	VARIABLES[ "TALKED TO LOTTA" ] = 1;
      
      	this.profiler.saveProfile( "profile01" );
    };
  
	this.createProfile02 = function()
    {
    	VARIABLES[ "SOLDIERS KILLED" ] = 10;
      	VARIABLES[ "TALKED TO LOTTA" ] = 0;
      
      	this.profiler.saveProfile( "profile02" );
    };
  
	this.createProfile03 = function()
    {
    	VARIABLES[ "SOLDIERS KILLED" ] = 5;
      	VARIABLES[ "TALKED TO LOTTA" ] = 1;
      
      	this.profiler.saveProfile( "profile03" );
    };
  
  	this.createAllProfiles = function()
    {
    	this.createDefaultProfile();
      	this.createProfile01();
        this.createProfile02();
        this.createProfile03();
    };
  
  	this.eraseAllProfiles = function()
    {
    	this.profiler.deleteProfile( "defaultProfile" );
      	this.profiler.deleteProfile( "profile01" );
		this.profiler.deleteProfile( "profile02" );
      	this.profiler.deleteProfile( "profile03" );
    };
  
  	this.showProfile = function( profileName )
    {
      	var variables = JSON.parse( window.localStorage.getItem( profileName ) );
		alert( JSON.stringify( variables ) );
    };
  
  	this.showCurrentProfile = function()
    {
    	alert( JSON.stringify( VARIABLES ) );
    };
  
  	this.showAllProfiles = function()
    {
      	this.showProfile( "defaultProfile" );
        this.showProfile( "profile01" );
        this.showProfile( "profile02" );
        this.showProfile( "profile03" );
    };
  
  	this.debugProfiles = function()
    {
    	this.createAllProfiles();
      	this.showAllProfiles();
      	this.eraseAllProfiles();
    };
};