//Eventos impulsados por el teclado                                           149

//Validar formulario
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
// nombre.addEventListener('input' , function(e) { // change no tiene validacion en tiempo real, si no que figura una vez terminas de escribir
//     console.log(e.target.value)      //para una validacion en tiempo real usar input
// });                     //value es la informacion que va a estar en un input

nombre.addEventListener('input' , leerTexto);

email.addEventListener('input' , leerTexto);

mensaje.addEventListener('input' , leerTexto);

function leerTexto(e){

    datos[e.target.id] = e.target.value; //lo que se escribe en el fomrulario se llena en la variable dato en la consola.
    //los objetos donde contenga los datos del formulario debe tener el mismo nombre que los input o id.
    // console.log(e.target.value); //target contiene el input en donde escribimos y value muestra lo que esta dentro

    // console.log(datos);
}

//Evento submit

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar un formulario                                         151
    
    const { nombre, email, mensaje } = datos; //extrae esas 3 variables de datos que se encuentra en la parte superior.
    // console.log(nombre);
    // console.log(email);
    // console.log(mensaje);
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //cortra la ejecucion del codigo
     }
    // else {
    // EnvioCorrectamente('Su Consulta fue enviada con exito'); no tiene sentido que sea en un else ya que el return lo 'detiene'
    // };
    //Alerta de envioCorrectamente
    mostrarAlerta('Su consulta se envio correctamente'); //si no esta presente toma el parametro como default null.
});
 // console.log('Enviando Formulario..');


//mostrar error en pantalla

// function mostrarError(mensaje){
//     const error = document.createElement('P');
//     error.textContent = mensaje;

//     error.classList.add('error')


//     formulario.appendChild( error ); //appendChild agrega la nueva etiqueta de html al documento

//     //desaparezca despues de 5seg
//     setTimeout(() => {
//         error.remove(); //remove para que la variable creada de error desaparezca
//     }, 2500); 
// }

// //enviado correctamente
// function EnvioCorrectamente(mensaje){
//     const confirmacion = document.createElement('P');
//     confirmacion.textContent = mensaje;

//     confirmacion.classList.add('confirmacion');

//     formulario.appendChild (confirmacion);

//     setTimeout(() => {
//         confirmacion.remove();
//     }, 3500);
// }

//REFACTORY, primero hacer que el codigo funcione luego hacer el refactory, es decir, simplificarlo.            152
//HACERLO FEO, PERO Q FUNCIONE LUEGO SIMPLIFICARLO!
function mostrarAlerta(mensaje, error = null) {  //hay que mandarle un valor por deafut(null) si no, va mandar undifined que no esta definido
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('confirmacion');
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3500);

} //esta es la forma simplificada :D