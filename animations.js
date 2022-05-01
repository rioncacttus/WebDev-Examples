
   function myMove(){

       let id = null;
       const elem = document.getElementById("animate");
       let pos = 0;
       clearInterval(id);

       id = setInterval(frame,25);

       function frame(){

           if(pos == 170){

               clearInterval(id);
           }

    
           else{

            pos++;
               elem.style.top = pos + "px"; 
               elem.style.left = pos + "px"; 
           }
       }
   }
