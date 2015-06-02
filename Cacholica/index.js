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
  			
  	//		ct.fillStyle = "#DDDDDD"; //black
  	//		ct.fillRect( 0, 0, x, y); //fill the canvas

  			//ct.font = "20px Calibri";
  			//var resizeText = "Canvas width: "+c.width()+"px";
  			//ct.textAlign = "center";
  			//ct.fillStyle = "#333333"; //white
	  	  //ct.fillText(resizeText, (x/2), (y/2) );
		}

    function addImage(){
      var canvas = $("#socialWall");
      var ctx = canvas.get(0).getContext('2d');
      fabric.Image.fromURL("./backgroundflowers.jpg", function(img){
          //  var pattern = ctx.createPattern(img, "repeat");
            //ctx.fillStyle = pattern;
            canvas.add(img);
       });

		}

    function drawOnImage(){



    }

    function shareImage(){



    }
		//Initial call
		respondCanvas();
    addImage();
    //drawOnImage();
    //shareImage() should be attached to a button with an onclick listner


});