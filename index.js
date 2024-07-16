// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    let distanceInBlocks;
    distanceInBlocks = Math.abs(blockNumber - 42)
    return distanceInBlocks;
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264
}

function distanceTravelledInFeet(start, destination) {
    let distanceInFeet;
    distanceInFeet = Math.abs((destination  - start) * 264)
    return distanceInFeet
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if (distanceTravelled < 400) {
        return 0
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return Math.abs((distanceTravelled - 400) * 0.02)
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
}