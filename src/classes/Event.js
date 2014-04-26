"use strict";

// uses global variables in the preconditions variable...

// defines a game event object with preconditions.
var Event = function( name, destination, playerTeam, completionCondition, callback )
{
  	this.name 					= name;
  	this.destination			= destination;
  	this.playerTeam             = playerTeam;
    this.completionCondition 	= completionCondition;
  	this.callback				= callback;
  
    // checks if a condition has been resolved.
    this.resolve = function( parentEscave )
    {
		if( completionCondition( parentEscave, this ) )
		{
			this.callback( parentEscave, this );
			return true;
		}
		else
		{
			return false;            	
		}
    }
    
};