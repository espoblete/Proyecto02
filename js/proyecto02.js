const btn_reg = document.querySelector ('#registrar')
btn_reg.addEventListener ('click', event => crear())


function crear(){    
    const inputNombre = document.getElementById ('nombre')    
    const valor = document.createTextNode (inputNombre.value + ' : nombre / ')
    const etiqueta = document.createElement ('p')
    etiqueta.appendChild (valor)    
    const registro = document.getElementById ('registro')
    registro.appendChild(etiqueta)

    const inputApellido = document.getElementById ('apellido')    
    const valorApellido = document.createTextNode(inputApellido.value + ' : apellido / ')
    const etiquetaApellido = document.createElement ('p')
    etiqueta.appendChild (valorApellido)    
    const registroApellido = document.getElementById ('registro')
    registro.appendChild(etiquetaApellido)
    
    const inputEdad = document.getElementById ('edad')    
    const valorEdad = document.createTextNode(inputEdad.value + ' : edad / ')
    const etiquetaEdad = document.createElement ('p')
    etiqueta.appendChild (valorEdad)    
    const registroEdad = document.getElementById ('registro')
    registro.appendChild(etiquetaEdad)
}
