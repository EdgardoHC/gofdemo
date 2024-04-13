<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Formulario Singleton</title>

</head>
<body>
<?php
$numero = 1;
$numero2="2";
?>
    <h1>Probando patrones de diseño GoF</h1>
<form id="singleton-form">
    <label for="name">Nombre:</label>
    <input type="text" id="name" name="name"><br><br>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>
    
    <input type="submit" value="Enviar">
</form>
    <!--<script src="js/ejemploerroneosingleton.js" type="text/javascript"></script>-->
    <!--<script src="js/ejemplosingletonsencillo.js" type="text/javascript"></script>-->
<script src="js/pruebasingleton.js" type="text/javascript"></script>
<!--<script src="js/AbstractFactory.js" type="text/javascript"></script>-->
<!--<script src="js/ejemploFactoryMethod.js" type="text/javascript"></script>-->
    <!--<script src="js/PatronEstructura/Adapter.js" type="text/javascript"></script>-->
</body>
</html>
