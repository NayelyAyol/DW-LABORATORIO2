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

// ARREGLOS
console.log("=============== ARREGLOS ===============");
const publicaciones = [
  {
    titulo: "After a tough week",
    fecha: "2025-10-06",
    likes: 5300000,
  },
  {
    titulo: "Up next. Send good vibes",
    fecha: "2025-09-04",
    likes: 1800000,
  },
  {
    titulo: "Roscoe forever ",
    fecha: "2025-09-29",
    likes: 1700000,
  }
];

console.log("------ PUBLICACIONES ------");
console.log(publicaciones);

// MÉTODO MAP
const resumenPublicaciones = publicaciones.map((p) => {
  return {
    titulo: p.titulo,
    popular: p.likes > 10000000 ? "Sí" : "No"
  };
});
console.log("------ RESUMEN DE PUBLICACIONES ------");
console.log(resumenPublicaciones);

console.log("\n")


// Arreglos
const posts = [
    {
        id: 1,
        link: "/alfonsoespinosadelosmonteros/reel/DPmu7F3knDW/",
        description: "#tbt ¿Recuendan este programa? #QuienQuiereSerMillonario #donalfonso #alfonsoespinosadelosmonteros",
        img: "https://scontent.cdninstagram.com/v/t51.71878-15/563441030_1188040883381293_5439498983644556853_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzczOTg4MjkxMTQ2NzQ2Njk2Ng%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=YVlcHskWg9gQ7kNvwF03Gm1&_nc_oc=AdlAhgPG_mtDu2DFIlU9Tgt1YEO-3eear0ylaZrA8m_HXnTPFOf2l59_ckcm4iilETY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tZ76iC_hGJG4HA7JIPGCQw&oh=00_AfcrtqkXB57AYmJx0OW_rWj3UY0-Q__qDl3uCYgwW2AA7w&oe=68F0FAC4"
    },
    {
        id: 2,
        link: "/alfonsoespinosadelosmonteros/reel/DPVM0VADL9O/",
        description: "💪 #donalfonso #alfonsoespinosadelosmonteros #liderpleno",
        img: "https://scontent.cdninstagram.com/v/t51.71878-15/559253039_1832377038155208_7478978812594119582_n.jpg?stp=dst-jpegr_e15_tt6&_nc_cat=110&ig_cache_key=MzczNDk0NzgzODQ5NDAzMTY5NA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2Lmhkci5DMyJ9&_nc_ohc=y9GrFkKx1O0Q7kNvwGgqwOS&_nc_oc=AdmQW7qX92-gyhSvY9eLJh0shs7Jz_4Qu05Kn_fRS-qZqJvC_9XAsinHted2tyKLE5o&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=-1&_nc_ht=scontent.cdninstagram.com&_nc_gid=tZ76iC_hGJG4HA7JIPGCQw&oh=00_Aff8rtBpEnpFlfiZIbBfbXdEAgcTyF3AhWqDGdsb6nOPSQ&oe=68F0FFFC"
    },
    {
        id: 3,
        link: "/alfonsoespinosadelosmonteros/reel/DPBtE11jlm_/",
        description: "Un mensaje de paz y unidad",
        img: "https://scontent.cdninstagram.com/v/t51.71878-15/553311922_1125312246244358_4759995586627669678_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzcyOTQ2MDIxMTIxNzIyNjE3NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=8ITyzH935rcQ7kNvwFtD-vB&_nc_oc=Adl4Ky-k_83CoLCbHFIIxeJT1sVh8j0OTbbmWOdQlfQ9AoMCmpSF8kuqGhDBI3MssGc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=tZ76iC_hGJG4HA7JIPGCQw&oh=00_AfeJp0YTpUKVyi2C-RLGrsnZWhbpiXy90hwrwzdRj_oiaw&oe=68F0FDFB"
    }
]

const postsDescriptions = posts.map( post => post.description ); // Extrae solo las descripciones de los posts
console.log("------ DESCRIPCIONES DE POSTS ------");
postsDescriptions.forEach((desc, i) => {
  console.log(`${i+1}. ${desc}`);
});

console.log("\n");

//Arreglo de los tres primeros comentarios
const comentarios = [
{
  usuario: "cristian.r4moss",
  comentario: "El unico palito en toda la playa y te lo llevas por delante",
  fecha: "2025-09-30",
  likes: 8424
},
{
  usuario: "cajlo.2",
  comentario: "Por andar descalzo",
  fecha: "2025-09-30",
  likes: 3164
}
, 
{
  usuario: "andres_gigena10",
  comentario: "No puso ni las manos",
  fecha: "2025-09-30",
  likes: 1147
}                   
]

const usuarioComentario = comentarios.map(item => ({
  usuario: item.usuario,
  comentario: item.comentario
}));

console.log("------ COMENTARIOS DE USUARIOS ------");
usuarioComentario.forEach((c, i) => {
  console.log(`${i+1}. ${c.usuario}: "${c.comentario}"`);
});