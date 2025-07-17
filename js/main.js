const nombres = ["ana", "sole", "nadia",];
console.log(nombres);

function saludar(nombre){
    alert("hola," + nombre +"!");
}
for(let i = 0;i<nombres.length;i++){
    console.log(`Hola ${nombres[i]}`);
}

let nombreIngresado = prompt( "ingresa tu nombre");

if(nombres.includes(nombreIngresado)){
    saludar(nombreIngresado);
}else{
    alert("nombre no reconocido");
}
