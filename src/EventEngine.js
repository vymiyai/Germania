"use strict";

// controls the flow of the events and which events should be available to each Escave.
var EventEngine = function( variables, escaves )
{
  	this.variables = variables;
  	this.escaves = escaves;
  
  
  	// jquery specific and temporary methods.
  	//___________________________________________________________________
  
  	// clears all elements in the menu element.
  	this.clearMenu = function( menu )
    {
		menu.empty();
		menu.append( $( '<h1>' + this.variables[ "CURRENT LOCATION" ] + '</h1>' ) );
      	menu.append( $( "<br />" ) );
    };
  
  	// appends a button element to the menu with the provided handler.
  	this.addMenuButton = function( event, handler, menu )
    {
		var button = $( '<input type="button" value="' + event.name +'"/>' ).click( handler );
		menu.append( button ).append( $( "<br />" ) );
    };
  
  	// calls the combat engine to be developed in the future.
  	this.callCombatEngine = function( mission, destination )
    {
    	alert( "ACCOMPLISHING " + mission + ": APPROACHING " + destination + "..." );
      	return true;
    };
  
	//___________________________________________________________________
  
  	// returns a function that will be the handler of the Escave menu button.
  	this.gethandler = function( event )
    {
      	var self = this;
      
		return function()
		{
			// mission selected.
			var mission = event.name;
			self.variables[ "CURRENT MISSION" ] = mission;
    
			// define the proper destination name.
			var destination = "";
			if( event.destination == "SELF" )
				destination = self.variables[ "CURRENT LOCATION" ];
			else
				destination = event.destination;

			// if the combat phase was successful and the final destination is different from the origin, 
			// set current location as the final destination.
			var missionSuccessful = self.callCombatEngine( mission, destination );
          
			if( missionSuccessful )
			{
				if( event.destination != "SELF" )
					self.variables[ "CURRENT LOCATION" ] = destination;
			}
			else
			{
				alert( "FAILURE CINEMATICS GO HERE..." );
			}
                              
			// regardless if the player succeeded in the mission, refresh the mission menu.
			self.missionMenu();
		};
    };
  
  
  	// returns whether further event resolutions are needed.
  	this.needToKeepResolving = function()
	{
		for( var key in this.escaves )
		{	
			if( this.escaves[ key ].eventsToBeAdded.length > 0 || this.escaves[ key ].eventsToBeRemoved.length > 0 )
				return true;
		}
                  
		return false;
	};

  	// resolves all events until there are no events to be added or removed.
	this.enterEscave = function()
	{
		do
		{
			for( var key in this.escaves )
				this.escaves[ key ].resolveEvents();
		}
		while( this.needToKeepResolving() );
	};
  
  
  	// main public method.
  	// updates the mission menu in the current Escave.
	this.missionMenu = function() 
	{
      	// resolve events.
		this.enterEscave();
      
		this.variables[ "CURRENT MISSION" ] = "";
              
		var menu = $( '#menu' );
      
      	// erase and rebuild the menu.
		this.clearMenu( menu );
              
		// get current Escave and show active events.
		var escave = this.escaves[ this.variables[ "CURRENT LOCATION" ] ];      
              
		for( var index = 0; index < escave.activeEvents.length; index++ )
		{
          	// generate an event handler to be assigned to the menu buttons. 
			var event = escave.activeEvents[ index ];
			var handler = this.gethandler( event );
                  
			// create a new event menu button using the previously constructed handler and append it to the menu.
			this.addMenuButton( event, handler, menu );
		}
	};
  
};