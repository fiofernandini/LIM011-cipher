window.cipher = {
  encode: (string, offset) => {
      //SE CREA UNA VARIABLE VACIA
    let mensajecifrado = "";
    // CON FOR HACEMOS UN RECORRIDO POR TODO EL STRING
    for (let i = 0; i < string.length; i++) {
  // CONDICION PARA EL CIFRADO DE MAYUSCULAS
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
  // SE APLICA LA FORMULA PARA OBTENER EL NUEVO ASCII
          let ascii = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
  // EN LA VARIABLE VACIA SE INSERTA EL NUEVO ASCII CONVERTIDO A LETRA
          mensajecifrado += String.fromCharCode(ascii);
  //CONDICION PARA EL CIFRADO DE MINUSCULAS
        } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
  //SE APLICA FORMULA PARA OBTENER EL NUEVO ASCII
          let ascii = (string.charCodeAt(i) - 97 + offset) % 26 + 97;
  //SE INSERTA EN LA VARIABLE VACIA EL NUEVO ASCII CONVERTIDO A LETRA
          mensajecifrado += String.fromCharCode(ascii);
        } else 
  // CONDICION PARA LOS ESPACIOS
      {if (string.charCodeAt(i)==32){
  //SE INSERTA EN LA VARIABLE VACIA EL ESPACIO
            mensajecifrado += String.fromCharCode(32)}
        }
    }
    return mensajecifrado;
  }
};

