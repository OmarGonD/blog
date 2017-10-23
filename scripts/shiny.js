

window.onload = function () {

(function () {
    
    var myNode = document.querySelector('.pixgrid ul');
    /*var myNode = document.querySelector('#shiny-pics .pixgrid ul');*/
       
    myNode.addEventListener("click", function(e) {
        
        if (e.target.tagName === 'IMG') { 
        
            var myOverlay = document.createElement('div');
            myOverlay.id = 'overlay';
            document.body.appendChild(myOverlay);
            /*console.log(typeof(myOverlay));*/
            /*console.log(myOverlay.prototype.toString());*/
            
            //set up overlay styles //
            myOverlay.style.position = 'absolute';
            
            myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
            myOverlay.style.cursor = 'pointer';
            
            //resize and position of overlay //
            
            myOverlay.style.width = window.innerWidth + 'px';
            myOverlay.style.height = window.innerHeight + 'px';
            myOverlay.style.top = window.pageYOffset + 'px';
            myOverlay.style.left = window.pageXOffset + 'px';
            
            
            //output the target //
            console.log(e.target);
            
            var imageSrc = e.target.src;
            var largeImage = document.createElement('img');
            largeImage.id = 'largeimage';
            largeImage.src = imageSrc;
            largeImage.style.display = 'block';
            largeImage.style.position = 'absolute';
            
            //wait until image is loaded
            
            largeImage.addEventListener('load', function() {
                
                //resize if taller
                if (this.height > window.innerHeight) {
                    this.ratio = window.innerHeight / this.height;
                    this.height = this.height * this.ratio;
                    this.width = this.width * this.ratio;
                }
                
                //resize if wider
                if (this.width > window.innerWidth) {
                    this.ratio = window.innerWidth / this.width;
                    this.width = this.width * this.ratio;
                    this.height = this.height * this.ratio;
                }
                
                centerImage(this); //this hace ref a largeImage (onload)
                
                myOverlay.appendChild(largeImage);
                
                largeImage.addEventListener('click', function(){
                   if(myOverlay) {
                       window.removeEventListener('resize', window, false);
                        window.removeEventListener('scroll', window, false);
                       myOverlay.parentNode.removeChild(myOverlay);
                   } 
                },false);
                
                
                
                /*mouseover*/
                
                myOverlay.addEventListener('click', function(){
                   /*if(myOverlay) {*/
                       myOverlay.parentNode.removeChild(myOverlay);
                   /*} */
                },false);
                
               
                
                
                
                
                window.addEventListener('scroll', function() {
                    if(myOverlay) {
                        myOverlay.style.top = window.pageYOffset + 'px';
                        myOverlay.style.left = window.pageXOffset + 'px';
                    }
                }, false);
                
                 window.addEventListener('resize', function() {
                    if(myOverlay) {
                        myOverlay.style.width = window.innerWidth + 'px';
                        myOverlay.style.height = window.innerHeight + 'px';
                        myOverlay.style.top = window.pageYOffset + 'px';
                        myOverlay.style.left = window.pageXOffset + 'px';
                        
                        centerImage(largeImage);
                    }
                }, false);
                
            });
            
            
            
        } //target is an image
        
    }, false); //image is clicked
    
    
    function centerImage (theImage) {
        var myDifX = (window.innerWidth - theImage.width) / 2;
        var myDifY = (window.innerHeight - theImage.height) / 2;
        
        theImage.style.top = myDifY + 'px';
        theImage.style.left = myDifX + 'px';
        
        return theImage;
    }
       
 })(); //self executiong function


} // close of window.onload.
