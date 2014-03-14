"use strict";

var Soldier = function( weapon )
{
  	this.name 		= name;
  	this.weapon 	= weapon;
  	this.basicSpeed = Math.floor( ( Math.random() * 56 ) + 1 );
  	this.hp 		= 56;
  	this.team 		= "";
  	
  	// default is random personality.
	this.personality = function( statistics, targets )
    {
      	return Math.floor( ( Math.random() * targets.length ) ); 
    };
  
  	// returns the index of the target chosen by the personality.
  	this.selectTarget = function( statistics, targets )
    {
    	return this.personality( statistics, targets );
    };
  
  	// returns true if the character has more than 0 HP.
  	this.isAlive = function()
    {
    	return this.hp > 0;
    };
  
  
  	// getter and setter for team attribute.
  	this.getTeam = function()
    {
    	return this.team;
    };
  
  	this.setTeam = function( team )
    {
    	this.team = team;
    };

};