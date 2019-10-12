/* eslint-disable radix */
document.getElementById('segundaPantalla').classList.add('ocultar')
document.getElementById('pantallacifrar').classList.add('ocultar')

document.getElementById('botonIngresar').addEventListener('click', () => {
  const usuarito = document.getElementById('user').value
  const contraseñita = document.getElementById('contra').value
  if (contraseñita === 'COMADRES' && usuarito === '') {
    document.getElementById('emergente').innerHTML = 'Debes ingresar tu usuario'
  } else if (contraseñita === 'COMADRES') {
    document.getElementById('emergente').innerHTML = '<br>'
    document.getElementById('cabecera').style.display = 'none'
    document.getElementById('pantalla1').style.display = 'none'
    document.getElementById('derechos').style.display = 'none'
    document.getElementById('segundaPantalla').style.display = 'block'
    document.getElementById('pantallacifrar').style.display = 'block'
    document.getElementById('formulario').reset()
  } else if (usuarito === '') {
    document.getElementById('emergente').innerHTML = 'Debes ingresar tu usuario'
  } else if (contraseñita === '') {
    document.getElementById('emergente').innerHTML = 'Debes ingresar tu contraseña'
  } else {
    document.getElementById('emergente').innerHTML = 'Contraseña incorrecta'
  }
})

// CERRAR SESION
document.getElementById('salir').addEventListener('click', () => {
  document.getElementById('cabecera').style.display = 'block'
  document.getElementById('pantalla1').style.display = 'block'
  document.getElementById('derechos').style.display = 'block'
  document.getElementById('segundaPantalla').style.display = 'none'
  document.getElementById('pantallacifrar').style.display = 'none'
  document.getElementById('ingresando').reset()
})

// VARIABLES

const mensaje = document.getElementById('mensajito')
const desplaza = document.getElementById('desplaza')
const resultado = document.getElementById('textarea2')

// CIFRAR
document.getElementById('boton1').addEventListener('click', () => {
  const string = mensaje.value
  const offset = parseInt(desplaza.value)
  resultado.value = window.cipher.encode(string, offset)
})

// DESCIFRAR
document.getElementById('boton2').addEventListener('click', () => {
  const string = mensaje.value
  const offset = parseInt(desplaza.value)
  resultado.value = window.cipher.decode(string, offset)
})
