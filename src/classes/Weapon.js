"use strict";


// defines a Weapon template to be used by Soldiers.
var Weapon = function( name, minimumDamage, maximumDamage, distanceDamageModifier, distanceAccuracyModifier )
{
    // name/class of this weapon.
    this.name = name;
  
    // minimum and maximum damage of this weapon.
	this.minimumDamage = minimumDamage;
    this.maximumDamage = maximumDamage;
  
    // modifying functions based on a distance value.
    this.distanceDamageModifier = distanceDamageModifier;
    this.distanceAccuracyModifier = distanceAccuracyModifier;

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
        return this.distanceDamageModifier( distance ) * Math.floor( damage );
    };
  
};