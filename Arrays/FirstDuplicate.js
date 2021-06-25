//En este ejercicio se nos pide, con una función, devolver el primer número que se repita en un array de números
//si no exite ningun numero repitente, deberemos devolver el numero -1

function firstDuplicate(a) {
//Generamos un nuevo array en el cual vamos a ir registrando que numeros son los que estamos comparando
let nuevosNums = [];
//recorremos el array que el desafio nos brinda y que esta funcion tiene como parámetro (a)
for (let i = 0; i < a.length; i++) {
    /* Revisamos si el elemento del array que estamos recorriendo con el ciclo for (a[i]) se encuentra
    en el array que generamos al principio, al principio está vacío
    Si se encuentra una coincidencia entre algun número del array que creamos y algún elemento del
    array que estamos recorriendo, entonces la función retornará ese número (a[i]) */
    if(nuevosNums.includes(a[i]))return a[i]
    //Si no se encontraron coincidencias, entonces agregamos ese número a nuestro array usando el método push
    nuevosNums.push(a[i]);
}
//Si el array termina su recorrido sin encontrar coincidencias, devuelve el número -1
return -1
}

/* En algunos Lugares no aceptarán que uses arrays, mas bien quieren que uses variables del tipo Set, este 
tipo de dato es igual que el array, solo que en el caso de Set no se permiten elementos repetidos 
  En las variables de tipo set, el método "include" se llama "has" y el método push se denomina "add"*/
function firstDuplicate(a) {
  let nuevosNums = new Set();
  for (let i = 0; i < a.length; i++) {
      if (nuevosNums.has(a[i])) return a[i];
      nuevosNums.add(a[i]);
  }

  return -1;
}