function ingresar()
    {
    let pass=document.getElementById("clave").value;

    if(pass=="1931")
    {
        window.location="benita.html";
    }

    else
    {
        alert("No es la contraseña");
    }


}
function inhabilitar()
    {
            alert("las imágenes no se pueden copiar, pero puedo compartirte la foto, sólo envíame un mensaje")
            return false
    }
        document.oncontextmenu=inhabilitar







