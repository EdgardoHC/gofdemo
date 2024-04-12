var Singleton = (function () {
    var instance;

    function createInstance() {
        console.log("Creando una nueva instancia del Singleton.");
        // Aquí puedes definir la funcionalidad de tu Singleton
        return {
            message: "¡Soy un Singleton!"
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Uso del Singleton
var singletonInstance1 = Singleton.getInstance();
var singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // true, ambas variables apuntan a la misma instancia del Singleton
console.log(singletonInstance1.message); // "¡Soy un Singleton!"
console.log(singletonInstance2.message); // "¡Soy un Singleton!"
