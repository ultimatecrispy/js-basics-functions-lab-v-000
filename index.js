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
  return (finish-start)*264;
}
