"use strict";

/*
stuff that is relevant for theaters...

Encounter rate: determines the number of encounters
small, medium, large

xxx: determines the range of the number of enemies in an encounter
squad, platoon, company

Difficulty: determines the quality of the enemies
militia, recruits, 
*/

// manages basically all aspects of a battle, which is basically anything that is done between Escaves.
var Theater = function( mission, origin, destination )
{
    this.currentBattle      = 0;
    this.playIntroduction   = null;
    this.playEnding         = null;  
    this.battles            = [];
  
    this.initializeBattles = function( mission, origin, destination )
    {
        // a function of mission, origin and destination...
        // cinematics for theaters should be assigned on a per mission basis...
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
      
        var attackers = [];
        var defenders = [];
      
        var n = Math.floor( ( Math.random() * 3 ) ) + 1;
        var m = Math.floor( ( Math.random() * 3 ) ) + 1;
      
        for( var i = 0; i < n; i++ )
        {
            var s = new Soldier( SOLDIERS[ "SOLDIER_01" ] );
            var tc = new TeamContainer( s, "ATTACKER" );
            attackers.push( tc );
        }
        
        
		for( var j = 0; j < m; j++ )
        {
            var s = new Soldier( SOLDIERS[ "SOLDIER_02" ] );
            var tc = new TeamContainer( s, "DEFENDER" );
            defenders.push( tc );
        }
        
        var belligerents = 	{
                                "ATTACKER":attackers, 
								"DEFENDER":defenders
							};
      
        // prototype battle.
        return [ new Battle( belligerents, bIntroduction, bEnding ) ];
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