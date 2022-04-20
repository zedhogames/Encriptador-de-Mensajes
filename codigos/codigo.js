var arreglo = [];
var encriptado = [];
var palabra = "";
var mensaje = "";


function encriptar() {
    arreglo = [];
    encriptado = [];
    ocultarImagen();
    mensaje = document.getElementById('mensaje').value;
    document.getElementById('mensaje').value = "";
    arreglo = toArreglo(mensaje);
    encriptado = encriptacion(arreglo);
    for (var i = 0; i < encriptado.length; i++) {
        palabra = palabra + encriptado[i];  //para que concatene las palabras      
    }
    document.getElementById('mensajeResuelto').value = palabra;
    palabra = "";
}

function toArreglo(mensaje) {
    for (var i = 0; i < mensaje.length; i++) {
        arreglo[i] = mensaje;
        return arreglo[i];
    }
}

function encriptacion(arreglo) {
    for (var i = 0; i < arreglo.length; i++) {
        switch (arreglo[i]) {
            case 'a':
                encriptado[i] = arreglo[i] + 'i';

                break;
            case 'e':
                encriptado[i] = arreglo[i] + 'nter';

                break;
            case 'i':
                encriptado[i] = arreglo[i] + 'mes';

                break;
            case 'o':
                encriptado[i] = arreglo[i] + 'ber';

                break;
            case 'u':
                encriptado[i] = arreglo[i] + 'fat';

                break;
            default:
                encriptado[i] = arreglo[i]
                break;
        }
    } return encriptado;

}

function desencriptar() {
    mensaje = document.getElementById('mensaje').value;
    mensaje = desencriptacion(mensaje);
    ocultarImagen();
    document.getElementById('mensaje').value = "";
    document.getElementById('mensajeResuelto').value = mensaje;

}

function desencriptacion(mensaje) {

    mensaje = mensaje.replaceAll('enter', 'e');
    mensaje = mensaje.replaceAll('imes', 'i');
    mensaje = mensaje.replaceAll('ai', 'a');
    mensaje = mensaje.replaceAll('ober', 'o');
    mensaje = mensaje.replaceAll('ufat', 'u');
    return mensaje;

}

function copiar() {
    var mensajeCopiado = document.getElementById('mensajeResuelto');
    mensajeCopiado.select();
    document.execCommand('copy');
}

function ocultarImagen() {

    document.getElementById("doll").style.visibility = "hidden";
    document.getElementById("mensajeResuelto").style.visibility = "none";

}


function numeros(string){
    var out = '';
    var filtro = '°!"#$%&/()=?¡¨*[Ñ;:_-.,ñ{]}+áéúíó´¿0987654321|';//Caracteres Invalidos
    
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de invalidos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) == -1) 
             
	     out += string.charAt(i);	
    
    return out;
} 
    





