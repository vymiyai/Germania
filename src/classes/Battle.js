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


        // calculos aqui...


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