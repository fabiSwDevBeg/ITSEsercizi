type Car = {
    id: string;
    marca: string;
    modello: string;
}

const renault: Car = {
    id: '53267189387218',
    marca: 'renault',
    modello: 'un bughi bughi',
}

const peugeot: Car = {
    id: '701225bari',
    marca: 'peugeot',
    modello: 'trespolino',
}

const BMW: Car = {
    id: '3701120133',
    marca: 'BMW',
    modello: 'clio',
}

const Jeep: Car = {
    id: '3885771333',
    marca: 'Jeep',
    modello: 'renegade',
}

const woltzvagen: Car = {
    id: '556565465656',
    marca: 'Wdeipoveri',
    modello: 'Polo',
}



var macchine: Car[] = [renault, peugeot, BMW, Jeep, woltzvagen];

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stampaMacchine(macchine: Car[]) {
    macchine.forEach(async element => {
        await delay(5000);
        console.log("id:"+ element.id);
        await delay(5000);
        console.log("marca:"+element.marca);
        await delay(5000);
        console.log("modello:"+element.modello);
    });
}

function avviaPopolamento () {
    console.log("avvio popolamento");
}
function finePopolamento () {
    console.log("fine popolamento");
}
