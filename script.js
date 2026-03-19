document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {name: 'Twice', image: 'images/17.png'},
        {name: 'Taylor Swift', image: 'images/16.png'},
        {name: 'Drake', image: 'images/18.png'},
        {name: 'Bad Bunny', image: 'images/19.png'},
        {name: 'BabyMetal', image: 'images/20.png'},
        {name: 'Alock', image: 'images/21.png'},
        {name: 'Gustavo Lima', image: 'images/22.png'},
    ];

    const albumData = [
        {name: 'Chill Vibes', artist: 'Artistas variados',image: 'images/14.jpeg'},
        {name: 'Pop Mix', artist: 'Artitas variados',image: 'images/2.png'},
        {name: 'Christmas Hits', artist: 'Artistas variados',image: 'images/1.jpeg'},
        {name: 'Esquenta Sertanejo', artist: 'Artistas variados',image: 'images/7.jpeg'},
        {name: 'Pagodeira', artist: 'Artistas variados',image: 'images/8.jpeg'},
        {name: 'Beast Mode', artist: 'Artistas variados',image: 'images/5.jpeg'},
        {name: 'All New Indie', artist: 'Artistas variados',image: 'images/13.jpeg'},
    ];

        const songsData = [
        {name: 'Chill Vibes CREIO QUE TU ÉS A CURA', artist: 'Gabriela Rocha',image: 'Songs\GABRIELA ROCHA - CREIO QUE TU ÉS A CURA (CLIPE OFICIAL) - Gabriela Rocha (youtube).mp3'},
        {name: 'Pop Mix', artist: 'Artitas variados',image: 'images/2.png'},
        {name: 'Christmas Hits', artist: 'Artistas variados',image: 'images/1.jpeg'},
        {name: 'Esquenta Sertanejo', artist: 'Artistas variados',image: 'images/7.jpeg'},
        {name: 'Pagodeira', artist: 'Artistas variados',image: 'images/8.jpeg'},
        {name: 'Beast Mode', artist: 'Artistas variados',image: 'images/5.jpeg'},
        {name: 'All New Indie', artist: 'Artistas variados',image: 'images/13.jpeg'},
    ];

    const artistsGrid =  document.querySelector('.artists-grid')

    const albumGrid = document.querySelector('.albums-grid')

    const songsGrid = document.querySelector('.songs-grid')

    artistsData.forEach (artists => {
        const artistsCard = document.createElement('div')
        artistsCard.classList.add('artists-card')

        artistsCard.innerHTML = `
        <img src="${artists.image}" alt="${artists.name}">
        <h3>${artists.name}</h3>
        <p>artista</p>
        `

        artistsGrid.appendChild(artistsCard)

    })

    albumData.forEach (albums => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${albums.image}" alt="${albums.name}">
        <h3>${albums.name}</h3>
        <p>${albums.artist}</p>
        `

        albumGrid.appendChild(albumCard)

    })
    

})