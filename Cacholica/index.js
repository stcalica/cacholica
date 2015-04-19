$(document).ready(function(){
  		
  		//Get the canvas & context
  		var c = $('#socialWall');
  		var ct = c.get(0).getContext('2d');
  		var container = $(c).parent();
  		
  		//Run function when browser  resize
	  	$(window).resize( respondCanvas );
	  	
	  	function respondCanvas(){
  			c.attr('width', $(container).width() ); //max width
  			c.attr('height', $(container).height() ); //max height
  			
  			//Redraw & reposition content
  			var x = c.width();
  			var y = c.height();  			
  			ct.font = "20px Calibri";
  			
  			ct.fillStyle = "#DDDDDD"; //black
  			ct.fillRect( 0, 0, x, y); //fill the canvas
  			
  			var resizeText = "Canvas width: "+c.width()+"px";
  			ct.textAlign = "center";
  			ct.fillStyle = "#333333"; //white
	  		ct.fillText(resizeText, (x/2), (y/2) );
		}
		
		//Initial call
		respondCanvas();
 


});