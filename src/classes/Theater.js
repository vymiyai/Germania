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
var Theater = function( event, origin, destination )
{
    this.currentBattle      = 0;
    this.playIntroduction   = null;
    this.playEnding         = null;  
    this.battles            = [];
    
    // "constants".
    this.DEFEAT             = false;
    this.VICTORY            = true;
  
    this.getTheaterBattlefields = function( origin, destination )
    {
        alert( origin + " -> " + destination );
        
        return $.extend( {}, THEATERS[ origin ][ destination ] );
        
    };
    
    this.initializeBattles = function( event, origin, destination )
    {
        // a function of mission, origin and destination...
        var battlefields = this.getTheaterBattlefields( origin, destination );
        
        alert( JSON.stringify( battlefields ) );
        
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
        
        
        // create the battles according to the mission, battlefields, origin and destination.
        var belligerents =  { "ATTACKER":[], "DEFENDER":[] };
        
        var numberOfEnemies = 8;
        var numberOfSMGunners = Math.floor( Math.random() * 8 );
        var numberOfRifleman = numberOfEnemies - numberOfSMGunners;
        
        
        // populate the enemy's team.
        var i = 0;
        if( event.playerTeam == "ATTACKER" )
        {
            for( i = 0; i < numberOfRifleman; i++ )
                belligerents.DEFENDER.push( new TeamContainer( new Soldier( SOLDIERS[ "SOLDIER_01" ], "DEFENDER" ) ) );
            
            for( i = 0; i < numberOfSMGunners; i++ )
                belligerents.DEFENDER.push( new TeamContainer( new Soldier( SOLDIERS[ "SOLDIER_02" ], "DEFENDER" ) ) );
        }
        else
        {
            for( i = 0; i < numberOfRifleman; i++ )
                belligerents.ATTACKER.push( new TeamContainer( new Soldier( SOLDIERS[ "SOLDIER_01" ], "ATTACKER" ) ) );
            
            for( i = 0; i < numberOfSMGunners; i++ )
                belligerents.ATTACKER.push( new TeamContainer( new Soldier( SOLDIERS[ "SOLDIER_02" ], "ATTACKER" ) ) );
        }
        
        
        
        // add Aurinko to the player's team.
        var aurinko = new Soldier( SOLDIERS[ "AURINKO" ] );
        var atc = new TeamContainer( aurinko, event.playerTeam );
        belligerents[ event.playerTeam ].push( atc );
        
        // add Valtion to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "VALTION" ], event.playerTeam ) ) );
        
        // add Steyr to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "STEYR" ], event.playerTeam ) ) );
        
        // add Mannlicher to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "MANNLICHER" ], event.playerTeam ) ) );
        
        // add Grossfuss to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "GROSSFUSS" ], event.playerTeam ) ) );
        
        // add Mauser to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "MAUSER" ], event.playerTeam ) ) );
        
        // add Schneider to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "SCHNEIDER" ], event.playerTeam ) ) );
        
        // add Solothurn to the player's team.
        belligerents[ event.playerTeam ].push( new TeamContainer( new Soldier( SOLDIERS[ "SOLOTHURN" ], event.playerTeam ) ) );
        
        
        
        
        
        // prototype battle.
        return [ new Battle( belligerents, bIntroduction, bEnding, event.playerTeam ) ];
    };
  
  	// initialize battles.
  	this.battles = this.initializeBattles( event, origin, destination );



  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
    this.run = function()
    {
        this.playIntroduction();
      
        // iterate through each battle.
        for( var index = 0; index < this.battles.length; index++ )
        {
            var result = this.executeBattle( index );
          
            // if at least one of the battles resulted in defeat, return false;
            if( result == this.DEFEAT )
                // play theater defeat ending...?
                return this.DEFEAT;
        }
      
        this.playEnding();
      
        // all battles were finished successfully.
        return this.VICTORY;
    };
    
  
    this.executeBattle = function( index )
    {
        var battle = this.battles[ index ];
      
        battle.playIntroduction();
      
        var battleStatistics = battle.start();
      
        this.callMenu( battleStatistics );
      
        if( battleStatistics[ "result" ] == true )
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
        return battleStatistics[ "result" ];
    };


    this.callMenu = function( result )
    {
        // a menu that may be spawned after a battle, such as match statistics...
        alert( "SHOWING MATCH STATISTICS..." );
    };

};