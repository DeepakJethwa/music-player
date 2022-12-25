const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [{
    name:"jethwa-1",
    title: "The Train Music",
    artist: "Ravi Shankar",
},
{
    name : "jethwa-2",
    title : "Hachiko music",
    artist : "Jan A.P. Kaczmarek",
},
{
    name : "jethwa-3",
    title : "Ekla Chlo Re",
    artist : "Rabindranath Tagore",
},
];


let isplaying = false;

//for play function
const playMusic = () => {
isplaying = true;
music.play();
play.classList.replace("fa-play", "fa-pause");
img.classList.add("anime");
};

// for pause function
const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
    };

    play.addEventListener("click", () => {
        // if(isplaying){
        //     pauseMusic();
        // }else{
        //     playMusic();
        // }

        isplaying ? pauseMusic() : playMusic();
       
        });


        const loadsong =(songs) => {
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "music/"+ songs.name + ".mp3";
            img.src = "Image/" + songs.name + ".jpg";
            };
            songIndex = 0;
            
            // loadsong(songs[2]);
            
            const nextSong = () => {
                songIndex = (songIndex +1) % songs.length;
                loadsong(songs[songIndex]);
                playMusic();
            };
            const preVSong =() => {
                songIndex = (songIndex - 1 +songs.length) % songs.length;
                loadsong(songs[songIndex]);
                playMusic();
            };
            
            next.addEventListener('click', nextSong);
            prev.addEventListener('click', preVSong);
            