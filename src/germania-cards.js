"use strict";

var CARDS = {};

// summons an artillery strike. Inflicts 20% of maxHp in damage to the enemies.
CARDS.ARTILLERY_STRIKE = function( targets, damageModifier )
{ 
    // roll activation probabilty (10%).
    if( Math.random() < 0.1 )
        for( var i in targets )
        {
            var soldier = targets[ i ];
            var damage  = Math.floor( 0.2 * soldier.maxHp );
            
            soldier.hp -= damage;
            
            // COPIED FROM BATTLE ENGINE.
            // remove the enemy from the targets if they are dead.
            if( ! soldier.isAlive() )
            {
                alert( "#" + i + " down..." );
                targets.splice( i, 1 );
            }
        }
    
    return ; 
    
};