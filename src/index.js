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
const renault = {
    id: '53267189387218',
    marca: 'renault',
    modello: 'un bughi bughi',
};
const peugeot = {
    id: '701225bari',
    marca: 'peugeot',
    modello: 'trespolino',
};
const BMW = {
    id: '3701120133',
    marca: 'BMW',
    modello: 'clio',
};
const Jeep = {
    id: '3885771333',
    marca: 'Jeep',
    modello: 'renegade',
};
const woltzvagen = {
    id: '556565465656',
    marca: 'Wdeipoveri',
    modello: 'Polo',
};
var macchine = [renault, peugeot, BMW, Jeep, woltzvagen];
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function stampaMacchine(macchine) {
    return __awaiter(this, void 0, void 0, function* () {
        macchine.forEach((element) => __awaiter(this, void 0, void 0, function* () {
            yield delay(5000);
            console.log(element.id);
            yield delay(5000);
            console.log(element.marca);
            yield delay(5000);
            console.log(element.modello);
        }));
    });
}
