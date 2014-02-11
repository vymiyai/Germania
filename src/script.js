window.addEventListener( 'load',function( e ) 
{
 	// Set up Quintus instance____________________________________________________
  	var Q = window.Q = Quintus().
    	include( "Sprites, Scenes, Input, Anim" ).
    	setup( { width: config.screen.width, height: config.screen.height } );
  
  
  
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
          	this.play( "idle" );
		},
      
      	// public methods.
        summon: function()
        {
          	this.animate( { opacity: 1 }, config.animations.summonDuration );
        },
      
        dismiss: function()
        {
        	this.animate( { opacity: 0 }, config.animations.dismissDuration );
        }
      
	});
        



  
  	// Create a simple scene that adds two shapes on the page
  	Q.scene("start",function(stage) 
    {
        var sprite1 = new Q.Character( "Suwako" );
      
     	sprite1.set( { x: config.screen.width/2, y: config.sprites.portraits.height/2, flip: "x" } );
        
        stage.insert(sprite1);
        
        sprite1.on('step',function() { });

        // A red platform for the other sprite to land on
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
      
      	// input test
        Q.input.on( 'action', sprite1, "dismiss" );
      	Q.input.on( 'fire', sprite1, "summon" );
  	});

  
  
  
  
  
  Q.load( [ "suwako.png", "character.json" ], function() 
    {
       	Q.compileSheets( "suwako.png", "character.json" );
      
      	Q.animations( "characterAnimations",
		{
          	idle: { frames: [2, 7], rate: 0.5 }
		});
  
      	// Start the show
      	Q.stageScene("start");
  
        // Turn visual debugging on to see the 
        // bounding boxes and collision shapes
        //Q.debug = true;
  
      	// Turn on default keyboard controls
      	Q.input.keyboardControls();
    });

});