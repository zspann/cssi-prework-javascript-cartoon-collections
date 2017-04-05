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
    call = call.toUpperCase() + "!"
    planeteerCalls[index] = call
  })
  return planeteerCalls
}

//
function longPlaneteerCalls(words) {
  var i = 0
// just added the result variable set to false
  var result = false
  while (i < words.length){
    if (words[i].length > 4){
      result = true;
    }
  // deleted the else condition. So the if statement above is only activated if the word is longer than 4 characters, and in all cases, the counter below will be increased by one.
    i += 1
  }
//moved the return outside of the while loop
  return result
}

function findTheCheese(foods) {
  var i = 0
  var result = "no cheese!"
  var cheeses = ["cheddar", "gouda", "camembert"]
  while (i < foods.length){
    if (cheeses.includes(foods[i])){
      result = foods[i]
    }
    i += 1
  }
  return result
}

//this code would find the *last* cheese instead of the first one - modified above ^^
//   var cheeses = ["cheddar", "gouda", "camembert"]
//   foundCheese = "no cheese!"
//   foods.forEach(function(food){
//     if(cheeses.includes(food)){
//       foundCheese = food;
//     }
//   })
//   return foundCheese
// }
