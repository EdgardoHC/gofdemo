<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario con Observer</title>
</head>
<body>

<form id="myForm">
  <label for="username">Usuario:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="password">Contraseña:</label><br>
  <input type="password" id="password" name="password"><br><br>
  <button type="submit">Enviar</button>
</form>

<script>
class FormObservable {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class FormObserver {
  constructor() {}

  update(data) {
    console.log("El formulario ha sido enviado con los siguientes datos:", data);
  }
}

const formObservable = new FormObservable();
const formObserver = new FormObserver();

formObservable.addObserver(formObserver);

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  formObservable.notify(data);
});
</script>

</body>
</html>

