'use strict';

// ### Subway Lines
//
// We need to represent a modern subway system in code. Each subway line has a name and a list of stops. Given any subway line, we should be able to return a list of what other subway lines you can transfer to given that they have one or more of the same stops.
//
// ### Example
//
// **Name: "N"**
// > "5 Av / 59 St", "57 St - 7 Av", "49 St", "Times Sq - 42 St", "34 St - Herald Sq"
//
// **Name: "E"**
// > "50 St", "7 Av", "5 Av / 53 St", "51 St"
//
// **Name: "D"**
// > "59 St - Columbus Circle", "7 Av", "47 - 50 Sts Rockefeller Ctr", "34 St - Herald Sq"
//
// **Name: "1"**:
// > "59 St - Columbus Circle", "50 St", "Times Sq - 42 St", "34 St Penn Station"
//
// _If you were to get the connections for Line 1, E, D and N should be returned. If you were to get the connections for Line E, D and 1 should be returned._

const stations = {
  'N': {
    "5 Av / 59 St": '',
    "57 St - 7 Av": '',
    "49 St": '',
    "Times Sq - 42 St": '',
    "34 St - Herald Sq": ''
  },
  'E': {
    "50 St": '',
    "7 Av": '',
    "5 Av / 53 St": '',
    "51 St": ''
  },
  'D': {
    "59 St - Columbus Circle": '',
    "7 Av": '',
    "47 - 50 Sts Rockefeller Ctr": '',
    "34 St - Herald Sq": ''
  },
  '1': {
    "59 St - Columbus Circle": '',
    "50 St": '',
    "Times Sq - 42 St": '',
    "34 St Penn Station": ''
  }
}

function getConnections(stationName) {
  const connections = [];
  const subject = stations[stationName];

  for (const station in stations) {
    if (station === stationName) {
      continue;
    }

    for (const stop in stations[station]) {
      if (subject.hasOwnProperty(stop)) {
        if (connections.indexOf(station) < 0) {
          connections.push(station);
          break;
        }
      }
    }
  }

  return connections;
}

console.log(getConnections('N'));
console.log(getConnections('E'));
console.log(getConnections('D'));
console.log(getConnections('1'));
