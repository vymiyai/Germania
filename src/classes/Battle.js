"use strict";

var Battle = function( battlefield, belligerents, initialInfluence, playerTeam, introduction, ending )
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
  
    this.battlefield        = battlefield;
    //this.battleType = battleType;
    
    // the name of the player's team.
    this.playerTeam         = playerTeam;

    // the duration of the battle in turns, used in fixed turn battles.
    this.turnCount          = 0;
    
    // individual influences of each team as a function of the initial influences.
    this.attackersInfluence = null;
    this.defendersInfluence = null;
    
    // initialize with clones of the attacker and defender arrays...
    this.attackers          = belligerents.ATTACKERS.slice(0);
    this.defenders          = belligerents.DEFENDERS.slice(0);
    
    // set arrays that will keep the this.attackers or this.defenders indexes of the soldiers that are alive.
    this.attackersAlive = function( team ){ var result = []; for( var index in team ){ result.push( index ); } return result; }( this.attackers );
    this.defendersAlive = function( team ){ var result = []; for( var index in team ){ result.push( index ); } return result; }( this.defenders );
  

    
    
    
    
    
    // returns the name of the winner team. In case of draw, the defender wins.
    this.getWinnerTeam = function()
    {
        if( this.attackersAlive.length === 0 )
            return "DEFENDERS";
        
        if( this.defendersAlive.length === 0 )
            return "ATTACKERS";
            
        if( true )
            return "DEFENDERS";
    };
    
    // returns true if:
    // one of the teams has been defeated.
    // the difference between battle duration and turn count is zero.
    // the influence has tilted to one of the extremes.
    this.isBattleFinished = function()
    {
        if( this.attackersAlive.length === 0 || this.defendersAlive.length === 0 || this.duration - this.turnCount === 0 )
            return true;
        else
            return false;
    };
    
    // calculates the battle data of the team.
    this.calculateTeamStatistics = function( team )
    {
		var teamStatistics = { influence:0, soldier:null, damageLists:[] };
		var highestInfluence = 0;
		
		// for each member of the team.
		for( var tcIndex in team )
		{
            // extract the soldier from its TeamContainer object.
            var teamContainer = team[ tcIndex ];
            var soldier = teamContainer.getSoldier();
            
            var attributes = this.battlefield[ teamContainer.getTeam() ][ soldier.getSoldierClass() ];
            
            // consider for calculation purposes only soldier that are alive!
            if( soldier.isAlive() )
            {
                // compute influence based on each weighted attribute specified in the battlefield.
                for( var attribute in attributes )
                {
                    var weight = attributes[ attribute ];
                    var influence = weight * soldier.getAttribute( attribute );
                    teamStatistics.influence += influence;
                    
                    // set the attack's leading soldier.
                    if( influence > highestInfluence )
                    {
                        highestInfluence = influence;
                        teamStatistics.soldier = soldier;
                    }
                }
                
                // compute the damage item's (the attack itself) damage.
                var apDam   = soldier.getAntiPersonnelDamage() * VARIABLES[ "BASE DAMAGE" ];
                var acc     = soldier.getAccuracy();
                var rof     = soldier.getRateOfFire();
                
                // push this damage item as an attack descriptor to be applied in the damage calculation step.
                teamStatistics.damageLists.push( { rof: rof, acc: acc, apDam: apDam } );
            }
		}
		
		return teamStatistics;
    };
    
    // private method that applies damage to a targeted team applying the appropriate modifiers.
    this.calculateDamage = function( attackingTeamStatistics, damageMultiplier, targetedTeam, aliveTargets  )
    {
        // for each damage item representing an attack, roll a hit test and damage.
        for( var damageItemIndex in attackingTeamStatistics.damageLists )
        {
            var damageItem = attackingTeamStatistics.damageLists[ damageItemIndex ];
                    
            // repeat damage calculation RoF times per soldier.
            for( var a = 0; a < damageItem.rof; a++ )
            {
                // check if the attack hit.
                var hitRoll = Math.random() * 5;
                if( hitRoll < damageItem.acc )
                {
                    // determine the attack target for this attack.
                    var targetIndex = Math.floor( Math.random() * aliveTargets.length );
                    var soldier = targetedTeam[ aliveTargets[ targetIndex ] ].getSoldier();
                    
                    // roll a damage check.
                    var damage = Math.floor( damageMultiplier * damageItem.apDam * Math.random() );
                    
                    // apply damage to the targeted soldier.
                    soldier.applyDamage( damageItem.apDam );
                    
                    // TODO some animation here?
                }
                else
                {
                    // the attack missed...
                    // TODO some animation here?
                }
            }
        }
    };
    
    // private method that removes the dead soldiers from the battle.
    this.removeDeadSoldiers = function()
    {
        var index, tcIndex;
        var attackersAlive = [];
        var defendersAlive = [];
        
        // remove attacker's dead soldiers.
        for( index in this.attackersAlive )
        {
            tcIndex = this.attackersAlive[ index ];
            if( this.attackers[ tcIndex ].getSoldier().isAlive() )
                attackersAlive.push( tcIndex );
        }
        this.attackersAlive = attackersAlive;
                
        // remove defender's dead soldiers.
        for( index in this.defendersAlive )
        {
            tcIndex = this.defendersAlive[ index ];
            if( this.defenders[ tcIndex ].getSoldier().isAlive() )
                defendersAlive.push( tcIndex );
        }
        this.defendersAlive = defendersAlive;
    };

	// executes the battle.
    this.start = function()
    {
        // announce the battle's initial status.
        this.battleStatus( "INITIAL SETTING:\n" );
        
        // conditions for a battle to finish:
        // condition 1: Death battle - all members of a team must die. 
        // condition 2: Influence battle - influence points pushes the influence border to a certain threshold, survivors are propagated?
        // condition 3: One turn battle 
        //  only in condition 3: if influence of one side is 100% higher than the other, repeat the battle once.
        
        // survivors of a battle will be propagated to the next battle as a probability roll based on their HP percentage.
        
		// the missiom details should be stated in approximate number in the mission description and then distributed across all battlefields... Still need to decide if previous battlefield enemies will be propagated to later battlefields. Allocation should be done randomly until all enemies have been alllocated. Propagate only soldier that have little damage?





		// iterate through battle rounds until a victory condition is raised.
		while( ! this.isBattleFinished() )
		{
            // LOGIC FOR DEATH BATTLES__________________________________________
            var attackerStatistics = this.calculateTeamStatistics( this.attackers );
            var defenderStatistics = this.calculateTeamStatistics( this.defenders );
            
            // calculate the damage multipliers applicable for this battlefield.
            var multipliers = this.battlefield.getDamageMultipliers( attackerStatistics.influence, defenderStatistics.influence );
            
            // calculate damages inflicted to the attackers by the defenders.
            this.calculateDamage( defenderStatistics, multipliers.DEFENDERS, this.attackers, this.attackersAlive );
            
            // calculate damages inflicted to the defenders by the attackers.
            this.calculateDamage( attackerStatistics, multipliers.ATTACKERS, this.defenders, this.defendersAlive );
            
            // LOGIC FOR INFLUENCE BATTLE_______________________________________
            var influenceDifference = attackerStatistics.influence - defenderStatistics.influence;
            
            // LOGIC FOR FIXED TIME BATTLE______________________________________
            this.turnCount++;
            
            // remove dead soldiers from the battle.
            this.removeDeadSoldiers();
            
            
            
            
            var extra;
            extra = "ATTACKERS: " + JSON.stringify( this.attackersAlive ) + "\nDEFENDERS: " + JSON.stringify( this.defendersAlive ) + "\n";
            extra += "MULTIPLIERS: " + JSON.stringify( multipliers ) + "\n";
            this.battleStatus( extra );
		}
		
        // check if the side that won was the player's.
        var result = this.playerTeam == this.getWinnerTeam();
      
        // return the result of the battle.
        // should build statistcs here...
        return { "result": result, "ATTACKERS":this.attackers, "DEFENDERS":this.defenders };
    };

    // temporary battle status.
    this.battleStatus = function( extra )
    {
        /*
		var attackerStatus = "";
		for( var i in this.attackers )
		{
            var soldier = this.attackers[ i ].getSoldier();
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
		for( var i in this.defenders )
		{
            var soldier = this.defenders[ i ].getSoldier();
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
		*/
		
		var attackerStatus = "";
		var i, j;
		var soldier;
		var currentHp;
		var maxHp;
		
		for( i in this.attackers )
		{
            soldier = this.attackers[ i ].getSoldier();
            
            currentHp = soldier.getCurrentHp();
            maxHp = soldier.getMaxHp();
            
			attackerStatus +=   "(" + currentHp + "/" + maxHp + ")" + soldier.getName() + "\n";
		}

    
		var defenderStatus = "";
		for( i in this.defenders )
		{
            soldier = this.defenders[ i ].getSoldier();
            
            currentHp = soldier.getCurrentHp();
            maxHp = soldier.getMaxHp();
                
			defenderStatus +=   "(" + currentHp + "/" + maxHp + ")" + soldier.getName() + "\n";
		}
                
		alert( extra + "\nPLAYER'S TEAM: " + this.playerTeam + "\n\nATTACKER:\n" + attackerStatus + "\n\nDEFENDER:\n" + defenderStatus );
    };
};