"use strict";

// model object for Escaves.
var Escave = function( name )
{
	this.name 				= name;
  	this.activeEvents 		= [];
  	this.eventsToBeAdded 	= [];
  	this.eventsToBeRemoved 	= [];
  	// check if there is need to check for finished events or just VARIABLES update is enough. 
  
  	// schedules an event to be added to the active events.
  	this.registerEvent = function( event )
    {
    	this.eventsToBeAdded.push( event );
    };
  
  	// schedules the removal of an event from the active events.
   	this.unregisterEvent = function( event )
  	{
      	this.eventsToBeRemoved.push( event );
    };
  
  	// checks completion of all registered events and call their callbacks.
  	this.resolveEvents = function()
    {
    	for( var index = 0; index < this.activeEvents.length; index++ )
        {
        	var event = this.activeEvents[ index ];
          	event.resolve( this );
        }
      
      	this.updateEvents();
    };
  
  	// helper method that adds and removes schedules events.
  	this.updateEvents = function()
    {
      	// remove scheduled events.
    	for( var index = 0; index < this.eventsToBeRemoved.length; index++ )
        {
        	var event 		= this.eventsToBeRemoved[ index ];
          	var position 	= this.activeEvents.indexOf( event );
          	
          	// removes the event positioned at index position.
          	this.activeEvents.splice( position, 1 );
        }
      
      	// add scheduled events.      	
        this.activeEvents = this.activeEvents.concat( this.eventsToBeAdded );
      
      	// reset scheduling buffers.
      	this.eventsToBeAdded 	= [];
      	this.eventsToBeRemoved 	= [];
    };
};