let nombresUsuario=document.getElementById("nombre")
let correoUsuario=document.getElementById("correo")
let telefonoUsuario=document.getElementById("telefono")
let botonFormulario=document.getElementById("botonFormulario")


//Vamos a escuchar el clic en el boton 
botonFormulario.addEventListener("click",function(evento){
    evento.preventDefault()
    let nombres=nombresUsuario.value  
    let correo=correoUsuario.value  
    let telefono=telefonoUsuario.value 
    
    let errores=[]

    if(!nombres){
        errores.push("Error en el nombre")
        nombresUsuario.classList.add("is-invalid")
    }
    if(!correo){
        errores.push("Error en el correo")
        correoUsuario.classList.add("is-invalid")
    }
    if(!telefono){
        errores.push("Erro en el usuario")
        telefonoUsuario.classList.add("is-invalid")
    }
    if(errores.length>0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }else{
        Swal.fire(
            'EXITO EN LA RESERVA',
            '',
            'success'
          )

          //preguntando si tengo datos en memoria
          let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
          let reservas
          if(datosMemoria==null){
             reservas=[]
          }else{
            reservas=datosMemoria
          }

            
            let reserva={
                nombres,
                correo,
                telefono
            }
            reservas.push(reserva)
            localStorage.setItem("datosMemoria",JSON.stringify(reservas))

    }

    
})