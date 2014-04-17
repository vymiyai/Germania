"use strict";

// modifiers...?
/*
    Paratrooper - above average equipment
    SS - stormtroopers/shock troopers
    Elite
    Veteran
    Regular
    Recruit
*/

var Soldier = function( stats )
{
    this.name       = stats.name;
    
    this.primary    = new Weapon( stats.primary );
    this.secondary  = stats.secondary;
    this.equipment1 = stats.equipment1;
    this.equipment2 = stats.equipment2;
    
    this.basicSpeed = stats.getBasicSpeed();
    this.hp         = stats.getHp();
    this.maxHp      = stats.getMaxHp();
    
    this.turnBasedAbilities = stats.getTurnBasedAbilities();

    // default is random personality.
	this.personality = function( statistics, targets )
    {
        return Math.floor( ( Math.random() * targets.length ) ); 
    };
  
    // returns the index of the target chosen by the personality.
    this.selectTarget = function( statistics, targets )
    {
        return this.personality( statistics, targets );
    };
  
    // returns true if the character has more than 0 HP.
    this.isAlive = function()
    {
        return this.hp > 0;
    };
    
    
    // abilities related methods________________________________________________
    
    this.addAbility = function( ability )
    {
        this.turnBasedAbilities.push( ability );
    };
    
    this.activateTurnBasedAbility = function()
    {
        for( var index = 0; index < this.turnBasedAbilities.length; index++ )
        {
            this.turnBasedAbilities[ index ]();
        }
    };
    
    
    // weapon related methods___________________________________________________
    
    // weapon selection function, should return the weapon with the highest damage x hit rate value between prinmary and secondary weapons.
    this.selectWeapon = function( distance )
    {
        return this.primary;
    };
    
    // set all needed decorators to this soldier based on the equipments' special abilities.
    this.primary.setup( this );
    //this.secondary.setup();
    //this.equipment1.setup();
    //this.equipment2.setup();

};