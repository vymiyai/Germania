"use strict";

// defines a Weapon template to be used by Soldiers.
var Weapon = function( stats )
{
    // name of this weapon.
    this.name                       = stats.name;
    
    // category of the weapon (primary or secondary).
    this.category                   = stats.category;
    
    // type of the weapon (MG, SMG, ...)
    this.type                       = stats.type;
  
    // minimum and maximum damage of this weapon.
	this.minimumDamage              = stats.minimumDamage;
    this.maximumDamage              = stats.maximumDamage;
  
    // modifying functions based on a distance value.
    this.distanceDamageModifier     = stats.distanceDamageModifier;
    this.distanceAccuracyModifier   = stats.distanceAccuracyModifier;
    
    // the items' bonuses to be applied.
    this.bonuses                    = stats.bonuses;



    // return the weapon's type.
    this.getWeaponType = function()
    {
        return this.type;
    };

    // returns the hit probability as a function of distance.
    this.getBaseAccuracy = function( distance )
    {
        return this.distanceAccuracyModifier( distance );
    };

    // returns the damage as a function of distance.
    this.getBaseDamage = function( distance )
    {
        // get variable damage.
        var variableDamage =  Math.random() * ( this.maximumDamage - this.minimumDamage );
        
        // calculate raw damage.
        var damage = variableDamage + this.minimumDamage;
        
        // return damage modified by distance.
        return Math.floor( this.distanceDamageModifier( distance ) * damage );
    };
  
    // apply bonus to each targeted soldier's attribute as listed in the weapon's bonuses. 
    this.onEquip  = function( target )
    {
        var soldierBonuses = target.getBonuses();
        
        for( var attributeName in this.bonuses )
        {
            soldierBonuses[ attributeName ] += this.bonuses[ attributeName ];
        }
        
    };
  
    // remove bonus to each targeted soldier's attribute as listed in the weapon's bonuses. 
    this.onUnequip = function( target )
    {
        var soldierBonuses = target.getBonuses();
        
        for( var attributeName in this.bonuses )
        {
            soldierBonuses[ attributeName ] -= this.bonuses[ attributeName ];
        }
    };
  
};