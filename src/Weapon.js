"use strict";

var Weapon = function( name, minimumDamage, maximumDamage, distanceDamageModifier, distanceAccuracyModifier )
{
  	this.name = name;
  
	this.minimumDamage = minimumDamage;
  	this.maximumDamage = maximumDamage;
  
  	this.distanceDamageModifier = distanceDamageModifier;
  	this.distanceAccuracyModifier = distanceAccuracyModifier;
  
  	this.getBaseDamage = function()
    {
      	var variableDamage = Math.floor( ( Math.random() * ( this.maximumDamage - this.minimumDamage ) ) );
    	return variableDamage + this.minimumDamage; 
    };
  
};