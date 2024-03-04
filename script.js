// console.log("Welcome to spotify");
// // Initialize the variables
// let songIndex = 0;
// let audioElement = new Audio('songs/1.mp3');
// let MasterPlay = document.getElementById('MasterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

// let songs = [
//     {songName: "Gumaan", filepath: "songs/1.mp3" , coverpath: "covers/1.jpg"},
//     {songName: "Downers At Dusk", filepath: "songs/2.mp3" , coverpath: "covers/2.jpg"},
//     {songName: "Happy Hour", filepath: "songs/3.mp3" , coverpath: "covers/3.jpg"},
//     {songName: "Afsanay", filepath: "songs/4.mp3" , coverpath: "covers/4.jpg"},
//     {songName: "Been a While", filepath: "songs/5.mp3" , coverpath: "covers/5.jpg"},
//     {songName: "Open letter", filepath: "songs/6.mp3" , coverpath: "covers/6.jpg"},
// ]

// songItems.forEach((element, i)=> {
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })

// //Handleplay/pause click
// MasterPlay.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         MasterPlay.classList.remove('fa-circle-play');
//         MasterPlay.classList.add('fa-circle-pause');
//     }
//     else{
//         audioElement.pause();
//         MasterPlay.classList.remove('fa-circle-pause');
//         MasterPlay.classList.add('fa-circle-play');
//     }
// })

// // Listen to Events
// audioElement.addEventListener('timeupdate', ()=>{ 
//     // Update Seekbar
//     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
//     myProgressBar.value = progress;

// })

// myProgressBar.addEventListener('change', ()=>{
//     audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
// })

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
//     element.addEventListener('click', (e)=>{
//       makeAllPlays();
//       songIndex = parseInt(e.target.id);
//       e.target.classList.remove('fa-circle-play');
//       e.target.classList.add('fa-circle-pause');
//       audioElement.src = `songs/${songIndex+1}.mp3`
//       audioElement.currentTime = 0;
//       audioElement.play();
//       MasterPlay.classList.remove('fa-circle-play');
//       MasterPlay.classList.add('fa-circle-pause');
      
//     })
// })

// document.getElementById('next').addEventListener('click', ()=>{
//     if(songIndex>=6){
//         songIndex = 0
//     }
//     else{
//         songIndex += 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`
//     audioElement.currentTime  = 0;
//     audioElement.play();
//     MasterPlay.classList.remove('fa-circle-play');
//     MasterPlay.classList.add('fa-circle-pause');
// })

// document.getElementById('previous').addEventListener('click', ()=>{
//     if(songIndex<=0){
//         songIndex = 0
//     }
//     else{
//         songIndex -= 1;
//     }
//     audioElement.src = `songs/${songIndex+1}.mp3`;
//     audioElement.currentTime  = 0;
//     audioElement.play();
//     MasterPlay.classList.remove('fa-circle-play');
//     MasterPlay.classList.add('fa-circle-pause');
// })

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio();
let MasterPlay = document.getElementById('MasterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Gumaan", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songName: "Downers At Dusk", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songName: "Happy Hour", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songName: "Afsanay", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songName: "Been a While", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songName: "Open Letter", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
MasterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.pause();
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
    }
});

// Function to play a specific song
function playSong(index) {
    audioElement.src = songs[index].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
    makeAllPlays();
    document.getElementById(index).classList.remove('fa-circle-play');
    document.getElementById(index).classList.add('fa-circle-pause');
}

// Event listener for songItemPlay icons
songItems.forEach((element, index) => {
    element.querySelector('.songItemPlay').addEventListener('click', () => {
        playSong(index);
    });
});

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex--;
    } else {
        songIndex = songs.length - 1;
    }
    playSong(songIndex);
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex++;
    } else {
        songIndex = 0;
    }
    playSong(songIndex);
});

MasterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
    } else {
        audioElement.paused();
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
    }
});

function makeAllPlays() {
    songItems.forEach((element) => {
        element.querySelector('.songItemPlay').classList.remove('fa-circle-pause');
        element.querySelector('.songItemPlay').classList.add('fa-circle-play');
    });
}

playSong(songIndex);