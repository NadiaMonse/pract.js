alert()

const productos=[
    {id: 1,nombre:"camiseta",precio:2500},
    {id: 2,nombre:"pantalon",precio:4500},
    {id: 3,nombre:"zapatillas",precio:8000}, 
];

let carrito= JSON.parse(localStorage.getItem("carrito")


function mostrarProductos(){
    productos.forEach

function agregarAlCarrito(id){
    const producto = productos.find(p=>p.id===id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function monstrarCarrito(){
    listaCarrito.innerHTML="";
    carrito.forEach(item=>{
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
    });
}



mostrarProductos();
mostrarCarrito();