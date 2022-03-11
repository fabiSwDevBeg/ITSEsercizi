"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let carDb = []; // creo un array di tipo car
carDb.push({
    id: 1,
    marca: "Opel",
    modello: "Tigra",
});
console.log(carDb);
console.log("Start");
let i = 0;
goDelay(carDb); //passo alla funzione l'array
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function goDelay(cars) {
    return __awaiter(this, void 0, void 0, function* () {
        for (i = 0; i < cars.length; i++) { //per la lunghezza dell'array 
            console.log("id " + cars[i].id); //stampa ogni elemento dell'array
            console.log("marca " + cars[i].marca);
            console.log("modello " + cars[i].modello);
            yield delay(5000);
        }
        console.log("End");
    });
}
