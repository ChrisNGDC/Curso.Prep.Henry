// No cambies los nombres de las funciones.

function deObjetoAmatriz (objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  // Ejemplo:
  /* objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]] */
  // Escribe tu código aquí
  var resValues = Object.values(objeto)
  var resKeys = Object.keys(objeto)
  var resAux = []
  var res = []
  for (var i = 0; i < resKeys.length; i++) {
    resAux.push(resKeys[i])
    resAux.push(resValues[i])
    res.push(resAux)
    resAux = []
  }
  return res
}

function numberOfCharacters (string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  // en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Escribe tu código aquí
  var dict = {}
  for (var i = 0; i < string.length; i++) {
    if (dict[string[i]]) {
      dict[string[i]] = dict[string[i]] + 1
    } else {
      dict[string[i]] = 1
    }
  }
  return dict
}

function capToFront (s) {
  // Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  // al principio de la palabra.
  // Ejemplo: soyHENRY -> HENRYsoy
  // Escribe tu código aquí
  var res = ''
  var resAux = ''
  for (var i = 0; i < s.length; i++) {
    if (s[i] < 'a') {
      res += s[i]
    } else {
      resAux += s[i]
    }
  }
  return (res + resAux)
}

function asAmirror (str) {
  // La función recibe una frase.
  // Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  // pero con cada una de sus palabras invertidas, como si fuera un espejo.
  // Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  // Escribe tu código aquí
  var res = str.split(' ')
  var alReves = ''
  var resAlReves = ''
  var largo = 0
  for (var i = 0; i < res.length; i++) {
    for (var j = res[i].length - 1; j >= 0; j--) {
      alReves += res[i][j]
    }
    resAlReves += alReves + ' '
    alReves = ''
  }
  largo = resAlReves.length - 1
  resAlReves = resAlReves.slice(0, largo)
  return resAlReves
}

function capicua (numero) {
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  // izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  // Escribe tu código aquí
  var num = numero.toString()
  for (var i = 0; i < Math.ceil(num.length / 2) - 1; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return 'No es capicua'
    }
  }
  return 'Es capicua'
}

function deleteAbc (cadena) {
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  // y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  // Escribe tu código aquí
  var eliminar = ['a', 'b', 'c']
  var res = ''
  for (var i = 0; i < cadena.length; i++) {
    if (!eliminar.includes(cadena[i])) {
      res += cadena[i]
    }
  }
  return res
}

function sortArray (arr) {
  // La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  // Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  // Escribe tu código aquí
  var aux
  var desordenada = true
  while (desordenada) {
    desordenada = false
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i].length > arr[i + 1].length) {
        aux = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = aux
        desordenada = true
      }
    }
  }
  return arr
}

function buscoInterseccion (arreglo1, arreglo2) {
  // Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  // retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud
  // Escribe tu código aquí
  var res = []
  for (var i = 0; i < arreglo1.length; i++) {
    if (arreglo2.includes(arreglo1[i])) {
      res.push(arreglo1[i])
    }
  }
  return res
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion
}
