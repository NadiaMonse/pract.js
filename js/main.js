const nombres = ["ana", "sole", "nadia",];

function saludar(nombre){
    alert("hola,"+ nombre+"!");
}
let nombreIngresado = prompt( "ingresa tu nombre");

if(nombres.includes(nombreIngresado)){
    saludar(nombreIngresado);
}else{
    alert("nombre no reconocido");
}