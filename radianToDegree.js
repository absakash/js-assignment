
function radianToDegree(radian){

    const pie=3.1416;
    const degreeValue=(180*radian)/pie;
    // as we know 1 rad = 180/pie;
    if(radian===0){
        return 0;
    }
    else if(radian>=1){
        return degreeValue;
    }
    else{
        return "please enter the proper value";
    }
}

const convertValue=radianToDegree("5");
console.log(convertValue);