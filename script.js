 var nav= document.querySelectorAll(".nav a");
    console.log(nav);
    for(var i=0;i<nav.lenght;i++){
     nav[i].addEventListener('click',function(event){
         event.preventDefault();
         var secId= this.textContent.trim().toLowerCase();
         console.log(secId);
         var sec= document.getElementById('secId');
         console.log(sec);
        var interval = setInterval(function(){
            var currpos=sec.getBoundingClientRect();
            console.log(currpos);
            if(currpos.top<=0){
              clearInterval(interval);
              return;
            }
            window.scrollBy(0,55);
        },50);
     });
    }