function adjustLights(lights) {
  const green = "🟢";
  const red = "🔴";
  const resultA = [];
  const resultB = [];
  const length = lights.length;
  let numCambiosA = 0;
  let numCambiosB = 0;
  for (let i = 0; i < length; i++){
    if (i % 2 === 0) {
      resultA.push(green);
      resultB.push(red);
    } else {
      resultA.push(red);
      resultB.push(green);
    }
    if (lights[i] !== resultA[i]) {
      numCambiosA++;
    }
    if (lights[i] !== resultB[i]) {
      numCambiosB++;
    }
  }
  return numCambiosA < numCambiosB ? numCambiosA : numCambiosB;
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
