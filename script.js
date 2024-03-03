let textoUsuario = document.querySelector("#texto-usuario");
let textoDevuelto = document.querySelector("#texto-devuelto");

let codigoEncriptacion = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
];

let codigoDesencriptacion = [
    ["ai", "a"],
    ["enter", "e"],
    ["imes", "i"],
    ["ober", "o"],
    ["ufat", "u"],
];

function btnEncriptar() {
    let texto =  encriptado(textoUsuario.value);

    cambiarFondo();
    if(textoUsuario.value == ""){
        textoDevuelto.placeholder = "¡Necesitas escribir algo para encriptar!";
    } else {
        textoDevuelto.value = texto;
        textoUsuario.value = "";
    }
};

function btnDesencriptar(){
    let textoEncriptado = desencriptado(textoUsuario.value);

    cambiarFondo();
    if(textoUsuario.value == ""){
        textoDevuelto.placeholder = "¡Necesitas escribir algo para desencriptar!";
    } else {
    textoDevuelto.value = textoEncriptado;
    textoUsuario.value = "";
    }
};

function btnCopiar(){
    let textoCopiado = textoDevuelto.value;

    cambiarFondo();
    if(textoCopiado == ""){
        textoDevuelto.placeholder = "¡No hay nada para copiar!";
    } else {
    navigator.clipboard.writeText(textoCopiado);
    textoDevuelto.value = "";
    textoDevuelto.placeholder = "¡Copiado al portapapeles!";
    }
};

function encriptado(fraseEncriptada) {
    for (let index = 0; index < codigoEncriptacion.length; index++) {
        if(fraseEncriptada.includes(codigoEncriptacion[index][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                codigoEncriptacion[index][0],
                codigoEncriptacion[index][1]
            )
        }
    }
    return fraseEncriptada;
};

function desencriptado(fraseDesencriptada) {
    for (let index = 0; index < codigoDesencriptacion.length; index++) {
        if(fraseDesencriptada.includes(codigoDesencriptacion[index][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                codigoDesencriptacion[index][0],
                codigoDesencriptacion[index][1]
            )
        }
    }
    return fraseDesencriptada;
};

function cambiarFondo(){
    textoDevuelto.style.background = "none";
};