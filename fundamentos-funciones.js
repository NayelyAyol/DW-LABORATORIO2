//------- LABORATORIO 3 - SPOTIFY --------//

// VARIABLES
var cantidadCancionesPopulares = 10;
let usuarioPremium = false;
const idArtistaSpotify = "0du5cEVh5yTK9QJze8zA0C";

// STRINGS
let nombreArtista = "Bruno Mars";
let nacionalidadArtista = "Estadounidense";

// NUMEROS ENTEROS
let seguidores = 75081755;
let oyentesMensuales = 113489800
let cantidadAlbumes = 5;
let proximasGiras = 2;
let rankingMundial = 2;

// FLOAT
let duracionCancionPopular = "3.1833";

// BOOLEANOS
let artistaVerificado = true;
let siguiendoArtista = true;

// ARRAYS
let generoMusical = ["Pop", "R&B", "Funk"];
let cincoCancionePopulares = ["Die With A Smile", "APT.", "Locked out of Heaven", "Just the Way You Are", "When I Was Your Man"];
let ciudadesTopOyentes = ["Jakarta", "Mexico City", "London", "São Paulo", "Quezon City"];

// ARRAY de las primeras 5 canciones populares
let detallesCanciones = [
  {
    titulo : "Die With A Smile",
    duracion : 4.1833,
    disponible : true,
  },
  {
    titulo : "APT.",
    duracion : 2.8167,
    disponible : true,
  },
  {
    titulo : "Locked out of Heaven",
    duracion : 3.8833,
    disponible : true,
  },
  {
    titulo : "Just the Way You Are",
    duracion : 3.6667,
    disponible : true,
  },
  {
    titulo : "When I Was Your Man",
    duracion : 3.55,
    disponible : true
  }
];

// CONDICIONALES
console.log("***************CONDICIONALES***************\n");
// 1) Verificar si el artista está en el top 5 de artistas más escuchados
rankingMundial<=5? console.log("El artista está en el top 5\n"): console.log("El artista no está dentro del top 5\n");
// 2) Verificar si el artista tiene proximas giras
proximasGiras !==0? console.log("El artista si tiene previsto próximas giras\n") :  console.log("El artista no tiene previsto próximas giras\n");
// 3) Verificar si el usuario sigue al artista
if(siguiendoArtista){
  console.log("El usuario sigue al artista\n");
}
else{
  console.log("El usuario no sigue al artista\n");
}

// BUCLES
console.log("****************** BUCLES******************\n");
// 1) Recorrer el array de canciones populares y mostrar cada una con su respectiva posición
for (let i = 0; i<cincoCancionePopulares.length; i++){
  console.log(`Canción ${i+1}: ${cincoCancionePopulares[i]}`);
}
console.log ("-------------------------------------------");
// 2) Recorrer el array de los géneros del artista para  mostrar cada uno en su respectiva posición
for(let z=0; z<generoMusical.length; z++){
  console.log(`Género ${z+1}: ${generoMusical[z]}`);
}
console.log ("-------------------------------------------");
// 3) Recorrer el array de las ciudades con más oyentes y mostrar cada una en su respectiva posición
ciudadesTopOyentes.forEach((ciudad, indice) => {
  console.log(`${indice + 1}. ${ciudad}`);
});

// FUNCIONES  
console.log("\n***************FUNCIONES***************\n");
// 1) Calcular el promedio de duración de las canciones
function calcularPromedioDuracion(canciones){
  let total = 0;
  for( let c of canciones){
    total += c.duracion;
  }
  let promedio = total / canciones.length;
  return promedio;
}
console.log(`Promedio de duración: ${calcularPromedioDuracion(detallesCanciones)} minutos`);
console.log ("-------------------------------------------");

// 2) Veificar si el usuario es premium
function verificarUsuarioPremium(usuarioPremium){
  if(usuarioPremium){
    console.log("El usuario es premium");
  }
  else{
    console.log("El usuario no es premium");
  }
}
verificarUsuarioPremium(usuarioPremium);
console.log ("-------------------------------------------");

// 3) Verificar si el artista es verificado
function verificarArtista(artistaVerificado){
  if(artistaVerificado){
    console.log("El artista es verificado");
  }
  else{
    console.log("El artista no es verificado");
  }
}
verificarArtista(artistaVerificado);
console.log ("-------------------------------------------");

// 4) Verificar si el artista tiene más de 20 millones de oyentes mensuales, con ternarios
function verificarOyentesMensuales(oyentesMensuales){
  oyentesMensuales > 20000000 ? console.log("El artista tiene más de 20 millones de oyentes mensuales") : console.log("El artista no tiene más de 20 millones de oyentes mensuales");
}
verificarOyentesMensuales(oyentesMensuales);
console.log ("-------------------------------------------");

// 5) Buscar una canción por su título
function buscarCancion(titulo){
  let encontrada = detallesCanciones.find(c => c.titulo === titulo);
  if(encontrada){
    console.log(`Canción encontrada: ${encontrada.titulo}, duración: ${encontrada.duracion} min`);
  } else {
    console.log("Canción no encontrada");
  }
}
buscarCancion("Bartolito el gallo");

