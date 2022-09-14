let botonAgregar = document.getElementById('agregar');
botonAgregar.addEventListener('click', (evento) => agregarRecordatorio(evento));

let botonActualizar = document.getElementById('actualizar');
botonActualizar.addEventListener('click', (evento) => actualizarRecordatorio(evento));

let socio = document.getElementById('socio');
let ejercicio = document.getElementById('ejercicio');
let rep = document.getElementById('rep');
let series = document.getElementById('series');
let contenedor = document.getElementById('recordatorios');
let recordatorios = [];

function agregarRecordatorio(evento) {
  evento.preventDefault();
  const recordatorio = {
    socio: socio.value,
    ejercicio: ejercicio.value,
    rep: rep.value,
    series: series.value
  }
  
  if (socio.value === '' || ejercicio.value === '' || rep.value === '' || series.value === '') {
    mensajito2.innerHTML = 'Ingrese todos los campos solicitados';
    mensajito2.style.display = 'block';
  } else {
    recordatorios.push(recordatorio);
    guardarEnLS();
    mostrarRecordatorios();
    limpiarInput();
    mensajito2.style.display = 'none';
  }
}

function limpiarInput() {
  socio.value = '';
  ejercicio.value = '';
  rep.value = '';
  series.value = '';  
  mensajito.innerHTML = 'Ingrese un nuevo recordatorio de ejercicios';
}

function editarRecordatorio(boton, socioRecordatorio) {
  botonAgregar.style.display = 'none';
  botonActualizar.style.display = 'block';
  let recordatorioEnEdicion = recordatorios.find((recordatorio) => recordatorio.socio === socioRecordatorio);

  socio.value = recordatorioEnEdicion.socio;
  ejercicio.value = recordatorioEnEdicion.ejercicio;
  rep.value = recordatorioEnEdicion.rep;
  series.value = recordatorioEnEdicion.series;

  socio.setAttribute('disabled', true);
  mensajito.innerHTML = 'Modifique el o los parámetros que desea cambiar';
}

function eliminarRecordatorio(boton, socio) {
  Swal.fire({
    title: '¿Está seguro/a que desea eliminar este recordatorio?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      boton.parentElement.remove();
      recordatorios = recordatorios.filter((recordatorio) => recordatorio.socio !== socio);
      guardarEnLS();
      Swal.fire(
        'Eliminado',
        'Tu recordatorio ha sido eliminado',
        'success'
      )
    }
  })
}

function leerRecordatorios() {
  let recordatoriosEnLS = window.localStorage.getItem('recordatorios');
  recordatorios = JSON.parse(recordatoriosEnLS) || [];
  mostrarRecordatorios();
}

function mostrarRecordatorios() {
  contenedor.innerHTML = '';
  recordatorios.forEach((recordatorio) => {
    contenedor.innerHTML += `
            <article>
                <p>${recordatorio.socio}</p>
                <p>${recordatorio.ejercicio}</p>
                <p>${recordatorio.rep}</p>
                <p>${recordatorio.series}</p>
                
                <button onclick="editarRecordatorio(this, '${recordatorio.socio}' )"><i class="fa-regular fa-pen-to-square"></i></button>
                <button onclick="eliminarRecordatorio(this, '${recordatorio.socio}' )"><i class="fa-solid fa-trash-can"></i></button>
            </article>
      `
  })
}

function guardarEnLS() {
  let arrayConvertidoAString = JSON.stringify(recordatorios);
  window.localStorage.setItem('recordatorios', arrayConvertidoAString);
}

function actualizarRecordatorio(evento) {
  evento.preventDefault();
  let socioRecordatorio = socio.value;
  let nuevoEjercicio = ejercicio.value;
  let nuevaRep = rep.value;
  let nuevaSeries = series.value;
  recordatorios = recordatorios.map((recordatorio) => {
    if (recordatorio.socio === socioRecordatorio) {
      return {
        socio: socioRecordatorio,
        ejercicio: nuevoEjercicio,
        rep: nuevaRep,
        series: nuevaSeries
      }
    } else {
      return recordatorio;
    }
  })
  limpiarInput();
  botonAgregar.style.display = 'block';
  botonActualizar.style.display = 'none';
  socio.removeAttribute('disabled');
  guardarEnLS();
  mostrarRecordatorios();
  mensajito.innerHTML = 'La información ha sido actualizada';
}

leerRecordatorios();

