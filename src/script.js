window.addEventListener('load',function(e) 
{
 	// Set up Quintus instance____________________________________________________
  	var Q = window.Q = Quintus().
    	include("Sprites, Scenes, Input").
    	setup({ width: config.screen.width, height: config.screen.height });
  
  
  
 	// Character class definition_________________________________________________
	Q.Sprite.extend( "Character", 
	{
		init: function( sheetName ) 
		{
			this._super(
			{
				sheet: sheetName,
				frame: config.sprites.actions.idle,
				h: config.sprites.portraits.height,
				w: config.sprites.portraits.width
			});
		}
	});
        



  
  	// Create a simple scene that adds two shapes on the page
  	Q.scene("start",function(stage) 
    {
        var sprite1 = new Q.Character( 'character' );
      
        sprite1.set( { x: config.screen.width/2, y: config.sprites.portraits.height/2 } );
        
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
  	});

  
  
  
  
  
  Q.load( [ "suwako.png", "character.json" ], function() 
    {
       	Q.compileSheets( "suwako.png", "character.json" );
  
      	// Start the show
      	Q.stageScene("start");
  
        // Turn visual debugging on to see the 
        // bounding boxes and collision shapes
        //Q.debug = true;
  
      	// Turn on default keyboard controls
      	Q.input.keyboardControls();
    });

});
