

function isJavaScriftFile(fileName){

    let lengthOfFile=fileName.length;
    // console.log(lengthOfFile);

    if(fileName[lengthOfFile-2]=='j' && fileName[lengthOfFile-1]=='s')
    {
        return true;
    }
    else{
        return false;
    }
}

const fileName="project.js"
let checkingFile=isJavaScriftFile(fileName);
console.log(checkingFile);