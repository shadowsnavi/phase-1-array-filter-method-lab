// Code your solution here
function findMatching (source, find){
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === find.toLowerCase()
      )
}

function fuzzyMatch(source, possiblyMatch){
    return source.filter(
        (possibleMatch) =>
          possibleMatch.toLowerCase().indexOf(possiblyMatch.toLowerCase()) === 0
      )
}

function matchName(source, foundName){
    return source.filter((record) => record.name === foundName);
}