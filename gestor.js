let datosMemoria=JSON.parse(localStorage.getItem("datosMemoria"))
console.log(datosMemoria)

let contenedor=document.getElementById("contenedor")

datosMemoria.forEach(function(reserva){
    let fila=document.createElement("div")
    fila.classList.add("row","my-5","shadow","p-4")
    let columna=document.createElement("div")
    columna.classList.add("col-4")
    let columna2=document.createElement("div")
    columna2.classList.add("col-8","border-start")


    let titulo=document.createElement("h3")
    titulo.textContent="agenda"

    let cliente=document.createElement("h2")
    cliente.textContent="Nombres: "+reserva.nombres

    let correo=document.createElement("h4")
    correo.textContent="Correo:"+reserva.correo

    let telefono=document.createElement("h4")
    telefono.textContent="Telefono: "+reserva.telefono
    
    columna.appendChild(titulo)
    columna2.appendChild(cliente)
    columna2.appendChild(correo)
    columna2.appendChild(telefono)
    fila.appendChild(columna)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)
})