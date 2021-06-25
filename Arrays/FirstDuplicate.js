//en este ejercicio se nos pide, con una función, devolver un número

function firstDuplicate(a) {
//generamos un nuevo array 
let nuevosNums = [];
for (let i = 0; i < a.length; i++) {
    if(nuevosNums.includes(a[i]))return a[i]
    nuevosNums.push(a[i]);
}
return -1
}


function firstDuplicate(a) {
  let nuevosNums = new Set();
  for (let i = 0; i < a.length; i++) {
      if (nuevosNums.has(a[i])) return a[i];
      nuevosNums.add(a[i]);
  }

  return -1;
}