const obtenermemes = async()=>{
    const memesContainers = document.getElementById('list-memes')
    const memeTemplate = document.getElementById('meme')
    const request = await fetch("https://api.imgflip.com/get_memes")

    const respuesta = await request.json()
    console.log(respuesta.success) 
    console.log(respuesta.data.memes[0].url)

    respuesta.data.memes.slice(0,8).forEach(meme => {
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url;
        memesContainers.appendChild(newMemeCard);
    });

    memeTemplate.remove()
}

obtenermemes()