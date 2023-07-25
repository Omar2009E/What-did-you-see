function observeSunsetColor(sunsetColor) {
    var observedColor = sunsetColor;
    return observedColor;
  }
  
  
  console.log(observeSunsetColor("red and green"));

  function observeAnts(numberOfAnts){
    var observedAnts = numberOfAnts;
    return observedAnts
  }
  console.log(observeAnts('more than 1000!'));


  function observeAnimals(animals){
    var animals = `I saw ${theAnimals} at the street`;
    return animals;
  }
  const theAnimals=['cats, dogs, pigeons, crows, rats']
  console.log(observeAnimals(theAnimals));

  function observePlants(plants){
    var plants = `I saw ${thePlants} at the street during the walking`;
    return plants;
  }
  const thePlants=['Roses, Carnations, Chrysanthemum, PionsAlstroemeria']
  console.log(observePlants(thePlants));

  //secret task
const oxygen=true;

if(oxygen){
  console.log('take deep breath')
}
else{
  console.log('follow nature')
}





function statement(oxygen){
if(oxygen){
  console.log('quality of oxygen is good, take deep breath')}
  else{
    console.log('follow nature')
  }
return oxygen;
 }
 console.log(statement(true))