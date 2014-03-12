"use strict";

var Soldier = function( weapon, team )
{
  	this.weapon = weapon;
  	this.basicSpeed = Math.floor( ( Math.random() * 56 ) + 1 );
  	this.hp = 56;
  	this.team = team;
  	
  	// default is random personality.
	this.personality = function( statistics, targets )
    {
      	return Math.floor( ( Math.random() * targets.length ) ); 
    };
  
  	this.selectTarget = function( statistics, targets )
    {
    	return this.personality( statistics, targets );
    };
  
  	this.isAlive = function()
    {
    	return this.hp > 0;
    };

};