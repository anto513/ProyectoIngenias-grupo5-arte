//SUSCRIBIRSE INICIO


//PRODUCTOS
class Producto {
  constructor(nombre, precio, envio) {
    this.nombre = nombre.toUpperCase();
    this.precio = parseFloat(precio);
    this.envio = envio.toUpperCase();
    this.vendido = false;
  }
  mostrar() {
    alert("El producto:" + this.nombre + "cuesta $" + this.precio)

    envio() 
      this.precio = this.precio * 300
    }
    vender() {
      this.vendido = true;
    }
  }
  const producto1 = new Producto("aros marrones", "300");
  const producto2 = new Producto("aros violeta", "300");
  const producto3 = new Producto("aros turquesa", "300");
  const producto4 = new Producto("aros cuadrados", "300");

producto1.envio();
producto2.envio();
producto3.envio();
producto4.envio();
producto5.envio();
producto6.envio();
   

const productos = 
 { id: 1, producto: "Aros marrones", precio: 300 },
 { id: 2, producto: "Aros violeta ", precio: 300 },
 { id: 3, producto: "Aros" , precio: 300},
const buscarProducto = productos.find(producto => producto.id === 2);
console.log(buscarProducto);

//ENVIANOS TU CONSULTA

class consulta{
   constructor (email, consulta){
     this.email = email;
     this.consulta  = consulta;

    }

}
function guardarValores(e){
      e.preventDefaul();
      let emailUsuario = document.getElementById("emailUsuario")
      let consultaUsuario = document.getElementById("consultaUsuario")
       let nuevoUsuario = new Usuario (emailUsuario, consultaUsuario)

       console.log(nuevoUsuario)
}
document.getElementById("formulario").addEventListener("submit", guardarValores )

