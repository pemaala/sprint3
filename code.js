/* constantes: la constante "email" identificará mediante el método .getElementById el elemento con id="correo" del código html, y lo mismo para las otras dos constantes  */
const email = document.getElementById("correo")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

/* evento */
form.addEventListener("submit", (e) => { /* Agrega un evento al boton "submit" */
  e.preventDefault(); /* Llama al método preventDefault, en este caso para evitar que el botón lleve a otra página */
  validarEmail(); /* Llama a la función validarEmail */
});

/* función */
function validarEmail() {
    let warnings = ""
    let entrar = false
    let regexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ /* código para validación de e-mails copiado de https://w3resource.com/javascript/form/email-validation.php  */
    /* condicionales */
    if(nombre.value.length <6){
        warnings += `Por favor, ingrese un nombre válido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){ /* se coloca el signo ! para que si el e-mail no cumple con los requisitos, se considere falso y aparezca el warning */
        warnings += `Por favor, ingrese un e-mail válido`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
        /* Timer para que desaparezca el mensaje después de 5 segundos (o 5000 milisegundos) */
        setTimeout(function(){
        parrafo.innerHTML = ""    
        },5000)
    }else{
        parrafo.innerHTML = "Enviado"
        setTimeout(function(){
        parrafo.innerHTML = ""    
        },5000)
    }
}