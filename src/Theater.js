"use strict";

// manages all aspects of a battle, which is basically anything that is done between Escaves.
var Theater = function( mission, origin, destination )
{
  	this.currentBattle 		= 0;
  	this.playIntroduction 	= null;
	this.playEnding 		= null;  
  	this.battles 			= [];
  
  	this.initializeBattles = function( mission, origin, destination )
    {
    	// a function of mission, origin and destination...
      
      	var tIntroduction = function()
        {
        	alert( "Theater Introduction" );
        };
      
      	this.playIntroduction = tIntroduction;
      
      	var tEnding = function()
        {
        	alert( "Theater Ending" );
        };
      
      	this.playEnding = tEnding;
      
      
      
      
      
		// theater should take responsiblitiy of retrieving the correct battle cinematics.      
      	var bIntroduction = function()
        {
        	alert( "Battle Introduction" );
        };
      
      	var bEnding = function()
        {
        	alert( "Battle Ending" );
        };
      
      	return [ new Battle( {}, bIntroduction, bEnding ) ];
    };
  
  	// initialize battles.
  	this.battles = this.initializeBattles( mission, origin, destination );



  
  	this.callMenu = function( result )
    {
    	// a menu that may be spawned after a battle, such as match statistics...
      	alert( "SHOWING MATCH STATISTICS..." );
    };
  
  	this.executeBattle = function( index )
    {
      	var battle = this.battles[ index ];
      
      	battle.playIntroduction();
      
    	var results = this.battles[ index ].start();
      
      	this.callMenu( results );
      
      	if( results[ "result" ] == true )
        {
          	// enable next battle.
        	this.currentBattle++;
          	battle.playEnding();
        }
      	else
        {
        	// play defeat battle ending?
        }
      
      	// return the final result to the battle engine.
      	return results[ "result" ];
    };

};