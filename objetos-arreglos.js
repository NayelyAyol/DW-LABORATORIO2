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

console.log(name, username, typeOfUser);

// Objetos simples para utilizar el spread operator
const user1 = {
    name: "Don Alfonso",
    username: "alfonsoespinosadelosmonteros",
    biography: "Periodista Récord Guiness Abuelo orgulloso Mentor de Comunicación y Liderazgo 👇desarrolla tu marca personal dojo.team/compra-its-my-brand",
    profilePicture: "https://instagram.fuio1-2.fna.fbcdn.net/v/t51.2885-19/264653782_3148309435438404_6051020566149516571_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDAwLmMyIn0&_nc_ht=instagram.fuio1-2.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QFy2xTzJRYhVDmAmjxjHfh-G6mKGOY5sm_6I_xVk7ReDzAfj20fMnkueIRGw5TNITE&_nc_ohc=IoQbMj9URksQ7kNvwGxrxoY&_nc_gid=nlT5r5HIKP4dmW3XX2PWQg&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfcmZ1-uVrDyE7Dv0hkx4IK__j3hyE2PpxJg75LxdXpaFA&oe=68F10E4B&_nc_sid=22de04",
    typeOfUser: "Figura pública"
}

const stats1 = {
    "posts": 372,
    "followers": 483000,
    "following": 100
}

// Spread operator para combinar objetos

let userInfo = {...user1, ...stats1};
console.log(userInfo);

// Verifica si una propiedad existe en un objeto
console.log(Object.keys(userInfo).includes("verified"));
// Devolverá falso ya que en el objeto user no existe la propiedad "verified"

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
console.log(postsDescriptions); // Imprime en consola las descripciones