function scuberGreetingForFeet(rideLength){
  // Write your code here!
  
  let result;
  if (rideLength <= 400) {
    return result = 'This one is on me!';
  }
  else if (rideLength > 400 && rideLength < 2000) {
    return result = 'That will be twenty bucks.';
  }
  else if (rideLength > 2000 && rideLength <= 2500) {
    return result = 'I will gladly take your thirty bucks.';
  }
  else if (rideLength > 2500) {
    return result = 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!

  let result;
if (city == 'NYC') {
  return result = 'Ok, sounds good.';
}
  else {
    return result = 'No go.';
  }


}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!

  let result;
if (tipAmount == 'generous') {
  return result = 'Thank you so much.';
}
else if (tipAmount == 'not as generous') {
  return result = 'Thank you.';

}
else {
  return result = 'Bye.'
}
}