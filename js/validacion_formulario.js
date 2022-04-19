

// Validaciones formulario

function limpiarErrores() {
    var errores = document.getElementsByClassName("error");
    for (var i = 0; i < errores.length; i++) {
        errores[i].innerHTML = "";
    }
}

function validarFormulario(formulario) {

    limpiarErrores();

   
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regexEmail.test(formulario.validarEmail.value)) {
        document.getElementById("errorEmail").innerText = "Campo inválido";
        
        
        return false
    }
    if (formulario.validarContrasena.value.length == 0 || formulario.validarContrasena.value.length < 8) {
         document.getElementById("errorContrasena").innerText = "Campo obligatorio, minimo 8 caracteres";
        
       
    }

    if (formulario.validarContrasena.value != formulario.confirmacionContrasena.value) {
        document.getElementById("errorConfirmacion").innerText = "Confirmación no coincide";
       
        return false
    }

    if (formulario.seleccGenero.value == 0) {
        document.getElementById("errorGeneroMusical").innerText = "Campo obligatorio";
        
        
        return false
    }

    if (formulario.selEdad.value == "") {
        
        document.getElementById("errorEdad").innerText = "  Campo obligatorio";
        return false
    }
    if (!formulario.aceptaTerminos.checked) {
         document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
        
        
        return false
    }

    alert("Registro Exitoso");

    return true;
}


