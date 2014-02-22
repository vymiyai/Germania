"use strict";

// uses global variables in the preconditions variable...

// defines a game event object with preconditions.
var Event = function( preconditions )
{
    this.preconditions 	= preconditions;
    this.resolved 		= false;
  
    // checks if a condition has been resolved.
    this.resolve = function()
    {
        // condition already resolved.
        if( this.resolved )
        {
            return true;
        }
        else
        {
        	// iterate through all preconditions and resolve them.
            for( var index = 0; index < this.preconditions.length; index++ )
            {
            	var condition = this.preconditions[ index ];
              
                // check if the condition evaluates a leaf expression (a functor).
                if( typeof condition === "function" )
                {
                    if( condition() )
                        continue;
                    else
                        return false;
                }
              	// the condition is a composite event/expression (Event object).
                else
                {
					if( condition.resolve() )
						continue;
					else
                  		return false;
                }
			}
          
            // if the expression is true or all preconditions are true, set
            // resolved status as true and return.
            this.resolved = true;
            return true;
        }
    };
};