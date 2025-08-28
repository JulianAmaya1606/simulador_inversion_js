function simulador() {
    //declaramos las variables de los valores de los campos del formulario
    let nombresApellidos = document.getElementById('nombreApellido').value
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById('email').value
    let monto = document.getElementById('inversion').value
    let tiempo = document.getElementById('tiempo').value
    //constantes que capturan las etiqeutas span en las que se muestran los valores por eso la s de show
    const showTiempo = document.getElementById('showTiempo')
    const showInteres = document.getElementById('showInteres')
    const showTotal = document.getElementById('showTotal')    
    const showGanancia = document.getElementById('showGanancia') 
    const showNombres = document.getElementById('showNombres')
    const showCorreo = document.getElementById('showCorreo')    
    
    //variables para las realizar los calculos
    let ganancia = 0
    let total = 0
    if (nombresApellidos=="" || email=="" || monto=="" || tiempo=="") {
        alert("llene todos los campos")
    }
    else {
    switch (tiempo) {
        //en este case realizaremos el calculo si el tiempo corresponde a un año
        case '1':
            ganancia = (monto * 0.008)*12
            total = parseInt(monto) + parseInt(ganancia)
            showInteres.textContent = '0.8%'
            showTiempo.textContent = '12 MESES'
            break;

        //en este case realizaremos el calculo si el tiempo corresponde a dos años     
        case '2':
            ganancia = (monto * 0.013)*24
            total = parseInt(monto) + parseInt(ganancia)
            showInteres.textContent = '0.13%'
            showTiempo.textContent = '24 MESES'            
            break;

        //en este case realizaremos el calculo si el tiempo corresponde a 3 años
        case '3':
            ganancia = (monto * 0.017)*36
            total = parseInt(monto) + parseInt(ganancia)
            showInteres.textContent = '1.17%'
            showTiempo.textContent = '36 MESES'               
            break;                

    }
    
    showTotal.textContent = total
    showGanancia.textContent = ganancia
    showNombres.textContent = nombresApellidos
    showCorreo.textContent = email


    

    const contPre = document.getElementById('pre_simulation') 
    const contPost =document.getElementById('post-simulation')

    contPost.classList.remove('disabled')
    contPre.classList.add('disabled')

}
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click',simulador);
})



