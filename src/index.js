/* eslint-disable radix */
document.querySelector('#pantalla-cifra-descifrar').classList.add('ocultar');
document.querySelector('#pantallacifrar').classList.add('ocultar');

document.querySelector('#boton-Ingresar').addEventListener('click', () => {
  const nombreDeUsuario = document.querySelector('#nombre-de-usuario').value;
  const contraseñaDeUsuario = document.querySelector('#contraseña-de-usuario').value;
  if (contraseñaDeUsuario === 'COMADRES' && nombreDeUsuario === '') {
    document.querySelector('#emergente').innerHTML = 'Debes ingresar tu usuario';
  } else if (contraseñaDeUsuario === 'COMADRES') {
    document.querySelector('#emergente').innerHTML = '<br>';
    document.querySelector('#cabecera').style.display = 'none';
    document.querySelector('#pantalla-login').style.display = 'none';
    document.querySelector('#derechos-reservados').style.display = 'none';
    document.querySelector('#pantalla-cifra-descifrar').style.display = 'block';
    document.querySelector('#pantallacifrar').style.display = 'block';
    document.querySelector('#formulario').reset();
  } else if (nombreDeUsuario === '') {
    document.querySelector('#emergente').innerHTML = 'Debes ingresar tu usuario';
  } else if (contraseñaDeUsuario === '') {
    document.querySelector('#emergente').innerHTML = 'Debes ingresar tu contraseña';
  } else {
    document.querySelector('#emergente').innerHTML = 'Contraseña incorrecta';
  }
});

// CERRAR SESION
document.querySelector('#boton-salir').addEventListener('click', () => {
  document.querySelector('#cabecera').style.display = 'block';
  document.querySelector('#pantalla-login').style.display = 'block';
  document.querySelector('#derechos-reservados').style.display = 'block';
  document.querySelector('#pantalla-cifra-descifrar').style.display = 'none';
  document.querySelector('#pantallacifrar').style.display = 'none';
  document.querySelector('#inicio-de-sesion').reset();
});

// VARIABLES

const mensaje = document.querySelector('#mensaje-a-cifrar-o-descifrar');
const numeroDesplazamientos = document.querySelector('#numero-de-desplazamientos');
const resultados = document.querySelector('#resultado-del-cifrar-descifrar');

// CIFRAR
document.querySelector('#boton-cifrado').addEventListener('click', () => {
  const string = mensaje.value;
  const offset = parseInt(numeroDesplazamientos.value);
  resultados.value = window.cipher.encode(string, offset);
});

// DESCIFRAR
document.querySelector('#boton-descifrado').addEventListener('click', () => {
  const string = mensaje.value;
  const offset = parseInt(numeroDesplazamientos.value);
  resultados.value = window.cipher.decode(string, offset);
});
