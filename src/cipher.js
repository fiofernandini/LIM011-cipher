window.cipher = {
  encode: (string, offset) => {
    // SE CREA UNA VARIABLE VACIA
    let mensajecifrado = ''
    // CON FOR HACEMOS UN RECORRIDO POR TODO EL STRING
    for (let i = 0; i < string.length; i++) {
      // CONDICION PARA EL CIFRADO DE MAYUSCULAS
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      // SE APLICA LA FORMULA PARA OBTENER EL NUEVO ASCII
        const ascii = (string.charCodeAt(i) - 65 + offset) % 26 + 65
        // EN LA VARIABLE VACIA SE INSERTA EL NUEVO ASCII CONVERTIDO A LETRA
        mensajecifrado += String.fromCharCode(ascii)
        // CONDICION PARA EL CIFRADO DE MINUSCULAS
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      // SE APLICA FORMULA PARA OBTENER EL NUEVO ASCII
        const ascii = (string.charCodeAt(i) - 97 + offset) % 26 + 97
        // SE INSERTA EN LA VARIABLE VACIA EL NUEVO ASCII CONVERTIDO A LETRA
        mensajecifrado += String.fromCharCode(ascii)
        // SE CONSIDERA ENTER
      } else if (string.charCodeAt(i) === 10) {
        mensajecifrado += String.fromCharCode(10)
      // DEMAS CARACTERES - NO COMPRENDO BIEN
      } else {
        mensajecifrado += string[i]
      }
    }
    return mensajecifrado
  },

  decode: (string, offset) => {
    let mensajeDescifrado = ''
    for (let i = 0; i < string.length; i++) {
      // MAYUSCULAS
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
        const ascii = (string.charCodeAt(i) - 90 - offset) % 26 + 90
        mensajeDescifrado += String.fromCharCode(ascii)
      // MINUSCULAS
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
        const ascii = (string.charCodeAt(i) - 122 - offset) % 26 + 122
        mensajeDescifrado += String.fromCharCode(ascii)
        // ENTER
      } else if (string.charCodeAt(i) === 10) {
        mensajeDescifrado += String.fromCharCode(10)
        // DEMAS CARACTERES - ME LO DIJO MISHEL NO LO COMPRENDO BIEN
      } else {
        mensajeDescifrado += string[i]
      }
    }
    return mensajeDescifrado
  }

}
