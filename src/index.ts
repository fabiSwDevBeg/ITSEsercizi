type Car = {    //definisco un array di tipo car
    id: number;
    marca: string;
    modello: string;
}

let carDb: Car[] = [];   // creo un array di tipo car

carDb.push({   //popolo l'array
    id: 1,
    marca: "Opel",
    modello: "Tigra",
})


//passo alla funzione l'array


function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function goDelay(cars: Car[]) {
    let i = 0; //funzione asincrona
    for (i = 0; i < cars.length; i++) {    //per la lunghezza dell'array 
        console.log("id " + cars[i].id);    //stampa ogni elemento dell'array
        console.log("marca " + cars[i].marca);
        console.log("modello " + cars[i].modello);
        await delay(5000);
    }
    console.log("End");
}


console.log(carDb);
console.log("Start");
goDelay(carDb);


type Rettangolo = {
    base: number;
    altezza: number;
    area: number;
}

type Triangolo = {
    base: number;
    altezza: number;
    latoObliquo: number;
    area: number;
}

type Cerchio = {
    raggio: number;
    area: number;
}

function areaRettangolo(ogg: Rettangolo) {
    ogg.area = ogg.base * ogg.altezza;
}

function areaTriangolo(ogg: Triangolo) {
    ogg.area = ogg.base * ogg.altezza;
}
function areaCerchio(ogg: Cerchio) {
    ogg.area = ogg.raggio ^ 2 * Math.PI;
}


console.log("Start");
console.log("Cerchio raggio 10, Rettangolo base 12 altezza 20, Triangolo base 10 altezza 15");



function calcolaArea(figura: string, dato1: number, dato2: number) {
    var area = 0;
    switch (figura) {
        case 'Rettangolo':
            area = dato1 * dato2;
            break;
        case 'Triangolo':
            area = dato1 * dato2;
            break;
        case 'Cerchio':
            area = dato1 ^ 2 * Math.PI;
            break;

    }
    console.log(area);
}






