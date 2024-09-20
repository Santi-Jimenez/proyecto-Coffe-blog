// 3 tipos para seleccionar contenido                                         144-145
// todos inician con document
//queryselector (Va retornar ninguno o hasta un elemento con concuerde)
//Id --> recomendado para utilizarlo con Js para los selectores, etc.
//solamente selecciono uno de los elementos si que hay varios como ejemplos enlaces, con etiqueta (a)


const heading = document.querySelector('.header-texto h2') //retorna 0 o 1 elemento. similar a objeto
console.log(heading);

heading.classList.add('Nueva-Clase');  //agregar clase
heading.textContent = 'Aguante River'; //cambiar html

//querySelectorAll   --> selecciona todos los q hay de esa etiqueta o seleccionar por uno con[]
const enlaces = document.querySelectorAll('.navegacion a')

console.log(enlaces[0]);
enlaces[0].textContent = 'Vosotros';
enlaces[0].href = 'http://google.com'; //cambiar destino del enlace
enlaces[0].classList.add('uesa');
// enlaces[0].classList.remove('navegacion__enlace'); //eliminar clase

// console.log(enlaces);


enlaces.textContent = 'holi';



//getElementById  -->Es similar a estos, busca id directamente                      146
//se puede hacer todo que en las otras.
const heading2 = document.getElementById('heading');
console.log(heading2);

//Generar un nuevo enlace o cogigo html
//tambien se utiliza document, casi todo
//se recomienda usar mayusculas
//se realiza de esta forma para que sea mas dinamico, es decir, vienen los resultados desde una base de datos
//resultado de una base de dato o de un formulario que viene de un usuario se utiliza.
//se utiliza tambien para la validacion de un formulario al momento de que esta todo correctamente.
const nuevoEnlace = document.createElement('A');

//agregar href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar texto
nuevoEnlace.textContent = 'Tienda Virtual';

//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

//cambiar destino de enlace
nuevoEnlace.href = 'https://www.youtube.com/watch?v=VgF8Bm4viQg';

//agregarlo al doc
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //agregar nueva etiqueta al documento html para que se pueda visualizar en pantalla

console.log(nuevoEnlace);


//Eventos                                                                      147
//mayormente los registra el usuario
//eventos en automaticos es cuando el evento esta listo
//window solo conoce como el objeto global, es todo el documento. window tambien es todas las funciones

console.log(1);

window.addEventListener('load', imprimir); //siempre que este el event listener lo que este primero es el evento
     //el load espera que el js y archivos que dependen del html esten listos

window.onload = function(){
    console.log(8);
}; //mismo resultado que arriba pero distinta forma de hacerlo

document.addEventListener('DOMContentLoaded', function(){
    console.log(10);
}); //En cambio DOmcontentloaded, solo espera que se descargue el html pero no espera el css ni img
//usualmente se utiliza addveventlistener, ya que solo esperamos que se descargue el html para poder ejecutar nuestros codigos
//mas rapido

console.log(5);

function imprimir() { //otra forma de mandar a llamar la funcion de imprimir en linea 69 para mostrar en console
    console.log(2);
}

window.onscroll = function(){
    console.log('scrolling..'); // muestra las veces que le damos scroll en el documento(subir y bajar xd)
}



// Seleccionar un elemento del html y registrarle un evento                       148
//asociado al boton, puede ser cualquier elemento hasta un texto, img, etc...
const btnEnviar = document.querySelector('.boton--contacto');
btnEnviar.addEventListener('click', function(evento){ //<--ver que tanto elemento hay disponible <--
                                     //con pasarle a la function (evento/e) deja ver info
                                     //con que haya un onscroll o addEventListener
    console.log(evento);

    evento.preventDefault();//Se quiere en casi todos los formularios
    //Es util para validar un formulario, para comprobar que todos los campos esten llenos  

    console.log('Enviando formulario');
});

//El evento submit                               150
//en un formulario se utiliza submit, buena practica.asociado al formulario
const formulario = document.querySelector('.formulario')  //obligatorio que en el input sea de tipo submit ya que nos va a permitir enviar el formulario
formulario.addEventListener('submit', function(evento){
    console.log(evento);

    evento.preventDefault();

    console.log('Enviando Formulario');
})


//ORDEN
//todas las variables en la parte superior
//desp todos los addEventListener