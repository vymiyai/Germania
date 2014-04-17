"use strict";

// defines a Weapon template to be used by Soldiers.
var Weapon = function( stats )
{
    // name/class of this weapon.
    this.name                       = stats.name;
  
    // minimum and maximum damage of this weapon.
	this.minimumDamage              = stats.minimumDamage;
    this.maximumDamage              = stats.maximumDamage;
  
    // modifying functions based on a distance value.
    this.distanceDamageModifier     = stats.distanceDamageModifier;
    this.distanceAccuracyModifier   = stats.distanceAccuracyModifier;
    
    // set the item's special ability.
    this.ability                    = stats.ability;

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
        
        // obtain raw damage.
        var damage = variableDamage + this.minimumDamage;
        
        // return damage modified by distance.
        return Math.floor( this.distanceDamageModifier( distance ) * damage );
    };
  
    this.setup  = function( target )
    {
        this.ability( target );
    };
  
};