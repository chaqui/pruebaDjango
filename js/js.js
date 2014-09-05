window.onload = function() {
    //creamos una referencia al contexto de representación 2d
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');
     
    // Rellenamos el elemento canvas de un fondo negro.
    ctx.fillStyle = "black";
    ctx.fillRect (0, 0, canvas.width, canvas.height);
     
    //Preparamos e insertamos el texto 'hola mundo!'.
    var texto = "Hola mundo!";
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText (texto, 10,30);
};
