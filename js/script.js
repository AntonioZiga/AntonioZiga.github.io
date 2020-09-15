rellenarSeccionProyectos();


/* Para la el menu burguer */
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

function rellenarSeccionProyectos (){
    var divProyectos = document.getElementById("ColumnaProyectos");
    proyectos.forEach(proyecto => {

        var cajaProyecto = `<div class="column">
                                <div class="card card-proyectos">
                                <div class="card-image">
                                    <figure class="image is-2by1">
                                    <img src="images/screenshot-proyectos/${proyecto.banner}" alt="Placeholder image">
                                    </figure>
                                </div>
                                <div class="card-content">

                                    <p class="title is-6 overflow-ellipsis">${proyecto.nombre}</p>
                                    <div class="content overflow-ellipsis">
                                        ${proyecto.descripcion}
                                    </div>

                                    <nav class="level is-mobile m-5">`;

        

             cajaProyecto += `<div class="level-left">`;

             for(var i=0; i<proyecto.iconos.length ;i++){
                cajaProyecto += `<div class="level-item">
                                    <i class="${proyecto.iconos[i]}"></i>
                                 </div>`
             }

             cajaProyecto += `</div>`;

             cajaProyecto += `<div class="level-right">
                                <div class="level-item">
                                <button class="button is-small is-white" onclick="EstadoModal(${proyecto.id});">Ver mas</button>
                              </div>
                            </div>
                           </nav>
                          </div>
                         </div>
                        </div>`;

            divProyectos.innerHTML += cajaProyecto;
    });
}

function EstadoModal(id_proyecto){
  
  if(id_proyecto != null){
    modificarInfoModal(buscarProyecto(id_proyecto));
    showSlides(slideIndex);
  }

  var modal = document.getElementById("modal");
  modal.classList.toggle("is-active");

  var html = document.querySelector('html');
  html.classList.toggle('is-clipped');
}

function buscarProyecto(id){
   var proyecto = proyectos.find(
     elemento => elemento.id === id.toString() 
   );

   return proyecto;
}

function modificarInfoModal(proyecto){
  //modificar imagenes del slider
  var contenedorImagenes = document.getElementById("contenedorImagenes");
    contenedorImagenes.innerHTML = "";
   for(var i=0;i<proyecto.banners.length;i++){
    contenedorImagenes.innerHTML += 
      `<div class="mySlides fade">
        <div class="numbertext">${i} / ${proyecto.banners.length}</div>
        <img src="images/screenshot-proyectos${proyecto.banners[i]}" style="width:100%">
      </div>`
   }
  //modificar titulo
   document.getElementById("tituloProyecto").innerText = proyecto.nombre;
  //modificar descripion
   document.getElementById("DescripcionProyecto").innerText = proyecto.descripcion;
  //modificar etiquetas tecnologias ocupadas
   var contenedorEtiquetas = document.getElementById("tecnologiasProyecto");
   contenedorEtiquetas.innerHTML = "";
   for(var i=0;i<proyecto.tecnologias.length;i++){
     contenedorEtiquetas.innerHTML += 
       `<span class="tag mr-2">
          <i class="${proyecto.iconos[i]} mr-1"></i> ${proyecto.tecnologias[i]} </span>`
   }

   //mostrar botones con ligas correctas 
   var botonesLinks = document.getElementById("botonesProyecto");
   botonesLinks.innerHTML = "";
   if(proyecto.links.length>0){
    for(var i=0; i<proyecto.links.length; i++){
      var link = proyecto.links[i];
      botonesLinks.innerHTML +=  `<a href="${link.link}" class="button is-small is-link is-outlined mr-4"><i class="${link.icono} pr-1"></i> ${link.text}</a>`;
    }
   }
} 


/*slider*/
var slideIndex = 1;


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}

