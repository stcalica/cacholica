$(document).ready(function(){
  		
  		//Get the canvas & context
		var c = new fabric.Canvas("socialWall", {
		    hoverCursor: 'pointer',
            isDrawingMode: true
		});

  		//Run function when browser  resize
		respondCanvas();
		addImage();
		drawOnImage();

		$(window).resize( respondCanvas );
		$(window).resize( addImage );
	//	$(window).resize( resizeImage ); //meed to resize and center image each time 
	//need to make sure to get target sizes
	  	
	  	function respondCanvas(){
  			//c.attr('width', $(container).width() ); //max width
  			//c.attr('height', $(container).height() ); //max height

			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
			var widthn = width - 100;
			var heightn = height - 100;
			c.setDimensions({
				width: widthn,
				height: heightn
			});
			
			
					//Redraw & reposition content
			var x = c.getWidth();
			var y = c.getHeight();  			
			var ct = c.getContext();
			//ct.fillStyle = "#DDDDDD"; //black
			//ct.fillRect( 0, 0, x, y); //fill the canvas

			//ct.font = "20px Calibri";
			//var resizeText = "Canvas width: "+c.getWidth()+"px";
			//ct.textAlign = "center";
			//ct.fillStyle = "#333333"; //white
			//ct.fillText(resizeText, (x/2), (y/2) );

		}

    function addImage(){
      fabric.Image.fromURL("./test.jpg", function(img){
            // var pattern = ctx.createPattern(img, "repeat");
            //ctx.fillStyle = pattern;
            c.setBackgroundImage(img, c.renderAll.bind(c));
			//Redraw & reposition content
			var x = c.getWidth();
			var y = c.getHeight();  			
			var ct = c.getContext();
			//if x & y <= then use this image (smartphone)
				//get images centered
			//if x & y >= then use this image (desktop/laptop)
				//get images centered
       });

		}

    function drawOnImage(){

		respondCanvas();
	  	$(window).resize( respondCanvas );

    }
	

    function shareImage(){
		//facebook set up
		
		
		//get canvas image 
		var data = c.toDataURL("image/png"); //change to image/png
		var encode = data.substring(data.indexOf(',') + 1, data.length); //encode it
		var decode = Base64Binary.decode(endcode); //decode it 
		//share on facebook 
	// resource : https://coderwall.com/p/4qpmfw/sharing-html5-canvas-images-to-directly-to-facebook
	//http://pupunzi.open-lab.com/2013/10/30/create-images-and-make-them-travel-the-world-using-html5-svg-canvas-and-javascript/
    }


});