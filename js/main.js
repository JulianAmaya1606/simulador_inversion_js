function simulador() {
    let nombresApellidos = document.getElementById('nombreApellido').value
    let telefono = document.getElementById('telefono').value
    let email = document.getElementById('email').value
    let monto = document.getElementById('inversion').value
    let tiempo = document.getElementById('tiempo').value
    const total = monto * tiempo


    const contPre = document.getElementById('pre_simulation') 
    const contPost =document.getElementById('post-simulation')

    contPost.classList.remove('disabled')
    contPre.classList.add('disabled')
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('calcular').addEventListener('click',simulador);
})



