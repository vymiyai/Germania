"use strict";


var TeamContainer = function( soldier, team )
{
    this.soldier    = soldier;
    this.team       = team;

    // getter and setter for soldier attribute.
	this.getSoldier = function()
    {
        return this.soldier;
    };
  
    this.setSoldier = function( soldier )
    {
        this.soldier = soldier;
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