
 function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");


          ctx.fillStyle = "rgba(204,26,216,0.5)"; 
          ctx.fillRect(25,25,80,80);
          
          
           ctx.fillStyle = "rgba(204,50,10,0.9)"; 
          ctx.fillRect(50,50,80,80);
        

        
          
      }
    }

