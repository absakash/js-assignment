


function isBestFriend(object1,object2){

    let first=(object1.name);
    let firstFriend=(object1.friend);
    let firstUpper=first.toUpperCase();
    let firstFriendUpper=firstFriend.toUpperCase();


    let second=(object2.name);
    let secondFriend=(object2.friend);
    let secondUpper=second.toUpperCase();
    let secondFriendUpper=secondFriend.toUpperCase();
    if(firstUpper===secondFriendUpper && firstFriendUpper===secondUpper){
        return true;
    }
    else{
        return false;
    }
    
    console.log(firstUpper);


}

let object1={
    name:"Top",
    friend:"Rock"
}

let object2={
    name:"Rock",
    friend:"Top"
}

let checkFriend=isBestFriend(object1,object2);
console.log(checkFriend);