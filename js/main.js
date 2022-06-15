const orden = [];
const Indumentaria = [
    {
        id:1,
        nombre:"Remera Tofy", 
        precio:7000
    },
    {
        id:2,
        nombre:"Buzo Galax",
        precio:12600
    },
    {
        id:3,
        nombre:"Jean Polo",
        precio:12000
    },
    {
        id:4,
        nombre:"Zapatillas Nike",
        precio:28000
    },
    {
        id:5,
        nombre:"Campera Volcom",
        precio:16200
    },
];

const elementosDelDOM = (function(){
    const divDeRopa = document.getElementById("ropa");
    const divDeOrdenes = document.getElementById("ordenes_agregadas");
    const totalDePrendas = document.getElementById("precio_total");
    const divDeIndumentaria = document.getElementById("Indumentaria");
    return{
        divDeRopa,
        divDeOrdenes,
        totalDePrendas,
        divDeIndumentaria
    };
})();
const funcionesDePantalla = (function (){
    function transformarAEtiquetas = (objeto) =>
        `
    <div className="catalogo">
        <div className="cabeza_de_catalogo">
            <h3>${objeto.nombre}</h3>
        </div>
        <div className="info_carta">${objeto.precio}</div>
        <button id="agregar_a_orden">Agregar</button>
    </div>`;

        const mostrarEnPantalla = (div) => (string) => {
            div.innerHTML = "";
            div.innerHTML = string;
        };
        const reducirEtiquetas = (acc, item) => `${acc+item}`;
        const modificarArray = (fn) => (div) => (array) => {
            if (array.length === 0) return;
            const stringDeEtiquetas = array.map(fn).reduce(reducirEtiquetas);
            mostrarEnPantalla(div)(stringDeEtiquetas);
        };

        const transformarAEtiquetasDeOrden = (objeto) => `<div className="catalogo">
<h3>${objeto.nombre} ${objeto.precio}</h3>
</div>`;

        const modificarArrayDeIndumentaria = modificarArray(transformarAEtiquetas);
        const modificarArrayDeOrdenes = modificarArray(transformarAEtiquetasDeOrden);

        return {
            modificarArrayDeOrdenes,
            modificarArrayDeIndumentaria,
            mostrarEnPantalla,
        };
    })();


const {
    divDeRopa,
    divDeOrdenes,
    totalDePrendas,
    propinaSugerida,
    divDeIndumentaria,
} = elementosDelDOM;

funcionesDePantalla.modificarArrayDeIndumentaria(divDeRopa)(Indumentaria);









//let nombre = "Agus"
//let apellido = "Liñarez"
//let edad = 21
//let numero1 = 2000
//let numero2 = 1961
//let resultado1 = numero1 + numero2
//const preposiciones = ['A', 'ANTE', 'BAJO', 'CABE', 'CON', 'CONTRA', 'DE', 'DESDE', 'EN', 'ENTRE']
//const curso = "JavaScript"

//PROMPT

//debugger

//let nombreCompleto = prompt("Ingresa tu nombre:")

//alert("Nombre ingresado: " + nombreCompleto)

//let resultado2 = confirm("¿Está seguro de instalar Windows 95?")

//OBJETO CONSOLE
//console.log("Nombre ingresado:")
//console.info("Nombre ingresado:")
//console.warn("Este mensaje require atención.")
//console.error("Ahora sí me tienes que dar bolilla.")
//console.table(preposiciones) 






//analizar si se cumple una condición en una variable
//debugger

//let username = "Coderhouse"
// let username = prompt("Ingrese su nombre de usuario:")

// if (username == "Coderhouse") {
//     console.log("Bienvenido", username)
// }

//IF - ELSE
// let username = prompt("Ingrese su nombre de usuario:")

// if (username == "Coderhouse") {
//     console.log("Bienvenido", username)
// } else {
//     console.warn("No se reconoce el usuario.")
// }

//IF - ELSE IF
// let miOferta = prompt("Ingrese su oferta económica:")

// miOferta = parseInt(miOferta) // convertir en número entero

// if (miOferta < 22) {
//     console.error("No way! Su oferta es demasiado baja.")
// } else if (miOferta < 30) {
//     console.warn("Deberías estirarte un poco más.")
// } else if (miOferta < 50) {
//     console.warn("Estás cerca. Estírate solo un poquito más.")
// } else if (miOferta < 80) {
//     console.log("Tu oferta es de nuestro interés. Remate ganado.")
// }

// let confirma = confirm("¿Desea reemplaza su S.O. por Windows 95?")

// if (confirma) {
//     console.log("Instalando Windows 95...")
// } else {
//     console.warn("Sus archivos están a salvo.")
// }

// let numero = 10

// let esValida = (numero > 7)

// if (esValida) {
//     console.log("Número es mayor a 7.")
// }

//let username = prompt("Ingrese nombre de usuario:")
//let password = prompt("Ingrese su password:")
//let fingerPrint = true
//
//if ((username == "Fernando" && password == "123456") || fingerPrint === true) {
//    console.log("Bienvenido a bankapp", username)
//} else {
//    console.error("No se reconoce el usuario y/o la contraseña ingresada.")
//}