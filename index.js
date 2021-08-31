// Code your solution in this file!

function distanceFromHqInBlocks(num){
    const start = 42
    if(num > start){
        return num - start
    }else{
        return start - num
    } 
}

distanceFromHqInBlocks()


function distanceFromHqInFeet(num){
    const start = 42
    if(num > start){
        return (num - start)*264
    }else{
        return (start - num)*264
    } 
}

function distanceTravelledInFeet(num1,num2){
    if(num1 > num2){
        return (num1 - num2)*264
    }else{
        return (num2 - num1)*264
    }
}


function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start,destination)

    if( distance < 400) {
        return 0
    }

    else if(distance >= 400 &&  distance <=2000){
        return (distance - 400) * 0.02
    }
    else if(distance > 2000 && distance <=2500){
        return 25
    }
    else if(distance > 2500){
        return "cannot travel that far"
    }
}