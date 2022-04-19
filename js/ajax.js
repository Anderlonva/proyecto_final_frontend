

let canciones = [];

function cargarDatos(){

    var peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://127.0.0.1:5500/datos.json');

    peticion.onload = function (){

        let respuesta = JSON.parse(peticion.responseText);
      //  console.log(respuesta) // esta es la que aparece en consola
       // console.log(respuesta.canciones[2].nombre)  // esta es la que aparece en consola

      let reproducciones_ordenadas = respuesta.canciones.sort((x,y) => {

        return y.reproducciones - x.reproducciones   // ordenar de mayor a menor, menor a mayor x - y  
                                                    
      })

      reproducciones_ordenadas;
        

      //console.log(reproducciones_ordenadas)



        // Top mas sonadas 
        // # 1
        document.getElementById("masSonada1").innerText = respuesta.canciones[0].nombre;
        //audio1.src = "./canciones/" + respuesta.canciones[0].ruta
        var audio1 = document.createElement("audio");
        audio1.src = "./canciones/" + respuesta.canciones[0].ruta;
        document.getElementById("audio1").src = audio1.src;

      // #2
         document.getElementById("masSonada2").innerText = respuesta.canciones[1].nombre;
         var audio2 = document.createElement("audio");
        audio2.src = "./canciones/" + respuesta.canciones[1].ruta;
        document.getElementById("audio2").src = audio2.src;

      // #3
         document.getElementById("masSonada3").innerText = respuesta.canciones[2].nombre;
         var audio3 = document.createElement("audio");
         audio3.src = "./canciones/" + respuesta.canciones[2].ruta;
         document.getElementById("audio3").src = audio3.src;
   


    };

    peticion.send();
}

cargarDatos();
reload() // se pone reload ya que si el top 3 cambia de canciones necesita recargarce.

