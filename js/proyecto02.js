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
    document.getElementById("tabla").innerHTML += `<tbody><td>${nuevoSocio.nombre}</td><td>${nuevoSocio.apellido}</td><td>${nuevoSocio.edad}</td><td>${nuevoSocio.email}</td><td>${nuevoSocio.ejercicio}</td><td>${nuevoSocio.repeticiones}</td><td>${nuevoSocio.series}</td><td <i onClick="editar" class="fas fa-edit"</i></td><td <i onClick="borrar" class="fas fa-trash-alt"></i></td></tbody>`;
    guardaDatos();
}
function guardaDatos(key, value) {
    const miStorage = localStorage;
    miStorage.setItem("nombre", nombre.value);
    miStorage.setItem("apellido", apellido.value);
    miStorage.setItem("edad", edad.value);
    miStorage.setItem("email", email.value);
    miStorage.setItem("ejercicio", ejercicio.value);
    miStorage.setItem("repeticiones", repeticiones.value);
    miStorage.setItem("series", series.value);
    console.log(miStorage);
}


