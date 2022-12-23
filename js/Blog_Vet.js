// Ver categoria
function verCat(identifier) {
  let categorias = document.querySelectorAll(".notas-categoria.active");

  categorias.forEach((notas) => {
      notas.classList.remove('active');
  });

  let el = document.getElementById('categoria-' + identifier);

  el.classList.add("active");

  addOnClick();
}


//Insertar una tarjeta de boostrap en el html cuando se haga click en el boton "Insertar tarjeta"

//Primero conectamos el boton que esta en el html con el script.js
var note_btn = document.getElementById("botonAgregarNotas");
//Tambien conectamos el lugar donde se va a insertar la tarjeta
var noteContainer = document.getElementById("contenedorNotas");

const crearNota = () => {

  //Crear para cada elemento con su respectivo destino
  //document.getElementById("contenedorNotas").innerHTML += `<img src="/assets/assets_blog/N2.jpg" class="card-img-top" alt="...">` ; este era el ejemplo de prueba
  //document.getElementById("contenedorNotas").innerHTML += `${titulo}`;
  // poner los destinos
  document.getElementById("contenedorNotas").innerHTML += `

  <div class="imagen col-12 col-md-6 col-lg-4">
  <div class="card" style="width: 18rem;">
    <img src="./assets/assets_blog/navidad-unsplash.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Cuidados para mascotas en Navidad</h5>
      <h6>Por: <a href="./perfilVet.html"> @Vet1_PetFF</a></h6>
      <p class="card-text">A las puertas de la Navidad, es momento de prestarle atención a los cuidados para mascotas. Unos que no solo nos ayudarán a vivir estas fechas... </p>

      <!-- Leer nota modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#leernota"
        data-bs-whatever="@mdo" id="BotonLeer">Leer más...</button> <!--Boton que abre modal-->

      <!--Contenido de Modal para leer nota-->

      <div class="modal fade" id="leernota" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl"> <!--Modal en pantlla grande-->
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Castrar a un conejo - Precio, cuándo
                hacerlo y beneficios</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="titulo">
                <h1>Cuidados para mascotas en Navidad</h1>
              </div>
              <div class="portada">
                <img src="./assets/assets_blog/navidad-unsplash.jpg" width="80%">
              </div>
              <div class="datos">
                <p>Por: @Vet</p>
                <p> Publicado: 12/12/2022</p>
              </div>
              <div class="leercuerpo">
                <p>A las puertas de la Navidad, es momento de prestarle atención a los cuidados para mascotas. Unos que no solo nos ayudarán a vivir estas fechas en paz y armonía sino, además, a disfrutarlas manteniendo el bienestar de aquellos peludos con los que compartimos nuestras vidas.

                Porque es innegable: si para nosotros (humanos) la Navidad supone un estrés por diversos motivos (la compra de regalos para la que dimos ideas hace unos días, preparar los menús, hacer que nuestra mesa luzca y deje huella, etc), ellos nos viven ajenos a ese nerviosismo que se vive en muchos hogares y a todas las consecuencias propias de las fechas: cambios de casa, algarabías y gentío alrededor, más ruido del habitual, etc.
                
                Precisamente porque estas cosas son propias de la época, es importante tener en cuenta algunos consejos para cuidar nuestras mascotas en Navidad. Unos cuidados que persiguen, únicamente, un objetivo: que disfrute (como nosotros) estas fechas velando por su bienestar.</p>
              </div>
              <div class="referencias">
                <p>Referencias:
                https://verdecora.es/blog/cuidados-mascotas-navidad
                </p>
              </div>
              <div class="comentariosmegusta">
                <div class="row">
                  <div class="col-1 like">
                    <img class="buttons" src="/assets/iconos/Like.png" alt="Like">
                  </div>
                  <p class="col-2 text-left mt-3">27</p>
                  <div class="col-1 comment">
                    <img class="buttons" src="/assets/iconos/Comment.png" alt="Comment">
                  </div>
                  <p class="col-2 text-left mt-3">3</p>
                  <div class="col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" id="cerrarnota">Cerra</button>
          </div> <!--Se cierran botones Cerrar-->
        </div>
      </div>

    </div>
  </div>
</div>
            `;


}