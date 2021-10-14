const hqLocation = 42
let distanceFromHqInBlocks = (currentBlock) => {
    if(currentBlock < hqLocation)
       return hqLocation - currentBlock
     else if(currentBlock > hqLocation)
        return currentBlock - hqLocation
}

console.log(distanceFromHqInBlocks(43))

const blockInFeet = 264
let distanceFromHqInFeet = (currentBlock) => {
    return distanceFromHqInBlocks(currentBlock) * blockInFeet
}

console.log(distanceFromHqInFeet(43))

let distanceTravelledInFeet = (start, destination) => {
    if(start < destination)
       return (destination - start) * blockInFeet
     else if(start > destination)
        return (start - destination) * blockInFeet
}

console.log(distanceTravelledInFeet(50, 60))

let calculatesFarePrice = (start, destination) => {
    if(distanceTravelledInFeet(start, destination) >= 2500)
        return 'cannot travel that far'
    else if(distanceTravelledInFeet(start, destination) < 400)
        return 0
        else if(distanceTravelledInFeet(start, destination) <= 2000)
            return (distanceTravelledInFeet(start, destination) - 400) * 0.02
            else if(distanceTravelledInFeet(start, destination) > 2000)
                return 25
}

console.log(calculatesFarePrice(34, 24))