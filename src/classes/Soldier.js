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

/*
Soldiers tem que ter um atributo que contem um mapa de atributos para valores.
Esses valores devem ser usados pra adicao de bonus ou penalidades e devem ser considerados em praticamente qualquer item... Especialmente equips.

O uso de getters e setters sera fortemente encorajado atraves disto...

Atributos variam de 1 a 5.
*/

var Soldier = function( stats )
{
    this.name           = stats.name;
    
    this.soldierClass   = stats.soldierClass;

    this.apDam          = stats.apDam;      // anti-personnel damage.
    this.atDam          = stats.atDam;      // anti-tank damage.
    this.acc            = stats.acc;        // accuracy.
    this.rof            = stats.rof;        // rate of fire.
    this.m              = stats.m;          // movement.
    this.hp             = stats.hp;         // hit points.
    
    this.maxHp          = this.hp * (10 + this.hp * 2);
    this.currentHp      = this.maxHp;
    

    this.primary        = stats.primary;
    this.secondary      = stats.secondary;
    
    // returns true if the character has more than 0 HP.
    this.isAlive = function()
    {
        return this.currentHp > 0;
    };
    
    // personality-based methods________________________________________________

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
    
    // getters__________________________________________________________________
    
    this.getName = function()
    {
        return this.name;
    };
    
    this.getSoldierClass = function()
    {
        return this.soldierClass;
    };
    
    this.getAntiPersonnelDamage = function()
    {
        return this.apDam;
    };
    
    this.getAntiTankDamage = function()
    {
        return this.atDam;
    };
    
    this.getAccuracy = function()
    {
        return this.acc;
    };
    
    this.getRateOfFire = function()
    {
        return this.rof;
    };
    
    this.getMovement = function()
    {
        return this.m;
    };
    
    this.getHitPoints = function()
    {
        return this.hp;
    };
    
    
    
    this.getMaxHp = function()
    {
        return this.maxHp;
    };
    
    this.getCurrentHp = function()
    {
        return this.currentHp;
    };
    


    this.getPrimary = function()
    {
        return this.primary;
    };
    
    this.getSecondary = function()
    {
        return this.secondary;
    };
    
};