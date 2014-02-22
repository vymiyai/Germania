window.addEventListener( 'load', function( e ) 
{
 	// Set up Quintus instance____________________________________________________
  	var Q = window.Q = Quintus().include( "Sprites, Scenes, Input, Anim, UI, Touch" );
  
  	Q.setup( { width: config.screen.width, height: config.screen.height } )
    	.controls()
    	.touch( Q.SPRITE_ALL );  
  
 	// Character class definition_________________________________________________
	Q.Sprite.extend( "Character", 
	{
      	// constructor.
		init: function( characterName ) 
		{
			this._super(
			{
              	sprite: "characterAnimations",
				sheet: config.spritesheets[ characterName ],
				h: config.sprites.portraits.height,
				w: config.sprites.portraits.width,
              	opacity: 0
			});
          
          	// adding animation and tweening capabilities.
          	this.add( "animation" );
          	this.add( "tween" );
          
          	this.on( "summon", this, "summon" );
          	this.on( "dismiss", this, "dismiss" );
          
          	// default action.
          	this.play( "idleHappy" );
		},
      
      	// public methods.
        summon: function()
        {
          	this.animate( { opacity: 1 }, config.animations.summonDuration );
        },
      
        dismiss: function()
        {
        	this.animate( { opacity: 0 }, config.animations.dismissDuration );
        },
      
      	action: function( actionName )
      	{
        	this.play( actionName );
        },
      	/*
      	touch: function( touch )
      	{ 
          	alert( "touched Suwako..." ); 
        }
      	*/
	});
        



  
  
  

  
  
  
  
  
  
  
  	// Create a simple scene that adds two shapes on the page
  	Q.scene( "character stage", function( stage ) 
    {
        var sprite1 = new Q.Character( "Suwako" );
     	sprite1.set( { x: config.screen.width/2, y: config.sprites.portraits.height/2, flip: "x" } );
        sprite1.on( 'step', function() { } );
      	sprite1.on( "touch", function(){ alert("Suwako 01"); } );
      	stage.insert( sprite1 );
      
        var sprite2 = new Q.Character( "Suwako" );
     	sprite2.set( { x: config.screen.width/2 + 100, y: config.sprites.portraits.height/2, flip: "x" } );
        sprite2.on( 'step', function() { } );
      	sprite2.on( "touch", function(){ alert("Suwako 02"); } );
      	stage.insert( sprite2 );
      
      
        //var box = stage.insert(new Q.UI.Container({ x: Q.width/2, y: Q.height/2, fill: "rgba(0,0,200,0.7)" }));
      	/*
      	var box = stage.insert(new Q.UI.Container({ 	
          	x: config.dialogBox.x, 
			y: config.dialogBox.y, 
			w: config.dialogBox.width, 
			h: config.dialogBox.height, 
			fill: "rgba(0,0,200,0.7)" }));
  		*/
  		//var button = box.insert(new Q.UI.Button({ x: 0, y: 0, fill: "#CCCCCC", label: "Teste" }));
      	var button = stage.insert(new Q.UI.Button({ 	
          	x: config.dialogBox.x, 
			y: config.dialogBox.y, 
			w: config.dialogBox.width, 
			h: config.dialogBox.height, 
			fill: "rgba(0,0,200,0.7)" }));  
      	//var label = button.insert(new Q.UI.Text({ label: "Outro teste..." }));

  		button.on( "touch", function() 
        {
    		//Q.clearStages();
    		//Q.stageScene('character stage');
          	alert( "Wololo~" );
  		});

  		//box.fit(20);      
      
      
      	/*
        // dialog box mock.
        var sprite2 = new Q.Sprite({ 	x: config.dialogBox.x, 
                                    	y: config.dialogBox.y, 
                                    	w: config.dialogBox.width, 
                                    	h: config.dialogBox.height
                                   		});
        sprite2.draw= function(ctx) 
        {
            ctx.fillStyle = '#0000FF';
            ctx.fillRect(-this.p.cx,-this.p.cy,this.p.w,this.p.h);
    	};
      
    	stage.insert(sprite2);
      	*/
      
      
      
      
      	// input test
        Q.input.on( 'up', sprite1, "summon" );
      	Q.input.on( 'up', sprite2, "summon" );
      	Q.input.on( 'down', sprite1, "dismiss" );
      	Q.input.on( 'left', sprite1, function(){ this.action( "idleHappy" ); } );
      	Q.input.on( 'right', sprite1, function(){ this.action( "talkingHappy" ); } );
  	});

  
  
  
  
  
  Q.load( [ "suwako.png", "character.json" ], function() 
    {
       	Q.compileSheets( "suwako.png", "character.json" );
      
      	Q.animations( "characterAnimations",
		{
          	idleHappy: { frames: [2, 7], rate: 0.5 },
          	talkingHappy: { frames: [0, 2], rate: 0.2 }
		});
  
      	// Start the show
      	Q.stageScene("character stage");
  
        // Turn visual debugging on to see the 
        // bounding boxes and collision shapes
        //Q.debug = true;
  
      	// Turn on default keyboard controls
      	Q.input.keyboardControls();
    });

});
