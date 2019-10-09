document.getElementById('segundaPantalla').classList.add('ocultar')
document.getElementById('pantallacifrar').classList.add('ocultar')

document.getElementById('botonIngresar').addEventListener('click', function () {
  const usuarito = document.getElementById('user').value
  const contraseñita = document.getElementById('contra').value
  if (contraseñita === 'COMADRES' && usuarito === '') {
    alert('DEBES INGRESAR TU USUARIO')
  } else if (contraseñita === 'COMADRES') {
    document.getElementById('cabecera').classList.add('ocultar')
    document.getElementById('pantalla1').classList.add('ocultar')
    document.getElementById('derechos').classList.add('ocultar')
    document.getElementById('segundaPantalla').classList.add('mostrar')
    document.getElementById('pantallacifrar').classList.add('mostrar')
  } else if (usuarito === '') {
    alert('DEBES INGRESAR TU USUARIO')
  } else if (contraseñita === '') {
    alert('DEBES INGRESAR TU CONTRASEÑA')
  } else {
    alert('CONTRASEÑA INCORRECTA')
  }
})

const mensaje = document.getElementById('mensajito')
const desplaza = document.getElementById('desplaza')
const resultado = document.getElementById('textarea2')

// CIFRAR
document.getElementById('boton1').addEventListener('click', function () {
  // SE TOMA EL CONTENIDO DEL MENSAJE
  const string = mensaje.value
  // SE TOMA EL CONTENIDO DE LOS DESPLAZAMIENTOS, CON parseInt SE ASEGURA QUE SEAN NUMEROS Y ENTEROS
  const offset = parseInt(desplaza.value)
  resultado.innerHTML = window.cipher.encode(string, offset)
})

// DESCIFRAR
document.getElementById('boton2').addEventListener('click', function () {
  // SE TOMA EL CONTENIDO DEL MENSAJE
  const string = mensaje.value
  // SE TOMA EL CONTENIDO DE LOS DESPLAZAMIENTOS, CON parseInt SE ASEGURA QUE SEAN NUMEROS Y ENTEROS
  const offset = parseInt(desplaza.value)
  resultado.innerHTML = window.cipher.decode(string, offset)
})

/* //MI PRIMER MODELO SOLO EN UN JS
document.getElementById('boton1').addEventListener('click', function(){
    //SE TOMA EL CONTENIDO DEL MENSAJE
    let string = mensaje.value;
    //SE TOMA EL CONTENIDO DE LOS DESPLAZAMIENTOS, CON parseInt SE ASEGURA QUE SEAN NUMEROS Y ENTEROS
    let offset = parseInt(desplaza.value);
    //SE HACE UN RECORRIDO POR TODO EL MENSAJE
    for(let i =0; i < string.length; i++){
    //CONSIDERACION DE LOS ESPACIOS
    if(string.charCodeAt(i)==32){
    resultado.innerHTML += String.fromCharCode(32);}
    //CIFRADO PARA MAYUSCULAS
    else if  (string.charCodeAt(i) >= 65  && string.charCodeAt(i) <= 90){
    let ascii = (string.charCodeAt(i) - 65 + offset )%26 + 65;
    resultado.innerHTML += String.fromCharCode(ascii);}
    //CIFRADO PARA MINUSCULAS
    else{
    if(string.charCodeAt(i) >= 97  && string.charCodeAt(i) <= 122){
    let ascii = (string.charCodeAt(i) - 97 + offset )%26 + 97;
    resultado.innerHTML += String.fromCharCode(ascii);
     }
      }
        }
         })
*/
