function login(){
      if (validoInputs()){
        alert("Tu correo y contraseña no coinciden");
    }
    else{
        $("body").css({
            'background-color': 'green'
        });
    }
}

function validoInputs(){
    let elCorreo = document.getElementById("elCorreo").value;
    let elPassword = document.getElementById("elPassword").value;
    return (elCorreo == "" || elPassword == "");
}