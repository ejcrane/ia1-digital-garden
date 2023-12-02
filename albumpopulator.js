const jsonURL = "./data.json";

async function getAlbum(albumtitle) {
    const response = await fetch(jsonURL);
    const albums = await response.json();

    for (let i=0; i < albums.length; i++) {
        if (albums[i].id === albumtitle) {
            return albums[i];
        }
    }
}

async function populate() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryTitle = urlParams.get("albumtitle");

    const album = await getAlbum(queryTitle);

    const titleSection = document.getElementById("albumtitle");
    // const ratingSection = document.getElementById("rating");
    const descriptionSection = document.getElementById("description");
    const imageSection = document.getElementById("albumcover");
    const songSection = document.getElementById("songlist");

    titleSection.innerHTML = album.albumtitle;
    // ratingSection.innerHTML = album.rating;
    descriptionSection.innerHTML = album.description;
    imageSection.src = album.image
    
    for (let i=0; i < album.songs.length; i++) {
        let song = document.createElement("li");
        let link = document.createElement("a");
        link.textContent = album.songs[i].songname;
        link.href = album.songs[i].link;
        song.appendChild(link);
        songSection.appendChild(song);
    }
}

populate()