

function publicBusFare(people){
    
    let busPeople,microBus,publicBus=0;
    let busRemainder;
    let microRemainder;

     if(people<=0){
        console.log("you should enter positive people value");
     }
     else{
        busPeople=parseInt(people/50);
        // console.log("busspeople =   ",busPeople);
  
  
         busRemainder=people%50;
        // console.log("bussremainer =   ",busRemainder);
      
      
          microBus=parseInt(busRemainder/11);
         // console.log("microbass =   ",microBus);
          microRemainder=parseInt(busRemainder%11);
          //console.log("microbussremainder    =",microRemainder);
  
          publicBus=microRemainder*250;
  
      
      console.log(publicBus);
     }
      
       
}
publicBusFare(115);