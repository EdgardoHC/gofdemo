var Singleton = function() {
    // Esto simplemente crea una nueva instancia cada vez que se llama a Singleton
    return {
        message: "¡Soy un Singleton!"
    };
};

// Uso del Singleton
var singletonInstance1 = Singleton();
var singletonInstance2 = Singleton();

console.log(singletonInstance1 === singletonInstance2); // false, se crean dos instancias diferentes del Singleton
