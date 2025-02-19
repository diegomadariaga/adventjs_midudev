function balanceEnergy(energy) {
    //saca promedio
    let promedio = energy.reduce((a, b) => a + b) / energy.length;
    //saca el residuo
    let residuo = energy.reduce((a, b) => a + b) % energy.length;
    energy = energy.map((e) => Math.floor(promedio));

    return { balanced: energy, leftover: residuo };
}

console.log(balanceEnergy([1, 2, 3, 4]));