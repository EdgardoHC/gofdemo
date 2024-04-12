/* 
En JavaScript, un "composite" se refiere a un patrón de diseño que permite tratar a
 un solo objeto o grupo de objetos de manera uniforme. En términos simples, el patrón
  de diseño de composite permite a los clientes tratar tanto a los objetos individuales 
  como a las composiciones de objetos de la misma manera.

Por ejemplo, considera un árbol genealógico donde cada nodo puede ser una persona o 
una familia. Puedes implementar este patrón en JavaScript de la siguiente manera:
 */


// Definición de la interfaz Component
class Component {
  constructor(name) {
    this.name = name;
  }
  display() {}
}

// Definición de la clase Leaf que representa a una persona
class Leaf extends Component {
  constructor(name) {
    super(name);
  }
  display() {
    console.log(`Persona: ${this.name}`);
  }
}

// Definición de la clase Composite que representa una familia
class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }
  add(child) {
    this.children.push(child);
  }
  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
  display() {
    console.log(`Familia: ${this.name}`);
    this.children.forEach(child => child.display());
  }
}

// Creación de instancias de Leaf (personas)
const hijo1 = new Leaf("Hijo 1");
const hijo2 = new Leaf("Hijo 2");

// Creación de instancia de Composite (familia)
const familia = new Composite("Familia Smith");
familia.add(hijo1);
familia.add(hijo2);

// Mostrar la familia
familia.display();

//En este ejemplo, Leaf representa una persona individual y 
//Composite representa una familia que puede contener tanto personas 
//individuales como otras familias. Ambos implementan la interfaz Component, 
//        lo que permite tratar a ambas entidades de manera uniforme.