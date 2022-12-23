// Creamos un evento para que al momento de dar clic a m boton, toda la informacion de mi usuario se mande a mi servidor (localhost:8080)

document.getElementById("botonEnviar").addEventListener("click", function() {
    let nombreUsuario = document.getElementById("name");
    let apellidoUsuario = document.getElementById("lastName");
    let emailUsuario = document.getElementById("email");
    let passwordUsuario = document.getElementById("password");
    let usernameUsuario = document.getElementById("inlineFormInputGroup");

    // Tomamos el valor del input que tenemos en nuestro formulario. Para esto, usaremos el .value para tomar ese dato.

    console.log(nombreUsuario.value);
    console.log(apellidoUsuario.value);
    console.log(emailUsuario.value);
    console.log(passwordUsuario.value);
    console.log(usernameUsuario.value);
    
    // Ya que tenemos los datos del input vamos a crear una constante llamada datos (puede tener cualquier nombre), esta variable se va a encargar de recopilar todos los datos de nuestro formulario (.value). Una vez que tengamos esta informacion recopilada la vamos a enviar a nuestro servidor.

    const datos = {
        name : nombreUsuario.value,
        lasName : apellidoUsuario.value,
        email : emailUsuario.value,
        password : passwordUsuario.value,
        username : usernameUsuario.value
    };

    // Ya tenemos la constante, hay que enviarla al servidor
    // Metodo FETCH

    fetch("http://localhost:8080/api/usuarios/", {
        method: "POST", //porque envio información al servidor
        headers:{
            
            "Content-Type": "application/json" //Le decimos que el tipo de contenido es JSON
        },
        body: JSON.stringify(datos) //el cuerpo de la solicitud debe cambiarse a string para leerse
    })
    .then((response) => response.text()) //Es la respuesta que nos da el servidor, se hace asi por si en algun momento queremos mostrarlo en pantalla (InnerHTML o textContent)
    .then((datos) => { // Para mostrar si la conexion con servidor fue exitosa
        console.log("Datos del usuario enviados al servidor", datos);
        alert("Registro exitoso");
    })
    .catch((error) => {
        console.log("Datos del usuario enviados al servidor", error);
        alert("Registro exitoso");
    });
})