// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  if (street >=42) {
    return street-42;
  } else {
    return 42-street;
  }
}

function calculateVertical(start, finish) {
  return (finish-start)*4;
}

function distanceFromHqInFeet(blocks) {
  return blocks * 6;
}
