const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const playlistName = document.getElementById('playlist-title');
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const currentProgress = document.getElementById('current-progress');
const progressContainer = document.getElementById('progress-container');
const songTime = document.getElementById('song-time');
const totalTime = document.getElementById('total-time');



const SerenataExistencialista = {
    playlistName : 'Playlist Animada',
    songName : 'Serenata Existencialista',
    artist : 'Grilo',
    File : 'Serenata_Existencialista'
};
const ButNotForMe = {
    playlistName : 'Playlist Jazz',
    songName : 'But Not For Me',
    artist : 'Chet Baker',
    File : 'But_Not_For_Me'
};
const CantTakeMyEyesOffYou = {
    playlistName : 'Playlist Lofi',
    songName : 'Can\'t Take My Eyes Off You',
    artist : 'Aiivawn',
    File : 'Cant_Take_My_Eyes_Off_You'
};
let isPlaying = false;
const playlist = [SerenataExistencialista, ButNotForMe, CantTakeMyEyesOffYou];
let index = 0;


function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider(){
    if(isPlaying === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializeSong(){
    cover.src = `images/${playlist[index].File}.jpg`;
    song.src = `songs/${playlist[index].File}.mp3`;
    playlistName.innerText = playlist[index].playlistName;
    songName.innerText = playlist[index].songName;
    bandName.innerText = playlist[index].artist;
}

function previousSong() {
    if(index === 0){
        index = playlist.length - 1;
    }
    else{
        index -= 1;
    }
    initializeSong();
    playSong();
}

function nextSong() {
    if(index === playlist.length - 1){
        index = 0;
    }
    else{
        index += 1;
    }
    initializeSong();
    playSong();
}
 
function updateProgress() { 
    const barWidth = (song.currentTime/song.duration)*100;
    currentProgress.style.setProperty('--progress', `${barWidth}%`)
    songTime.innerText = toHHMMSS(song.currentTime);
}

function jumpTo(event) {
    const width = progressContainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width)* song.duration;
    song.currentTime = jumpToTime;
}

function nextMusic() {
    nextSong();
}

function toHHMMSS(originalNumber) {
    let hours = Math.floor(originalNumber / 3600);
    let min = Math.floor((originalNumber - hours * 3600) / 60);
    let secs = Math.floor(originalNumber - hours * 3600 - min * 60);

    return `${hours.toString().padStart(2, '0')}:${min
    .toString()
    .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

  function updateTotalTime() {
    totalTime.innerText = toHHMMSS(song.duration);
}

initializeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);
song.addEventListener('timeupdate', updateProgress);
song.addEventListener('ended', nextMusic);
song.addEventListener('loadedmetadata', updateTotalTime)
progressContainer.addEventListener('click', jumpTo);