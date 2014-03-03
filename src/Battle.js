"use strict";

var Battle = function( belligerents, introduction, ending )
{
  	// belligerents: { attacker:[], defender:[]}
  
  	// the callbacks that will be called when a battle starts or ends.
  	// an example of ending is the increment of the number of a specific mission completed...
  	// standard repeatable missions will most likely not have neither intro, nor ending. 
  	// campaign missions will most likely have all battles with an ending or intro.
	this.playIntroduction 	= introduction;
  
  	this.playEnding 		= ending;
  
  	this.start = function()
    {
      	// do stuff...
      	var result = true;
      
      	// return the result of the battle.
      	// should build statistcs here...
      	return { "result": result };
    }
};