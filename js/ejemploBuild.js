/* 
Builder es un patrón de diseño de software que se utiliza para construir objetos complejos paso a paso. 
Permite crear diferentes tipos y representaciones de un objeto utilizando el mismo proceso de construcción.

En JavaScript, se puede implementar el patrón Builder utilizando funciones y objetos para definir 
los pasos de construcción del objeto y luego ensamblar el objeto final. 
Aquí tienes un ejemplo de cómo podrías implementar un Builder en JavaScript:
 */


// Objeto que vamos a construir
class Producto {
  constructor() {
    this.nombre = null;
    this.precio = null;
    this.descripcion = null;
  }
}

// Builder para el objeto Producto
class ProductoBuilder {
  constructor() {
    this.producto = new Producto();
  }

  setNombre(nombre) {
    this.producto.nombre = nombre;
    return this;
  }

  setPrecio(precio) {
    this.producto.precio = precio;
    return this;
  }

  setDescripcion(descripcion) {
    this.producto.descripcion = descripcion;
    return this;
  }

  build() {
    return this.producto;
  }
}

// Uso del builder para construir un producto
const miProducto = new ProductoBuilder()
  .setNombre('Camiseta')
  .setPrecio(20)
  .setDescripcion('Una camiseta de algodón')
  .build();

console.log(miProducto);
