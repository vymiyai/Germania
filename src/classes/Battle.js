"use strict";

var Battle = function( battlefield, belligerents, introduction, ending, playerTeam )
{
  	// belligerents: { attacker:[], defender:[] }
  
  	// the difficulty of a mission will influence how many enemies will be faced in each encounter
  	// the probability will determine how frequent an encounter is, rolling a probability for each battle in a theater.
  
  	// the callbacks that will be called when a battle starts or ends.
  	// an example of ending is the increment of the number of a specific mission completed...
  	// standard repeatable missions will most likely not have neither intro, nor ending. 
  	// campaign missions will most likely have all battles with an ending or intro.
    this.playIntroduction   = introduction;
    this.playEnding         = ending;
  
    this.battlefield = battlefield;
    // initialize with clones of the attacker and defender arrays...
    this.attacker   = belligerents[ "ATTACKER" ].slice(0);
    this.defender   = belligerents[ "DEFENDER" ].slice(0);
    
    // the name of the player's team.
    this.playerTeam = playerTeam;

    // the current soldier's index in this.turns.
    this.turn       = 0;
  
    // returns true if one of the teams has been defeated.
    this.isBattleFinished = function()
    {
        if( this.attacker.length === 0 || this.defender.length === 0 )
            return true;
        else
            return false;
    };
    
    // returns the name of the winner team.
    this.getWinnerTeam = function()
    {
        if( this.attacker.length === 0 )
            return "DEFENDER";
        else
            return "ATTACKER";
    };
    
    // calculates the "influence" force of the team.
    this.calculateTeamInfluence = function( team )
    {
        var pad = function( value )
        {
            if( typeof value === "undefined" )
                return 1;
            else
                return value;
        };
        
		var teamInfluence = { influence:0, soldier:null, damageLists:[] };
		var highestInfluence = 0;
		
		for( var tcIndex in team )
		{
            var teamContainer = team[ tcIndex ];
            var soldier = teamContainer.getSoldier();
            var attributes = this.battlefield[ teamContainer.getTeam() ][ soldier.getSoldierClass() ];
            
            // consider for calculation purposes only soldier that are alive!
            if( soldier.isAlive() )
            {
                for( var attribute in attributes )
                {
                    var weight = attributes[ attribute ];
                    var influence = weight * soldier.getAttribute( attribute );
                    teamInfluence.influence += influence;
                    
                    if( influence > highestInfluence )
                    {
                        highestInfluence = influence;
                        teamInfluence.soldier = soldier;
                    }
                }
                
                
                // compute the soldier's damage.
                /*
                var apDam = pad( attributes.apDam ) * soldier.getAntiPersonnelDamage();
                var acc = pad( attributes.acc ) * soldier.getAccuracy();
                
                var rof = pad( attributes.rof ) * soldier.getRateOfFire();
                
                teamInfluence.damageLists.push( { attacks: Math.ceil( rof ), damage: Math.ceil( apDam * acc )  } );
                */
                var apDam   = soldier.getAntiPersonnelDamage();
                var acc     = soldier.getAccuracy();
                
                var rof     = soldier.getRateOfFire();
                
                teamInfluence.damageLists.push( { rof: rof, acc: acc, apDam: apDam  } );
            }
		}
		
		return teamInfluence;
    };

	// executes the battle.
    this.start = function()
    {
        // the counter that accumulates the number of turns that have passed.
        var turnCount = 0;
        
        // announce the battle initial status.
        this.battleStatus();
        
        // conditions for a battle to finish:
        // condition 1: Death battle - all members of a team must die. 
        // condition 2: Influence battle - influence points pushes the influence border to a certain threshold, survivors are propagated?
        // condition 3: One turn battle 
        //  only in condition 3: if influence of one side is 100% higher than the other, repeat the battle once.
        
        // survivors of a battle will be propagated to the next battle?
        
		// the missiom details should be stated in approximate number in the mission description and then distributed across all battlefields... Still need to decide if previous battlefield enemies will be propagated to later battlefields. Allocation should be done randomly until all enemies have been alllocated. Propagate only soldier that have little damage?


        
		// the trivial case, one of the teams is empty, will skip this.
		while( ! this.isBattleFinished() )
		{
            var attackerInfluence = this.calculateTeamInfluence( this.attacker );
            var defenderInfluence = this.calculateTeamInfluence( this.defender );
            
            // implement first the death battle. conditional will depend of the battle type, assigned in the theater, probably.
            if( true )
            {
                // damage applied will depend on each soldier status
                
                // the higher the rate of fire, the lower will be the accuracy effect...
                // RoF times -> apDam * ACC
            }
            
            alert( JSON.stringify( attackerInfluence ) );
            alert( JSON.stringify( defenderInfluence ) );
            
            
            break;
		}

        // check if the side that won was the player's.
        var result = this.playerTeam == this.getWinnerTeam();
      
        // return the result of the battle.
        // should build statistcs here...
        return { "result": result };
    };

    // temporary battle status.
    this.battleStatus = function()
    {
		var attackerStatus = "";
		for( var i in this.attacker )
		{
            var soldier = this.attacker[ i ].getSoldier();
			attackerStatus +=   "Name: " + soldier.getName() + 
                                "\nAP-DAM: " + soldier.getAntiPersonnelDamage() + 
                                "\nAT-DAM: " + soldier.getAntiTankDamage() + 
                                "\nACC: " + soldier.getAccuracy() + 
                                "\nRoF: " + soldier.getRateOfFire() + 
                                "\nM: " + soldier.getMovement() + 
                                "\nHP:" + soldier.getHitPoints() +
                                "\nPrimary:" + soldier.getPrimary() +
                                "\nSecondary:" + soldier.getSecondary() +
                                "\nMaximum HP:" + soldier.getMaxHp() +
                                "\nCurrent HP:" + soldier.getCurrentHp() +
                                "\n\n";
		}
          
		var defenderStatus = "";
		for( var i in this.defender )
		{
            var soldier = this.defender[ i ].getSoldier();
			defenderStatus +=   "Name: " + soldier.getName() + 
                                "\nAP-DAM: " + soldier.getAntiPersonnelDamage() + 
                                "\nAT-DAM: " + soldier.getAntiTankDamage() + 
                                "\nACC: " + soldier.getAccuracy() + 
                                "\nRoF: " + soldier.getRateOfFire() + 
                                "\nM: " + soldier.getMovement() + 
                                "\nHP:" + soldier.getHitPoints() +
                                "\nPrimary:" + soldier.getPrimary() +
                                "\nSecondary:" + soldier.getSecondary() +
                                "\nMaximum HP:" + soldier.getMaxHp() +
                                "\nCurrent HP:" + soldier.getCurrentHp() +
                                "\n\n";
		}
                
		alert( "PLAYER'S TEAM: " + this.playerTeam + "\nATTACKER:\n" + attackerStatus + "\n\nDEFENDER:\n" + defenderStatus );
    };
    
};