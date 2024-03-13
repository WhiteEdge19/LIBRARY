let Books = [];

function crearLibros(titulo,autor,paginas,read) {
    this.titulo=titulo;
    this.autor=autor;
    this.paginas=paginas;
    this.read=read;
    this.info=function(){
        console.log(this.titulo)
    }
}


const formulario = document.querySelector(".form");

let botonesEliminar = document.querySelectorAll(".eliminar");

//Para eliminar un libro
function eliminarLibro(valor) {
    Books.splice(valor,1);
    crearEspaciohtml(Books);
    completarEspacios(Books);
    console.log(Books);
    console.log("eliminar funcion");
}

//Cuando se crea una nuevo libro
function onFormSubmit(event) {
    event.preventDefault();
    console.log("testfuncion");
    const Dataform =Object.fromEntries(
        new FormData(event.target));

        console.log(JSON.stringify(Dataform));    
   Books.push(Dataform);
   console.log(Books);
   crearEspaciohtml(Books);

}

//espacio para los libros DIV work-area
const espacioLibros = document.querySelector(".work-area");

//Se crea  un div con 4 parrafos para
//los libros que se añadan 
function crearEspaciohtml(array) {
    espacioLibros.innerHTML=``;
    array.forEach(element => {
        espacioLibros.innerHTML +=`
        <div class="libro">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <button class="eliminar">Quitar</button>
        </div>`;
    });
    completarEspacios(Books);
    botonesEliminar = document.querySelectorAll(".eliminar");
    console.log(botonesEliminar);
}

//funcion para usar innerText 
//a partir de array de libros
function completarEspacios(array) {
    const espaciosAcompletar = document.querySelectorAll(".libro");
    
    for (let i = 0; i < array.length; i++) {
        espaciosAcompletar[i].children[0].innerText=` 
        Titulo: ${array[i].titulo}`;
        espaciosAcompletar[i].children[1].innerText=`
        Autor: ${array[i].autor}`;
        espaciosAcompletar[i].children[2].innerText=`
        # de Paginas : ${array[i].paginas}`;
        espaciosAcompletar[i].children[3].innerText=`
        Estado: ${array[i].read}`;
        espaciosAcompletar[i].children[4].setAttribute("value",i);

         //se accede a cada elemento de 
        //espaciosAcompletar para completar div a div de work-area
        //en base a length de Books
    }
    
}

//evento submit añadir libro
formulario.addEventListener("submit",onFormSubmit);

//evento botones Quitar para eliminar libro
espacioLibros.addEventListener("click",
(event) => {
    const clickedElement = event.target;
    console.log(typeof clickedElement.value);
    eliminarLibro(Number(clickedElement.value));
    console.log(clickedElement.value);
})

