// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

class Vehiculo{
    
    constructor(color,marca,ruedas){
        this.marca = marca;
        this.color = color;
        this.ruedas = ruedas;
    }
    
    moverse(){
        console.log(`este vehiculo es de color ${this.color} y se desplaza en ${this.ruedas} ruedas`);
    }
}


class Motocicleta extends Vehiculo{
    constructor(color,marca,ruedas) {
        super(color,marca,ruedas);
    }
}

class Carro extends Vehiculo{
    constructor(color,marca,ruedas){
    super(color,marca,ruedas);
    }
    
    moverse(){
        console.log(`este Carro es de color ${this.color} y se desplaza en ${this.ruedas} ruedas`);
    }
}

function principal(){
    let miMotocicleta = new Motocicleta('Rojo', 'Suzuki', 2);
    let cocheDeDylan = new Carro('Negro', 'Toyota', 4);

    // Imprime el método moverse del objeto miMotocicleta
    return cocheDeDylan.moverse();
    
    // Retorna el método moverse del objeto cocheDeDylan
}

principal();
