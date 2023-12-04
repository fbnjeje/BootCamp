//Sirve para imprimir Un Objeto
var animales = {
    perro: 'canino',
    gato: 'felino',
    loro: 'ave'
}
JSON.stringify()


//--------------------Objetos Literales----------------------//

function objetosLiterales() {
    let concesionarioDeCoches = [
        { marca: "Chevrolet", color: "verde", ventanas: 4, modelo: 2015 },
        { marca: "Mustang", color: "azul", ventanas: 6, modelo: 2022 },
        { marca: "Renault", color: "gris", ventanas: 6, modelo: 2009 }
    ];

    // Escribe tu código aquí
    console.log("En este momento tenemos " + concesionarioDeCoches.length + " coches");


    concesionarioDeCoches.push({ marca: "Sedán", color: "rojo", ventanas: 5, modelo: 2018 });

    concesionarioDeCoches.push({ marca: "Toyota", color: "negro", ventanas: 6, modelo: 2021 });

    console.log("Acaba de llegar un nuevo cargamento con 2 vehículos, por lo tanto ahora hay  " +
        concesionarioDeCoches.length + " coches en el concesionario");

    console.log("Empleado: Hola, puedo ayudarle en algo señor/a");
    console.log("Cliente: Hola, estoy buscando un auto, podría mostrarme los que tiene disponibles, por favor");
    console.log("Empleado: Claro, pase por favor");

    for (let coche of concesionarioDeCoches) {
        console.log("Estás viendo el coche " + coche.marca)
    }

    let cocheElegido = concesionarioDeCoches[1];
    console.log("Este coche de la marca " + cocheElegido.marca + " ,tiene un hermoso color " + cocheElegido.color +
        " posee " + cocheElegido.ventanas + " ventanas, y es modelo " + cocheElegido.modelo);

    return concesionarioDeCoches;
}
