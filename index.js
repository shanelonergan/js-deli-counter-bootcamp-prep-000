var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  var placeInLine = katzDeliLine.length + 1;
  katzDeliLine.push(`${name}`);
  return (`Welcome, ${name}. You are number ${placeInLine} in line.`);
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    return (`Currently serving ${katzDeliLine.shift}.`);
  }
}
