/* 

En JavaScript, un prototipo es un mecanismo mediante el cual los objetos pueden heredar propiedades y
 métodos de otros objetos. Todos los objetos en JavaScript tienen un prototipo, que es otra forma 
 de decir que tienen una "plantilla" 
de la cual se derivan. Esto significa que puedes crear un objeto y luego definir un prototipo para él, 
y el objeto heredará automáticamente las propiedades y métodos del prototipo.
 */

// Definir un objeto
var persona = {
  nombre: "Juan",
  edad: 30,
  saludar: function() {
    console.log("Hola, soy " + this.nombre);
  }
};

// Definir un prototipo para el objeto persona
var personaProto = {
  hablar: function() {
    console.log("Estoy hablando");
  }
};

// Establecer el prototipo del objeto persona
Object.setPrototypeOf(persona, personaProto);

// Ahora el objeto persona tiene acceso a los métodos del prototipo
persona.saludar(); // Imprime: "Hola, soy Juan"
persona.hablar(); // Imprime: "Estoy hablando"


