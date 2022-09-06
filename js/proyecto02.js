function capturar() {
    function Socio(nombre, apellido, edad, email, ejercicio, repeticiones, series) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.ejercicio = ejercicio;
        this.repeticiones = repeticiones;
        this.series = series;
    }
    var nombreCapturar = document.getElementById("nombre").value;
    var apellidoCapturar = document.getElementById("apellido").value;
    var edadCapturar = document.getElementById("edad").value;
    var emailCapturar = document.getElementById("email").value;
    var ejercicioCapturar = document.getElementById("ejercicio").value;
    var repeticionesCapturar = document.getElementById("repeticiones").value;
    var seriesCapturar = document.getElementById("series").value;
    nuevoSocio = new Socio(nombreCapturar, apellidoCapturar, edadCapturar, emailCapturar, ejercicioCapturar, repeticionesCapturar, seriesCapturar);
    console.log(nuevoSocio)
    agregar();
}
var baseDatos = [];
function agregar() {
    baseDatos.push(nuevoSocio);
    console.log(baseDatos);
    document.getElementById("registros").innerHTML += `Nombre: ${nuevoSocio.nombre}/ Apellido: ${nuevoSocio.apellido}/ Edad: ${nuevoSocio.edad}/ Email: ${nuevoSocio.email}/ Nombre del Ejercicio: ${nuevoSocio.ejercicio}/ N° de Repeticiones: ${nuevoSocio.repeticiones}/ N° de Series: ${nuevoSocio.series}.`;

}