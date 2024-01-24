// Descrizione

// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.

// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// Non è necessario creare date casuali

// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// BONUS:
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).

// Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

// Consigli del giorno:
// Ragioniamo come sempre a step. Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice. console.log() è nostro amico. Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.



const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts)

// const containerPosts = document.getElementById('container')

// const likedPosts = [];





const containerHtml = document.getElementById("container")

// ciclo forEach per inserire i post nell'HTML
posts.forEach((element,index) => {

    // destruttura l'array di oggetti per non andare a scrivere sempre la parola element
    const { id, content, media, author, likes, created} = element

    containerHtml.innerHTML +=

    `<div class="post">

        <div class="post__header">

            <div class="post-meta">

                <div class="post-meta__icon">
                    
                    ${author.image ? immagineProfilo(author) : immagineProfiloDefault(author)}
                    
                </div>

                <div class="post-meta__data">
                    <div class="post-meta__author">${author.name}</div>
                    <div class="post-meta__time">${formattaData(created)}</div>
                </div>

            </div>

        </div>

        <div class="post__text">${content}</div>

        <div class="post__image">
            <img src="${media}" alt="">
        </div>

        <div class="post__footer">

            <div class="likes js-likes">

                <div class="likes__cta">

                    <a class="like-button  js-like-button" href="#" data-postid="${id}">

                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>

                    </a>

                </div>

                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                </div>

            </div>

        </div>

    </div>`


})





const likeButtons = document.querySelectorAll('.js-like-button')
const counterButtons = document.querySelectorAll('.js-likes-counter')

console.log(likeButtons,counterButtons)


// ciclo forEach per cambiare il colore al bottone e aumentare o diminuire il contatore
likeButtons.forEach((element, index) => {

    element.addEventListener("click", function(e){

        e.preventDefault()

        element.classList.toggle('like-button--liked')

        if( element.classList.contains( 'like-button--liked' ) ){

            posts[index].likes++

            counterButtons[ index ].innerHTML = posts[index].likes

            console.log(posts[index])

        } else {

            posts[index].likes--

            counterButtons[ index ].innerHTML = posts[index].likes

        }


        // soluzione alternativa
        // const postId = this.dataset.postid
        // console.log(postId)

        // const post = posts.find(post => post.id == postId)

        // const isLiked = !post.liked
        // post.liked = isLiked

        // console.log(post.liked)

        // const likeButtonLabel = this.querySelector('.like-button__label')
        // const likeButtonIcon = this.querySelector('.like-button__icon')
        // const likesCounter = document.getElementById(postId)


        // if (isLiked) {
        //     likeButtonLabel.classList.add('like-button--liked')
        //     likeButtonIcon.classList.add('like-button--liked')
        //     post.likes++

        //     likedPosts.push(postId)
        //     console.log(likedPosts)
        // } else {
        //     likeButtonLabel.classList.remove('like-button--liked')
        //     likeButtonIcon.classList.remove('like-button--liked')
        //     post.likes--
        // }

        // likesCounter.textContent = post.likes


    })

})


// Bonus per formattare la data in formato italiano
function formattaData( created ){

    // soluzione 1
    // const dateObj = new Date(created)
    // const day = dateObj.getDay().toString().padStart(2,'0')
    // const month = (dateObj.getMonth() + 1 ).toString().padStart(2,'0')
    // const year = dateObj.getFullYear()
    // const formattedDate = `${day} / ${month} / ${year}`
    // return formattedDate

    // soluzione 2
    // const dateObj = new Date(created)
    // const farmattedDate = dateObj.toLocaleDateString('it-IT')


    // soluzione 3
    return created.split( '-' ).reverse().join( '/' )
}



// Bonus per mettere le iniziali nella immagine del profilo quando non è presente
function immagineProfilo(author){

    const { name, image} = author

    return `<img class="profile-pic" src='${image}' alt='${name}'></img>`
}

function immagineProfiloDefault(author){

    const { name } = author

    const partiNome = name.split(' ')

    console.log(partiNome)

    const letters = []

    partiNome.forEach ( (element,index) => {

        console.log(element)

        const letteraIniziale = element[0]
        letters.push(letteraIniziale)
    })

    console.log(letters)

    const iniziali = letters.join('')

    return `
        <div class="profile-pic-default">
            <span> ${iniziali}</span>
        </div>
    `
}