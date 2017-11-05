// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >=42) {
    return street-42;
  } else {
    return 42-street;
  }
}

function distanceFromHqInFeet(street) {
  blocks = distanceFromHqInBlocks(street);
  return blocks * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (finish > start) {
    return (finish - start) * 264;
  } else {
    return (start - finish) * 264;
  }
}

function calculatesFarePrice(start, finish) {
  distance = distanceTravelledInFeet(start, finish);
  switch (distance) {
    case (264):
      return distance;
      break;
    // default:
    //   return "try again";
  }
}
