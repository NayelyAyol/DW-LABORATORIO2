//-------LABORATORIO 4--------//
// OBJETOS //
// INSTAGRAM - Lewis Hamilton
console.log("===============OBJETOS===============")
const perfilLewis = {
  nombreUsuario: "lewishamilton",
  nombreCompleto: "Lewis Hamilton",
  profesion : "Piloto de fórmula 1",
  nacionalidad : "Británica",
  seguidores : 41400000,
  publicaciones : 1581,
  escuderia :{
    nombre : "Scuderia Ferrari HP",
    sede : "Maranello, Italia",
    parejaPiloto : "Charles Leclerc",
    ingenieroPrincipal : "Frédéric Vasseur"
  },
  descripcion : "Man on many missions",
  mostrarInfo() {
    return `Perfil: ${this.nombreCompleto} (${this.nombreUsuario}) - ${this.profesion}`;
  }
};


let ultimaPublicacion = {
  id : 1581,
  titulo : "Lego portrait of Roscoe",
  fecha :"2025-10-10",
  descripcion : "This lego portrait of Roscoe really touched me. The amount of detail in it is incredible and I can’t imagine how long it took. Thank you to Karen and Ilona for making this and sending it to me.",
  estadisticas : {
    likes : 4200000,
    comentarios : 12100000,
    compartidos : 67100000,
    guardados : 140000
  },
};

console.log("------ PERFIL DE LEWIS HAMILTON ------");
console.log(perfilLewis);

console.log("------ ESCUDERÍA ------");
console.log(perfilLewis.escuderia);

console.log("------ INFORMACIÓN CON MÉTODO ------");
console.log(perfilLewis.mostrarInfo());

console.log("------ PUBLICACIÓN DESTACADA ------");
console.log(ultimaPublicacion);

console.log("Likes de la publicación:", ultimaPublicacion.estadisticas.likes);

console.log("\n")

// Objetos
// Objeto que representa un usuario de Instagram
const user = {
    name: "Don Alfonso",
    username: "alfonsoespinosadelosmonteros",
    biography: "Periodista Récord Guiness Abuelo orgulloso Mentor de Comunicación y Liderazgo 👇desarrolla tu marca personal dojo.team/compra-its-my-brand",
    profilePicture: "https://instagram.fuio1-2.fna.fbcdn.net/v/t51.2885-19/264653782_3148309435438404_6051020566149516571_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDAwLmMyIn0&_nc_ht=instagram.fuio1-2.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFy2xTzJRYhVDmAmjxjHfh-G6mKGOY5sm_6I_xVk7ReDzAfj20fMnkueIRGw5TNITE&_nc_ohc=IoQbMj9URksQ7kNvwGxrxoY&_nc_gid=nlT5r5HIKP4dmW3XX2PWQg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfcmZ1-uVrDyE7Dv0hkx4IK__j3hyE2PpxJg75LxdXpaFA&oe=68F10E4B&_nc_sid=22de04",
    typeOfUser: "Figura pública",
    "stats" : {
        "posts": 372,
        "followers": 483000,
        "following": 100
    }
}
