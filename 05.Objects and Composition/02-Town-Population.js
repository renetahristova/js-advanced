function townPopulation (townsArr) {
const towns = {};
for (let townsAsStr of townsArr) {
    let [name, population] = townsAsStr.split(' <-> ');
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

townPopulation();