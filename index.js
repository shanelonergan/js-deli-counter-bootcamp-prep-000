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
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return 'The line is currently empty.';
  } else {
    var string = ('The line is currently:');
    for (var i = 0; i < array.length; i++) {
      var place = i + 1;
      var name = katzDeliLine[i];
      var line.concat (`${place}. ${name},`);
    }
    return (`${string} + ${line}`);
  }
}
