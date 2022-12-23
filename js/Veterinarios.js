//conectamos el boton de registrar vet de HTML con el script

var button = document.getElementById("addvet");

//Conectamos el contenedor donde se agregaran los vets registrados

var container = document.getElementById("espaciocards");

//Evento que dispara cuando se haga click en el boton

button.addEventListener("click", function ()  {

    //definicion de la estructura de la tarjeta

    var tarjeta = `<div class="card m-3 p-2" style="max-width: 540px;" id="cards">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="./assets/veterinariafemale2.jpg" class="img-fluid rounded" alt="doctora" id="imgdoctora">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <a href="" id="linkdoc"><h5 class="card-title" id="namedocc">Dra. Alexandra Reyes Martinez</h5></a>
          <p class="card-text">Doctora especializada en perros y gatos con gran pasion por su profesion egresada
            de la universidad UANL</p>
          <p class="card-text"><small class="text-muted">Clinica: Huellitas, Direccion: Calle Cerezas #12, Colonia Fresnos, Mty, N.L.
              Telefono - 8129394882  Cedula Profesional: 13039135</small></p>
        </div>
      </div>
    </div>
  </div>`

  //agregamos la tarjeta al container

  espaciocards.innerHTML += tarjeta;

  //agregamos la tarjeta

  agregarTarejeta();

});