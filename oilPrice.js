
function oilPrice(diesel,petrol,octane){

    if(diesel<0 || petrol<0 || octane<0){// if negative
        console.log("oil amount should not be negative");
    }
    else{
    const sum=(diesel*114)+(petrol*130)+(octane*135);
    console.log(sum);
           
    }

}
oilPrice(2,3,1)