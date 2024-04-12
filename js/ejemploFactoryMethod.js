// Definimos la clase base Vehículo
class Vehiculo {
  constructor(modelo) {
    this.modelo = modelo;
  }

  mostrarModelo() {
    console.log(`Modelo: ${this.modelo}`);
  }
}

// Definimos subclases de Vehículo
class Coche extends Vehiculo {
  constructor(modelo) {
    super(modelo);
  }

  arrancar() {
    console.log("El coche está arrancando...");
  }
}

class Moto extends Vehiculo {
  constructor(modelo) {
    super(modelo);
  }

  arrancar() {
    console.log("La moto está arrancando...");
  }
}

// Definimos el Factory Method
function fabricarVehiculo(tipo, modelo) {
  switch (tipo) {
    case "coche":
      return new Coche(modelo);
    case "moto":
      return new Moto(modelo);
    default:
      throw new Error("Tipo de vehículo no válido");
  }
}

// Uso del Factory Method
const miCoche = fabricarVehiculo("coche", "Toyota");
miCoche.mostrarModelo(); // Output: Modelo: Toyota
miCoche.arrancar(); // Output: El coche está arrancando...

const miMoto = fabricarVehiculo("moto", "Honda");
miMoto.mostrarModelo(); // Output: Modelo: Honda
miMoto.arrancar(); // Output: La moto está arrancando...
