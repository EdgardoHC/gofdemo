/*
 * Abstract Factory es un patrón de diseño de software que proporciona una 
 * interfaz para crear familias de objetos relacionados o dependientes sin 
 * especificar sus clases concretas. Básicamente, permite crear objetos 
 * relacionados sin tener que conocer las clases específicas de esos objetos. 
 * Esto promueve la independencia entre las clases de productos y las clases 
 * que los utilizan, lo que facilita la creación de sistemas más flexibles y 
 * mantenibles.
 */


// Definimos una interfaz Abstract Factory para crear productos relacionados
class AbstractFactory {
  createProductA() {}
  createProductB() {}
}

// Creamos una fábrica concreta que implementa la interfaz Abstract Factory
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA1();
  }

  createProductB() {
    return new ConcreteProductB1();
  }
}

// Otra fábrica concreta que implementa la interfaz Abstract Factory
class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ConcreteProductA2();
  }

  createProductB() {
    return new ConcreteProductB2();
  }
}

// Definimos productos concretos A y B
class ConcreteProductA1 {
  methodA() {
    return "Product A1 method";
  }
}

class ConcreteProductA2 {
  methodA() {
    return "Product A2 method";
  }
}

class ConcreteProductB1 {
  methodB() {
    return "Product B1 method";
  }
}

class ConcreteProductB2 {
  methodB() {
    return "Product B2 method";
  }
}

// Uso del patrón Abstract Factory
const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
console.log(productA1.methodA()); // Output: "Product A1 method"

const factory2 = new ConcreteFactory2();
const productB2 = factory2.createProductB();
console.log(productB2.methodB()); // Output: "Product B2 method"
