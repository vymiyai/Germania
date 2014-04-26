"use strict";

// theaters should be generated at the mission selction menu...
// but that means that theaters for campaign mission will change slightly...
//unless they are predefined...


var BattleEngine = function( theater )
{
    // "constants".
    this.DEFEAT     = false;
    this.VICTORY    = true;
    
	this.theater    = theater;
  
    this.run = function()
    {
        this.theater.playIntroduction();
      
        // iterate through each battle.
        for( var index = 0; index < this.theater.battles.length; index++ )
        {
            var result = this.theater.executeBattle( index );
          
            // if at least one of the battles resulted in defeat, return false;
            if( result == this.DEFEAT )
                // play theater defeat ending...?
                return this.DEFEAT;
        }
      
        this.theater.playEnding();
      
        // all battles were finished successfully.
        return this.VICTORY;
    };
    
};