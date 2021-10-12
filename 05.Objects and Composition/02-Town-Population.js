function townPopulation(townsArr) {
  const towns = {};
  for (let townsAsStr of townsArr) {
    let [name, population] = townsAsStr.split(" <-> ");
    population = Number(population);

    if (towns[name] != undefined) {
      population += towns[name];
    }
    towns[name] = population;
  }
  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
//You have been tasked to create a registry for different towns and their population.
//The input comes as array of strings. Each element will contain data for a town and its population i
//If you receive the same town twice, you should add the given population to the current one.
