const Queue = require('../DS').Queue;

/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

 ----*** 🍹 BAR CHECKPOINT 🍹 ***----

Felicitaciones por llegar a esta instancia! El checkpoint que realizarás a continuación
consistirá en resolver varios problemas que surgieron en un bar.
Tendrás que resolver cada uno de ellos, aplicando los conceptos aprendidos durante el módulo uno.
🍀 ¡Suerte! 🍀


1️⃣ ***** EJERCICIO 1 QUEUE ***** - guardarTragos() 1️⃣

Ha llegado un nuevo pedido de tragos. Es necesario recogerlos a todos y guardarlos dentro de la barra.
Además, se desea llevar un registro de la cantidad de cada trago que se ha vendido.Para esto tendrás que 
implementar la función guardarTragos, la cuál recibirá por parámetros una Queue con muchos 🍸 Tragos 🍸
que se tendrán que guardar en un objeto que nos servirá como contenedor.

📝 EJEMPLO 📝
(INPUT) ➡
["margarita", "daiquiri", "mojito", "piña colada", "negroni", "daiquiri"]

(OUTPUT) ➡
{
  margarita: {trago: "margarita", cantidad: 1},
  daiquiri: {trago: "daiquiri", cantidad: 2},
  mojito: {trago: "mojito", cantidad: 1},
  piña colada: {trago: "piña colada", cantidad: 1},
  negroni: {trago: "negroni", cantidad: 1}
}

REQUISITOS:
  🟢 Respetar el principio de FIFO que corresponde a las Queues a la hora de guardar los tragos.
  🟢 Retornar un objeto, que tendrá como key value los elementos que agregas y quitas de la Queue.
  🟢 Cada trago debe tener:
    - una propiedad "trago" que almacene el nombre del trago.
    - una propiedad "cantidad" que almacene la cantidad vendida del mismo.
  🟢 ¡SI O SI necesitás utilizar una Queue!

  👀 TIP: Chequear el archivo DS.js para ver la función constructora Queue, y ver sus métodos disponibles.
*/

function guardarTragos(tragosQueue) {
  // Tu código aquí:

  //let newQue = new Queue
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
    console.log(tragosQueue.size)
    console.log(primerTrago);
    //break;
    for (let i = 0; i < tragosQueue.length; i++) {
      if (primerTrago === tragosQueue[i]) {
        cont++;
        tragosQueue.dequeue();
        //i++
      }
    }

    objResultado[primerTrago] = { trago: primerTrago, cantidad: cont }
  
}

    cont = 1;
    primerTrago = tragosQueue.dequeue(); 
  }
/* let obj = {};
let objResultado = {};
let cont = 1;
let newQue = new Queue();
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

  objResultado[primerTrago] = { trago: primerTrago, canidad: cont };
  obj = objResultado;

  cont = 1;
  primerTrago = tragosQueue.shift();
} */

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = guardarTragos;
