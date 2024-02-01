// Assuming HQ is on 42nd street

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
  }
  
  function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return ((distance - 400) * 0.02); // 2 cents per foot, first 400 feet are free
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat rate for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // No rides over 2500 feet
    }
  }
