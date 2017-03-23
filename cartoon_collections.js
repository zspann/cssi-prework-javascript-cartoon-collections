function dwarfRollCall(dwarves) {
  dwarves.forEach(function(name, index){
    var number = index + 1;
    dwarves[index] = (number + ". " + name + " ");
  })
  dwarves = dwarves.join("")
  return dwarves
}

function summonCaptainPlanet(planeteerCalls){
	planeteerCalls.forEach(function(call, index){
    call = call + "!"
    call = call.toUpperCase();
    planeteerCalls[index] = call
  })
  return planeteerCalls
}

// I think the test for this is broken - test accepts it but the console it doesn't return the correct results.
function longPlaneteerCalls(words) {
  var i = 0
  while (i < words.length){
    if (words[i].length <= 4){
      return false;
      i = i + 1
    }
    else {
      return true
    }
  }
}

function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert"]
  foundCheese = "no cheese!"
  foods.forEach(function(food){
    if(cheeses.includes(food)){
      foundCheese = food;
    }
  })
  return foundCheese
}
