"use strict";

// IMPLEMENTAR UM OBSERVER SERIA INTERESSANTE PRA REGISTRAR TODAS OS EVENTS ATIVOS
// REGISTRAR o CHECKOUT DA QUEST NA ESCAVE DESTINO
// EVENTS tem que ter como parametros 2 coisas: condicoes de termino e callback. Novos eventos sao adicionados no callback.
// quando profiles sao salvos, os eventos de todas as escaves sao salvas....
// quando o jogador chega numa escave, so os eventos dessa escave sao testados por complitude e trigger de outros eventos...
// criar script so com as escaves numa variavel global pra ter acesso facil pro registro de eventos nas callbacks de eventos.
// a lista de events registradas numa escave e uma FIFO
// unregisters de eventos permanentes como scout e scavange nao sao desregistrados das escaves...

var EVENTS = {};

// STANDARD SCAVENGE MISSION - Optional Mission 01

// through the specification, the only possible destination of a scavenge mission is the origin location.
EVENTS[ "SCAVENGE MISSION" ] = new Event( 
  	"SCAVENGE MISSION",
  	"SELF",
	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== parentEscave.name;
      	return mission && location;
    }, 
	function( parentEscave, self )
  	{ 
      	//alert( "SCAVENGE MISSION COMPLETE" );
    } );
    
    

// STANDARD SCOUT MISSION - Optional Mission 02
EVENTS[ "SCOUT MISSION" ] = new Event( 
  	"SCOUT MISSION",
  	"SELF",
	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== parentEscave.name;
      	return mission && location;
    }, 
	function( parentEscave, self )
  	{ 
      	//alert( "SCOUT MISSION COMPLETE" );
    } );






// START MISSION - Story Mission 000
EVENTS[ "START MISSION" ] = new Event(
	"START MISSION",
  	"STADTMITTE",
	function( parentEscave, self )
	{ 
      	var location = VARIABLES[ "CURRENT LOCATION" ] == "STADTMITTE";
		return location; 
	}, 
	function( parentEscave, self )
	{
		//alert( "SUPPLY AMMO TO HAUPTBAHNHOF REGISTERED IN STADTMITTE!" );
              
		ESCAVES[ "STADTMITTE" ].registerEvent( EVENTS[ "SUPPLY AMMO TO HAUPTBAHNHOF" ] ); 
		ESCAVES[ "STADTMITTE" ].unregisterEvent( EVENTS[ "START MISSION" ] );
	} );

// SUPPLY AMMO TO HAUPTBAHNHOF - Story Mission 001
EVENTS[ "SUPPLY AMMO TO HAUPTBAHNHOF" ] = new Event( 
  	"SUPPLY AMMO TO HAUPTBAHNHOF",
  	"HAUPTBAHNHOF",
  	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	return mission && location; 
    }, 
  	function( parentEscave, self )
  	{
      	//alert( "SUPPLY AMMO TO HAUPTBAHNHOF COMPLETE" );
      
      	ESCAVES[ "HAUPTBAHNHOF" ].registerEvent( EVENTS[ "TARGET PRACTICE" ] ); 
      	ESCAVES[ "STADTMITTE" ].unregisterEvent( EVENTS[ "SUPPLY AMMO TO HAUPTBAHNHOF" ] );
    } );

// TARGET PRACTICE MISSION - Story Mission 002
EVENTS[ "TARGET PRACTICE" ] = new Event( 
  	"TARGET PRACTICE",
  	"HAUPTBAHNHOF",
	function( parentEscave, self )
  	{
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	var condition = VARIABLES[ "TRAINING TARGETS SHOT" ] >= 3;
      	return mission && location && condition; 
	}, 
	function( parentEscave, self )
  	{ 
      	//alert( "TARGET PRACTICE COMPLETE" );
      
      	ESCAVES[ "HAUPTBAHNHOF" ].registerEvent( EVENTS[ "FIRST SCAVENGE MISSION" ] ); 
      	ESCAVES[ "HAUPTBAHNHOF" ].unregisterEvent( EVENTS[ "TARGET PRACTICE" ] );
    } );

// FIRST SCAVENGE MISSION - Story Mission 003
EVENTS[ "FIRST SCAVENGE MISSION" ] = new Event( 
  	"FIRST SCAVENGE MISSION",
  	"HAUPTBAHNHOF",
  	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	var condition = VARIABLES[ "FOOD SUPPLIED" ] >= 5; 
      	return mission && location && condition; 
    },
	function( parentEscave, self )
  	{ 
      	//alert( "FIRST SCAVENGE MISSION COMPLETE" );
      
      	ESCAVES[ "HAUPTBAHNHOF" ].unregisterEvent( EVENTS[ "FIRST SCAVENGE MISSION" ] ); 
      	ESCAVES[ "HAUPTBAHNHOF" ].registerEvent( EVENTS[ "SUPPLY FOOD TO STADTMITTE" ] );
      
      	// enable scavenge missions.
      	for( var key in ESCAVES )
      		ESCAVES[ key ].registerEvent( EVENTS[ "SCAVENGE MISSION" ] );
    } );

// SUPPLY FOOD TO STADTMITTE - Story Mission 004
EVENTS[ "SUPPLY FOOD TO STADTMITTE" ] = new Event( 
  	"SUPPLY FOOD TO STADTMITTE",
  	"STADTMITTE",
  	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	return mission && location;
    },
	function( parentEscave, self )
  	{
      	//alert( "SUPPLY FOOD TO STADTMITTE COMPLETE" );
      
      	ESCAVES[ "HAUPTBAHNHOF" ].unregisterEvent( EVENTS[ "SUPPLY FOOD TO STADTMITTE" ] ); 
      	ESCAVES[ "STADTMITTE" ].registerEvent( EVENTS[ "FIRST SCOUT MISSION" ] ); 
    } );


// FIRST SCOUT MISSION - Story Mission 005
EVENTS[ "FIRST SCOUT MISSION" ] = new Event( 
  	"FIRST SCOUT MISSION",
  	"STADTMITTE",
  	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	var condition = VARIABLES[ "SCOUT MISSION COMPLETED" ] >= 1;
      	return mission && location && condition; 
    },
	function( parentEscave, self )
  	{ 
      	//alert( "FIRST SCOUT MISSION COMPLETE" );
      
      	ESCAVES[ "STADTMITTE" ].unregisterEvent( EVENTS[ "FIRST SCOUT MISSION" ] );
      	ESCAVES[ "STADTMITTE" ].registerEvent( EVENTS[ "HOLD THE LINE" ] );
      
      	// enable scout missions.
      	for( var key in ESCAVES )
      		ESCAVES[ key ].registerEvent( EVENTS[ "SCOUT MISSION" ] );
    } );

// HOLD THE LINE - Story Mission 006
EVENTS[ "HOLD THE LINE" ] = new Event( 
  	"HOLD THE LINE",
  	"STADTMITTE",
  	function( parentEscave, self )
  	{ 
      	var mission = VARIABLES[ "CURRENT MISSION" ] 	== self.name;
      	var location = VARIABLES[ "CURRENT LOCATION" ] 	== self.destination;
      	var condition = VARIABLES[ "HOLD THE LINE MISSION COMPLETED" ] >= 1;
      	return mission && location && condition; 
    },
	function( parentEscave, self )
  	{ 
      	//alert( "FIRST SCOUT MISSION COMPLETE" );

      	ESCAVES[ "STADTMITTE" ].unregisterEvent( EVENTS[ "HOLD THE LINE" ] );
      
      	alert( "END OF EXECUTION" );
    } );

// Escort convoy to Escave 02

// Capture the Railway

