"use strict";

var Battle = function( belligerents, introduction, ending, playerTeam )
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
  
    // initialize with clones of the attacker and defender arrays...
    this.attacker   = belligerents[ "ATTACKER" ].slice(0);
    this.defender   = belligerents[ "DEFENDER" ].slice(0);
    
    // the name of the player's team.
    this.playerTeam = playerTeam;
    
    // turn order is defined by basic speed.
    this.turns      = this.attacker.concat( this.defender ).sort( function( s1, s2 ){ return s2.getSoldier().basicSpeed - s1.getSoldier().basicSpeed; } );
    
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

	// executes the battle.
    this.start = function()
    {
        // the counter that accumulates the number of turns that have passed.
        var turnCount = 0;

        // announce the battle initial status.
        this.battleStatus();

        // interate through the characters until one of the teams dies.
        while( ! this.isBattleFinished() )
        {
            // calculates the relative turn count based on the absolute turn count.
            this.turn = turnCount % this.turns.length;

            var teamContainer   = this.turns[ this.turn ];
            var soldier         = teamContainer.getSoldier();            
            var soldierTeam     = teamContainer.getTeam();

            if( soldier.isAlive() )
            {
                // activate turn-based ability.
                soldier.activateTurnBasedAbility();
                
                // choose targets based on the soldier's team.
                var targets;
                var allies;
                if( soldierTeam == "ATTACKER" )
                {
                    allies  = this.attacker;
                    targets = this.defender;
                }
                else
                {
                    // soldier's team is "DEFENDER".
                    allies  = this.defender;
                    targets = this.attacker;
                }
              
                var someDistance = 1;

				var targetIndex = soldier.selectTarget( null, targets );
				var damage      = soldier.selectWeapon( someDistance ).getBaseDamage( someDistance );

                var targetedEnemy = targets[ targetIndex ].getSoldier();

                // check if soldier scored the shot.
                if( Math.random() <= soldier.selectWeapon( someDistance ).getBaseAccuracy( someDistance ) )
                {
                    // attack animation should go here?
                    alert( soldierTeam + "'S #" + allies.indexOf( teamContainer ) + " shoots " + "ENEMY'S #" + targetIndex + " - DAMAGE: " + damage +"..."  );

                    // calculate and apply damage.
                    targetedEnemy.hp -= damage;                    
                }
                else
                {
                    // soldier missed the shot.
                    alert( soldierTeam + "'S #" + allies.indexOf( teamContainer ) + " missed." );
                }
                
                // remove the enemy from the targets if they are dead.
                if( ! targetedEnemy.isAlive() )
                {
                    alert( "#" + targetIndex + " down..." );
                    targets.splice( targetIndex, 1 );
                }

				// debug info.
                this.battleStatus();
            
            }
            else
            {
                // soldier selection animation?
                alert( "Soldier dead, skipping..." );
            }

            // increment turn count.
            turnCount++;
            
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
      	var turnOrder = "[";
      	for( var turn in this.turns )
          	if( turn == this.turn )
              	turnOrder += "O";
          	else
              	turnOrder += "=";
      	turnOrder += "]";
      
		var attackerStatus = "[";
		for( var i in this.attacker )
			attackerStatus += " HP:" + this.attacker[ i ].getSoldier().hp;
		attackerStatus += "]";
          
		var defenderStatus = "[";
		for( var i in this.defender )
			defenderStatus += " HP:" + this.defender[ i ].getSoldier().hp;
		defenderStatus += "]";
                
		alert( "PLAYER'S TEAM: " + this.playerTeam + "\nTURN: " + turnOrder + "\nATTACKER: " + attackerStatus + "\nDEFENDER: " + defenderStatus );
    };
  
};