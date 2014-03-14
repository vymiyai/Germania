"use strict";

var Battle = function( belligerents, introduction, ending )
{
  	// belligerents: { attacker:[], defender:[] }
  
  	// the difficulty of a mission will influence how many enemies will be faced in each encounter
  	// the probability will determine how frequent an encounter is, rolling a probability for each battle in a theater.
  
  	// the callbacks that will be called when a battle starts or ends.
  	// an example of ending is the increment of the number of a specific mission completed...
  	// standard repeatable missions will most likely not have neither intro, nor ending. 
  	// campaign missions will most likely have all battles with an ending or intro.
	this.playIntroduction 	= introduction;
  	this.playEnding 		= ending;
  
  	// initialize with clones of the attacker and defender arrays...
  	this.attacker = belligerents[ "ATTACKER" ].slice(0);
  	this.defender = belligerents[ "DEFENDER" ].slice(0);
	this.turns = this.attacker.concat( this.defender ).sort( function( s1, s2 ){ return s2.basicSpeed - s1.basicSpeed; } );
  	this.turn = 0;
  
  	// returns true if one of the teams has been defeated.
  	this.isBattleFinished = function()
    {
    	if( this.attacker.length == 0 || this.defender.length == 0 )
        	return true;
      	else
          	return false;
    };
  
  	
	// executes the battle.
  	this.start = function()
    {
      	var turnCount = 0;
      	
      	// interate through the characters until one of the teams dies.
      	while( ! this.isBattleFinished() )
        {
          	// calculates the relative turn count based on the absolute turn count.
          	this.turn = turnCount % this.turns.length;
          
          
          	var soldier = this.turns[ this.turn ];
      		if( soldier.isAlive() )
            {
              	// choose targets based on the soldier's team.
              	var targets;
              	var allies;
              	if( soldier.getTeam() == "ATTACKER" )
                {
                  	allies = this.attacker;
                  	targets = this.defender;
                }
              	else
                {
                  	// soldier's team is "DEFENDER".
                  	allies = this.defender;
                  	targets = this.attacker;
                }
              
              	
				var targetIndex = soldier.selectTarget( null, targets );
				var damage = soldier.weapon.getBaseDamage();

              	var targetedEnemy = targets[ targetIndex ];
              	
              	// attack animation should go here?
              	alert( soldier.getTeam() + "'S #" + allies.indexOf( soldier ) + " shoots " + "ENEMY'S #" + targetIndex + " - DAMAGE: " + damage +"..."  );
      		
              	// calculate and apply damage.
				targetedEnemy.hp -= damage;

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
      	var result = true;
      
      	// return the result of the battle.
      	// should build statistcs here...
      	return { "result": result };
    };

  
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
			attackerStatus += " HP:" + this.attacker[ i ].hp;
		attackerStatus += "]";
          
		var defenderStatus = "[";
		for( var i in this.defender )
			defenderStatus += " HP:" + this.defender[ i ].hp;
		defenderStatus += "]";
                
		alert( "TURN: " + turnOrder + "\nATTACKER: " + attackerStatus + "\nDEFENDER: " + defenderStatus );
    };
  
};