document.getElementById('botonIngresar').addEventListener('click', function(){
    document.getElementById('cabecera').style.display='none';
    document.getElementById('pantalla1').style.display='none';
    document.getElementById('derechos').style.display='none';
    document.getElementById('segundaPantalla').style.display='block';
    document.getElementById('pantallacifrar').style.display='block';
    
});

  
let mensaje = document.getElementById('mensajito');
let desplaza = document.getElementById('desplaza');
let resultado = document.getElementById('textarea2');


//CIFRAR
document.getElementById('boton1').addEventListener('click', function(){
    //SE TOMA EL CONTENIDO DEL MENSAJE
    let string = mensaje.value;
    //SE TOMA EL CONTENIDO DE LOS DESPLAZAMIENTOS, CON parseInt SE ASEGURA QUE SEAN NUMEROS Y ENTEROS
    let offset = parseInt(desplaza.value);
    //SE HACE UN RECORRIDO POR TODO EL MENSAJE
    for(let i =0; i < string.length; i++){
    //CONSIDERACION DE LOS ESPACIOS
    if(string.charCodeAt(i)==32){
    resultado.innerHTML += " ";}
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

//DESCIFRAR
document.getElementById('boton2').addEventListener('click', function(){
    let string = mensaje.value;
    let offset = parseInt(desplaza.value);
    for(let i =0; i < string.length; i++){
        if(string.charCodeAt(i)==32){
            resultado.innerHTML += " ";
        }else{
        if (string.charCodeAt(i) >= 65  && string.charCodeAt(i) <= 90) {
        let ascii = (string.charCodeAt(i) - 90 - offset )%26 + 90;
        resultado.innerHTML += String.fromCharCode(ascii)
        } 
    }          
    }   
})