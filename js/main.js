import { usuarios } from './arrays.js';

function buscar() {
    return new Promise((resolve, reject) => {
        if (usuarios == 0) {
            reject(new Error('❗ Api no encontrada'))//Cuando la api no esta conectada nos da un error
        }
        //Le damos una demora de 3s (va en milisegundos), y despues mostramos el arrays, si la api esta conectada
        setTimeout(() => {
            resolve(usuarios)
        }, 3000);
    })
}

console.log("🔎 Buscando...");
buscar()//va a tener un camino positivo (then) y uno que captura el error (catch)
    .then((response) => {
        console.clear();
        console.log("✅ Arrays encontrado: ", response);
    })
    .catch((Error) => {
        console.log("❌ Error en: ", Error);
    });