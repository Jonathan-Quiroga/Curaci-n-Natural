const serviciosInformacion = document.querySelector("#servicios_informacion");
const abrir = document.querySelector("#abrir_info");
const cerrar = document.querySelector("#cerrar_info");

abrir.addEventListener("click", () =>{
    serviciosInformacion.classList.add("visible");
})

cerrar.addEventListener("click", ()=>{
    serviciosInformacion.classList.remove("visible")

})

const serviciosInformacion2 = document.querySelector("#servicios_informacion2");
const abrir2 = document.querySelector("#abrir_info2");
const cerrar2 = document.querySelector("#cerrar_info2");

abrir2.addEventListener("click", () =>{
    serviciosInformacion2.classList.add("visible");
})

cerrar2.addEventListener("click", ()=>{
    serviciosInformacion2.classList.remove("visible")

})

const serviciosInformacion3 = document.querySelector("#servicios_informacion3");
const abrir3 = document.querySelector("#abrir_info3");
const cerrar3 = document.querySelector("#cerrar_info3");

abrir3.addEventListener("click", () =>{
    serviciosInformacion3.classList.add("visible");
})

cerrar3.addEventListener("click", ()=>{
    serviciosInformacion3.classList.remove("visible")

})

const serviciosInformacion4 = document.querySelector("#servicios_informacion4");
const abrir4= document.querySelector("#abrir_info4");
const cerrar4 = document.querySelector("#cerrar_info4");

abrir4.addEventListener("click", () =>{
    serviciosInformacion4.classList.add("visible");
})

cerrar4.addEventListener("click", ()=>{
    serviciosInformacion4.classList.remove("visible")

})

const serviciosInformacion5 = document.querySelector("#servicios_informacion5");
const abrir5 = document.querySelector("#abrir_info5");
const cerrar5 = document.querySelector("#cerrar_info5");

abrir5.addEventListener("click", () =>{
    serviciosInformacion5.classList.add("visible");
})

cerrar5.addEventListener("click", ()=>{
    serviciosInformacion5.classList.remove("visible")

})


//Formulario
const enviar = document.getElementById('enviar');
const enviarFormulario = (event)=>{
    event.preventDefault();
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let mensaje = document.getElementById('listaServicios').value;
    var win= window.open(`https://api.whatsapp.com/send/?phone=7292273543&text=Hola mi nombre es: ${nombre} ${apellido}%0AMe gustaria mayor informacion de: ${mensaje} `, '_blank');
}

enviar.addEventListener('click', enviarFormulario);


