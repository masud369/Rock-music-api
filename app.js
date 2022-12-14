
document.getElementById("search").addEventListener("click", () => {
    // document.getElementById("d-none").innerHTML = "";
    let songSearch = document.getElementById("song-search").value;
    const url = `https://api.lyrics.ovh/suggest/${songSearch}`;
    fetch(url)
        .then(res => res.json())
        .then((res) => {
            // callData(res);
            // console.log(info.data);
            const infos = res.data;
            const parentDiv = document.getElementById("parent");
                parentDiv.innerHTML = "";
            infos.forEach(element => {
                console.log(element);
                console.log(element.artist.name);
                console.log(element.artist.preview);
                // titleNname(element.album.title, element.artist.name);
                
                const newDiv = document.createElement("div");
                // newDiv.innerHTML = " ";
                newDiv.className = "single-result row align-items-center my-3 p-3 ";
                // newDiv.style.display = "flex";
                // newDiv.innerHTML = "";
                newDiv.innerHTML = `<div class="col-md-9">
                    <h3 class="lyrics-name">${element.album.title}</h3>
                        <p class="author lead">Album by <span>${element.artist.name} Out</span></p>
                        <audio controls>
                             <source src="${element.preview}" type="audio/mpeg">
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="callLyric('${element.artist.name}' ,'${element.album.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>`;
                parentDiv.appendChild(newDiv);

            })
            document.getElementById("song-search").value = "";

        });
});
    const callLyric = (artist,title) => {
        fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res=>res.json())
        .then((res)=>{showLyrics(res.lyrics)})
        // console.log(artist );
    }

    const showLyrics = (lyric)=>{
        document.getElementById("show-lyric").innerText = lyric;
    }


    // const titleNname = (title, name) => {

    //     const parentDiv = document.getElementById("parent");
    //     const newDiv = document.createElement("div");
    //     newDiv.className = "single-result row align-items-center my-3 p-3 ";
    //     // newDiv.style.display = "flex";
    //     newDiv.innerHTML = "";
    //     newDiv.innerHTML = `<div class="col-md-9">
    //         <h3 class="lyrics-name">${title}</h3>
    //             <p class="author lead">Album by <span>${name} Out</span></p>
    //         </div>
    //         <div class="col-md-3 text-md-right text-center">
    //             <button class="btn btn-success">Get Lyrics</button>
    //         </div>`;
    //     parentDiv.appendChild(newDiv);

    // }


