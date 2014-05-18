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
*/

var Soldier = function( stats )
{
    this.name       = stats.name;
    
    this.bonuses    = { BASIC_SPEED: 0, MAXIMUM_HP: 0 };
    
    this.primary    = new Weapon( stats.primary );
    this.secondary  = new Weapon( stats.secondary );
    this.equipment1 = stats.equipment1;
    this.equipment2 = stats.equipment2;
    
    this.basicSpeed = stats.getBasicSpeed();
    this.hp         = stats.getHp();
    this.maxHp      = stats.getMaxHp();
    
    //this.turnBasedAbilities = stats.getTurnBasedAbilities();

    // returns true if the character has more than 0 HP.
    this.isAlive = function()
    {
        return this.hp > 0;
    };
    
    // returns the bonuses map.
    this.getBonuses = function()
    {
        return this.bonuses;
    };
    
    // getters__________________________________________________________________
    
    this.getCurrentHP = function()
    {
        return this.hp;
    };
    
    this.getBasicSpeed = function()
    {
        return this.basicSpeed + this.bonuses[ "BASIC_SPEED" ];
    };
    
    this.getMaxHP = function()
    {
        return this.maxHp + this.bonuses[ "MAXIMUM_HP" ];
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
    
    
    // abilities related methods________________________________________________
    /*
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
    */
    
    // weapon and equipment related methods___________________________________________________
    
    // weapon selection function, should return the weapon with the highest damage x hit rate value between prinmary and secondary weapons.
    this.selectWeapon = function( distance )
    {
        return this.primary;
    };
    
    this.equip = function()
    {
        this.primary.onEquip( this );
        this.secondary.onEquip( this );
        /*
        this.equipment1.onEquip( this );
        this.equipment2.onEquip( this );        
        */
    };
    
    this.unequip = function()
    {
        this.primary.onUnequip( this );
        this.secondary.onUnequip( this );
        /*
        this.equipment1.onUnequip( this );
        this.equipment2.onUnequip( this );        
        */
    };
    
    this.equip();

};