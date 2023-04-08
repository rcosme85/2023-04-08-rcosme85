/* Queue.prototype.enqueue = function (elemento) {
  return this.array.push(elemento);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.size = function () {
  return this.array.length;
};

let obj = {
  trago: null,
  cantidad: 0,
};
//let obj = {}

let objResultado = {};
let cont = 1;
//newQue.enqueue(tragosQueue) //"margarita"
let primerTrago = tragosQueue.dequeue();
//let i = 0;
while (tragosQueue.size()) {
  for (let i = 0; i < tragosQueue.length; i++) {
    if (primerTrago === tragosQueue[i]) {
      cont++;
      tragosQueue.dequeue();
      //i++
    }
  }
  obj.trago = primerTrago;
  obj.cantidad = cont;
  //objResultado.primerTrago.trago = primerTrago
  //objResultado.primerTrago.cantidad = cantidad;
  //objResultado[primerTrago] = obj
  objResultado[primerTrago] = obj;
  cont = 1;
  primerTrago = tragosQueue.dequeue();
}
//return objResultado
function Queue() {
  this.array = [];
}
const tragosQueue = new Queue();
tragosQueue.enqueue("margarita");
tragosQueue.enqueue("daiquiri");
tragosQueue.enqueue("daiquiri");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("mojito");
tragosQueue.enqueue("piña colada");
tragosQueue.enqueue("negroni");

console.log(objResultado);
 */
/* const tragos = ["Ron", "Vodka", "Whisky", "Tequila"];
const tiempos = [5, 3, 8, 10];
const tiempoLimite = 7;

let objTragos = {};
let arrTragos = [];
let arrTiempos = [];
for (let i = 0; i < tiempos.length; i++) {
  if (tiempos[i] < tiempoLimite) {
    arrTragos.push(tragos[i]);
    arrTiempos.push(tiempos[i]);
  }
}
let obj = {}
obj = arrTragos

objTragos.Tragos = {arrTragos};
objTragos.Tiempos = { arrTiempos };
//return objTragos;

console.log(objTragos) */
/* const tragos = {
  trago1: {
    nombre: "Margarita",
    cantidadVendida: 20,
  },
  trago2: {
    nombre: "Daiquiri",
    cantidadVendida: 15,
  },
  trago3: {
    nombre: "Mojito",
    cantidadVendida: 25,
  },
};
let objTrago = {};
let cantidadMayor = 0;
let nombreTrago = "";
for (const trago in tragos) {
  for (const cant in trago) {
    if (tragos[trago].cantidadVendida > cantidadMayor) {
      cantidadMayor = tragos[trago].cantidadVendida;
      nombreTrago = tragos[trago].nombre;
    }
  
  }
  
}
 let objResultado= {
    "nombre":nombreTrago,
    "cantidadVendida": cantidadMayor,
    "tragoMasVendido": true
  }

console.log(objResultado */
/* {
  margarita: {trago: "margarita", cantidad: 1},
  daiquiri: {trago: "daiquiri", cantidad: 2},
  mojito: {trago: "mojito", cantidad: 1},
  piña colada: {trago: "piña colada", cantidad: 1},
  negroni: {trago: "negroni", cantidad: 1}
} */
// function Queue() {
//   this.array = [];
// }

// Queue.prototype.enqueue = function (elemento) {
//   return this.array.push(elemento);
// };

// Queue.prototype.dequeue = function () {
//   return this.array.shift();
// };

// Queue.prototype.size = function () {
//   return this.array.length;
// };

// tragosQueue = [ "margarita", "daiquiri", "mojito", "piña colada", "negroni", "daiquiri"];

//******* **************/
/* let obj = {};
let objResultado = {};
let cont = 1;
let newQue = new Queue
//let primerTrago = tragosQueue.dequeue();
let primerTrago = tragosQueue.shift();
//console.log(primerTrago)
while (tragosQueue.length) {
  //console.log(tragosQueue.length);
  for (let i = 0; i < tragosQueue.length; i++) {
    
    if (primerTrago === tragosQueue[i]) {
      cont++;
      tragosQueue.shift();
      //i++
    }
  }
  
    objResultado[primerTrago] = { trago: primerTrago, canidad: cont }
  obj = objResultado

  cont = 1;
  primerTrago = tragosQueue.shift();
} */

//  console.log(obj);
//return objResultado;
/* let arreglo = [
  { nombre: "Whisky", precio: 312 },
  { nombre: "Ron", precio: 156 },
  { nombre: "Gin", precio: 215 },
  { nombre: "Vino tinto", precio: 100 },
];
let precio = 200
 */
//**************
/*   let cantidadMayor = 0;
let nombreTrago = "";
let arr = []
  let obj = {}
  for (let i = 0; i < arreglo.length; i++) {
    let primerPrecio = arreglo[i].precio;
    if (primerPrecio > precio) {
      nombreTrago = arreglo[i].nombre
      obj = {
        nombre: nombreTrago,
        precio: primerPrecio
      };
      arr.push(obj)
    }
    //console.log(precio)
   // return precio
  } */
/* let tragos = [{ nombre: "Franco", pedido: { nombre: "Fernet", precio: 260 } },
  { nombre: "juan", pedido: { nombre: "Gancia", precio: 220 } },
  { nombre: "Nico", pedido: { nombre: "Vodka", precio: 285 } },
  { nombre: "Fer", pedido: { nombre: "Martini", precio: 430 } },];
  ///ordenados de menor a mayor
let precioMayor = 0
let obj = {}
for (let i = 0; i < tragos.length; i++){
  //console.log(tragos[i].pedido.precio);
  //return tragos[i].pedido.precio;
  let min = i
  for (let j = i + 1; j < tragos.length; j++ )
  if (tragos[j].pedido.precio < tragos[min].pedido.precio) {
      min = j
    //return obj;
    }
  let aux = tragos[i];
  tragos[i] = tragos[min]
  tragos[min]= aux

}

  console.log(tragos) */
  function LinkedList() {
    this.head = null;
  }
const lista1 = new LinkedList();
const lista2 = new LinkedList();
lista1.add({ nombre: "Franco", trago: "Fernet" });
lista1.add({ nombre: "Martin", trago: "Gancia" });
lista1.add({ nombre: "Franco", trago: "Fernet" });
lista1.add({ nombre: "Mateo", trago: "Cerveza Corona" });
lista1.add({ nombre: "Nico", trago: "Negroni" });
lista1.add({ nombre: "Ale", trago: "Cerveza IPA" });

  let current = this.head;
while (current) {
  console.log(current)
  return current
    if ((current.nombre = nombre)) {
    }
  }