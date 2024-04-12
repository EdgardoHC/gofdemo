  var SingletonForm = (function () {
        var instance;

        function createInstance() {
            // Aquí puedes definir la funcionalidad de tu formulario
            return {
                submit: function (event) {
                    event.preventDefault();
                    var name = document.getElementById('name').value;
                    var email = document.getElementById('email').value;
                    console.log("Formulario enviado con nombre: " + name + " y email: " + email);
                }
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

    // Uso del formulario Singleton
    var singletonForm = SingletonForm.getInstance();
    document.getElementById('singleton-form').addEventListener('submit', singletonForm.submit);
    
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
console.log(Singleton());