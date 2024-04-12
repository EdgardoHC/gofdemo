/*
 * 
El patrón Adapter es un patrón de diseño estructural que permite 
que interfaces incompatibles trabajen juntas. Permite que objetos 
con interfaces incompatibles colaboren entre sí mediante la conversión
de la interfaz de un objeto en otra interfaz que un cliente espera.

En JavaScript, el patrón Adapter se puede implementar de varias formas, 
pero una de las más comunes es a través de la creación de un adaptador que 
envuelve un objeto existente y proporciona una interfaz compatible con lo que
 el cliente espera.


Tienes razón, me disculpo por la confusión. El ejemplo que proporcioné anteriormente
 no ilustra correctamente el uso del patrón Adapter. Permíteme proporcionarte un ejemplo más claro:

Supongamos que tenemos una clase LegacyPrinter que tiene un método print(message)
 para imprimir un mensaje, pero necesitamos utilizarla en un nuevo sistema que espera
  una clase Printer con un método printMessage(text) para imprimir un texto. En este 
  caso, necesitaríamos un adaptador para convertir la interfaz de LegacyPrinter en algo
   compatible con Printer.
 */

// Clase con interfaz antigua
class LegacyPrinter {
    print(message) {
        console.log("Message printed: " + message);
    }
}

// Interfaz esperada por el cliente en el nuevo sistema
class Printer {
    printMessage(text) {
        console.log("Text printed: " + text);
    }
}

// Adaptador para convertir la interfaz de LegacyPrinter a Printer
class LegacyPrinterAdapter extends Printer {
    constructor(legacyPrinter) {
        super();
        this.legacyPrinter = legacyPrinter;
    }

    printMessage(text) {
        // Adaptar el método print de LegacyPrinter a la interfaz de Printer
        this.legacyPrinter.print(text);
    }
}

// Uso del adaptador
const legacyPrinter = new LegacyPrinter();
const printerAdapter = new LegacyPrinterAdapter(legacyPrinter);

// Ahora podemos usar el adaptador como si fuera un Printer
printerAdapter.printMessage("Hello, world!");
