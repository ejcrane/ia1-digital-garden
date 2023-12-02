const jsonURL = "./data.json";

async function getSong(songid) {
    const response = await fetch(jsonURL);
    const albums = await response.json();

    for (let i=0; i < albums.length; i++) {
        for (let j=0; j < albums[i].songs.length; j++) {
            if (albums[i].songs[j].id === songid) {
                return albums[i].songs[j]
            }
        }
    }
}

async function populate() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryTitle = urlParams.get("songid");

    const song = await getSong(queryTitle);

    const titleSection = document.getElementById("songtitle");
    const ratingSection = document.getElementById("rating");
    const descriptionSection = document.getElementById("description");
    const embedSection = document.getElementById("embed");
    // const songSection = document.getElementById("songlist");

    titleSection.innerHTML = song.songname;
    ratingSection.innerHTML = "rating: " + song.rating;
    descriptionSection.innerHTML = song.description;
    embedSection.innerHTML = song.embed;
    
    // for (let i=0; i < album.songs.length; i++) {
    //     let song = document.createElement("li");
    //     let link = document.createElement("a");
    //     link.textContent = album.songs[i].songname;
    //     link.href = album.songs[i].link;
    //     song.appendChild(link);
    //     songSection.appendChild(song);
    // }
}

populate()