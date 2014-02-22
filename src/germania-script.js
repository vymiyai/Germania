/*
var Monogatari = function( Q )
{
  	this.Q = Q;
  	this.scenes = [ 
      	function()
      	{ alert(1); }, 
      	function()
      	{ alert(2); }, 
      	function()
      	{ alert(3); } ];
  
  	this.run = function()
    {
      	for( var i = 0; i < this.scenes.length; i++ )
        {
          	var action = this.scenes[ i ];
          	action();
        }
    }
};
*/

var Monogatari = function( Q )
{
  	this.Q = Q;
  	this.scenes = [ 
      	Q.scene("level1",function(stage) 
		{
  			var sprite1 = new Q.Character( "Suwako" );
     		sprite1.set( { x: config.screen.width/2, y: config.sprites.portraits.height/2, flip: "x" } );
        	stage.insert( sprite1 );
		}), 
      	Q.scene("level2",function(stage) 
		{
  			stage.insert(new Q.Ball());
		}),  
      	Q.scene("level3",function(stage) 
		{
  			stage.insert(new Q.Ball());
          

          
          
          
          
          
          
          
		}) ];
  
  	this.run = function()
    {
      	for( var i = 0; i < this.scenes.length; i++ )
        {
          	var action = this.scenes[ i ];
          	action();
        }
    };
  
  	this.getFirstEscave = function()
    {
    };
};