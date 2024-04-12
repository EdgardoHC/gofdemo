// Definimos una clase Observable que representa el objeto que será observado
//Observer es un patrón de diseño de software que se utiliza para establecer 
//una relación de dependencia uno a muchos entre objetos, de modo que cuando 
//un objeto cambia de estado, todos sus dependientes son notificados y actualizados
// automáticamente. En JavaScript, este patrón se puede implementar utilizando 
// tanto el patrón de diseño clásico como la API de Observables introducida en ES6.
//
//Aquí tienes un ejemplo de cómo implementar el patrón Observer en JavaScript utilizando la API de Observables:
class Observable {
  constructor() {
    this.observers = [];
  }

  // Método para añadir observadores
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Método para eliminar observadores
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Método para notificar a todos los observadores cuando hay un cambio
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

// Definimos una clase Observer que representa los objetos que observan al Observable
class Observer {
  constructor(name) {
    this.name = name;
  }

  // Método que se llama cuando el Observable notifica un cambio
  update(data) {
    console.log(`${this.name} ha sido notificado con el siguiente dato: ${data}`);
  }
}

// Creamos una instancia de Observable
const observable = new Observable();

// Creamos instancias de Observers
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// Añadimos los Observers al Observable
observable.addObserver(observer1);
observable.addObserver(observer2);

// Notificamos a los Observers un cambio en el Observable
observable.notify('¡Hola!');

// Salida esperada:
// Observer 1 ha sido notificado con el siguiente dato: ¡Hola!
// Observer 2 ha sido notificado con el siguiente dato: ¡Hola!
//En este ejemplo, Observable es el objeto que será observado, y Observer es el objeto que observa al Observable. Cuando llamamos al método notify en el Observable, todos los observadores registrados son notificados automáticamente y se actualizan con el nuevo dato.


