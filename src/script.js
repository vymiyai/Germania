window.addEventListener('load',function(e) 
{
	// Set up a standard Quintus instance with only the 
  	// Sprites and Scene module (for the stage support) loaded.
  	var Q = window.Q = Quintus().
    	include("Sprites, Scenes, 2D, Input").
    	setup({ width: 480, height: 800 });
  
  
  
  
  
  
  	Q.ASSET = { "ENEMY":"enemy.png", "SUWAKO":"suwako.png" };

        Q.Sprite.extend( "CHARACTER", 
		{
       		init: function( assetName ) 
          	{
         		this._super(
                {
                  	sheet: "character",
                  	frame: ZAH,
                  	h: 514,
                  	w: 514
         		});
       		}
     	});
        
        
    /*
  	Q.CHARACTER = function( assetName )
  	{
  		//return new Q.Sprite({ x: 500, y: 100, asset: assetName, angle: 0, collisionMask: 1, scale: 1}); 
    
   	 	//return new Q.Sprite({ asset: Q.ASSET[ assetName ] }); 
      
      	return new Q.Sprite({ sheet: "GermaniaSpritesheets" }); 
      
        Q.Sprite.extend("Penguin", 
		{
       		init: function(p) 
          	{
         		this._super(
                {
           			sheet: "player",
           			frame: 7
         		});
       		}
     	});
  	};
*/



	

  
  
  
  
  
  
  	// Create a simple scene that adds two shapes on the page
  	Q.scene("start",function(stage) 
    {
      	/*
      	// A basic sprite shape a asset as the image
      	var sprite1 = new Q.Sprite({ x: 500, y: 100, asset: 'enemy.png', 
                                   angle: 0, collisionMask: 1, scale: 1});
      	*/
    
        var sprite1 = new Q.CHARACTER( 'SUWAKO' );
        sprite1.set( { x: 240, y: 257 } );
        
        stage.insert(sprite1);
        
        sprite1.on('step',function() { });

        // A red platform for the other sprite to land on
        var sprite2 = new Q.Sprite({ x: 240, y: 600, w: 300, h: 200 });
        sprite2.draw= function(ctx) 
        {
            ctx.fillStyle = '#FF0000';
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
