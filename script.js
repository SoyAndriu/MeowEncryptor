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
    textoDevuelto.value = texto;
    cambiarFondo;
};

function btnDesencriptar(){
    let textoEncriptado = desencriptado(textoUsuario.value);
    textoDevuelto.value = textoEncriptado;
}

function btnCopiar(){
    let textoCopiado = textoDevuelto.value;
    navigator.clipboard.writeText(textoCopiado);
}

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
    textoDevuelto
}