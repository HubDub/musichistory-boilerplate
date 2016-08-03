// var songs = [];

// songs[songs.length] = "The Story > by Brandi Carlile on the album The Story";
// songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
// songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
// songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
// songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
// songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
// songs[songs.length] = "Run to the Hills > by Iron Maiden on the album The Number of the Beast";

// var removeCharArray = [];
// for (i = 0; i < songs.length; i++) {
//   removeCharArray.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

// }
// console.log(removeCharArray);

//or you could do
//  songs[i] = songs.replace(">", "-");
//for each item you don't like

// removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

// var finalSongBox = document.getElementById("songBox");
// var finalSongArray = [];
// for (i = 0; i < removeCharArray.length; i++) {
//   finalSongArray.push(removeCharArray[i].replace(">", "-"));
//     finalSongBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
// };
// console.log(finalSongArray);

//or you can use .replace(/>/g, "-")
//g is the global scope

//IIFY to pull the first bunch of songs
var musicHistory = (function () {
  var songs = [];
  return {
    loadSongs: function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "music.json");
      xhr.addEventListener("load", function(evt) {
        songs = JSON.parse(evt.target.responseText).songs;
        console.log(songs);
        callback(songs);
      });
    xhr.send();
    },
    getSongs: function () {
      return songs
    },
    addSong: function (song) {
      songs.push(song)
      return songs
    }
  }
}());

function showSongs(songs) {
  console.log("showSongs is here")
  var finalSongBox = document.getElementById("songBox");
  console.log("showsongs", songs);
  // for (i = 0; i < songs.length; i++) {
  songs.forEach (function(song) {
    finalSongBox.innerHTML += `<p> ${song.songName} by ${song.artistName} on the album ${song.albumName}  <button id="deleteButton">delete</button></p>`
  })
}


//end of pulling and displaying first load of songs

//pulling and displaying second load of songs

// var musicHistory2 = (function () {
//   var songs = [];
//   return {
//     getSongs2: function (callback) {
//       var xhr = new XMLHttpRequest();
//       xhr.open("GET", "music2.json");
//       xhr.addEventListener("load", function(evt) {
//         songs = JSON.parse(evt.target.responseText);
//         console.log(songs);
//         callback(songs);
//       });
//     xhr.send();
//     }
//   }
// }());

// function showSongs2(songs) {
//   console.log("showSongs is here")
//   var finalSongBox = document.getElementById("songBox");
//   console.log("showSongs2", songs);
//   for (i = 0; i < songs.length; i++) {
//     finalSongBox.innerHTML += `<p> ${songs[i]}   <button id="deleteButton">delete</button></p>`
//   }
//   document.getElementById("submitButton").classList.add("hidden");
// };
//end of pulling and displaying 2nd load of songs

//function for user to add songs
document.getElementById("submitButton").addEventListener("click", function (event) {
    console.log(event);
    var songNameInput = document.getElementById("songName").value;
    var artistNameInput = document.getElementById("artistName").value;
    var albumNameInput = document.getElementById("albumName").value;
    console.log(songNameInput);
    console.log(artistNameInput);
    console.log(albumNameInput);
    var newSong = {"songName": songNameInput, "artistName": artistNameInput, "albumName": albumNameInput};
    console.log(newSong);
    var songs = musicHistory.addSong(newSong);
    console.log(songs);
    var finalSongBox = document.getElementById("songBox");
    finalSongBox.innerHTML = " ";
    // for (i = 0; i < songs.length; i++) {
    songs.forEach (function(song) {
      finalSongBox.innerHTML += `<p> ${song.songName} by ${song.artistName} on the album ${song.albumName}  <button id="deleteButton">delete</button></p>`
    })
  document.getElementById("songName").value = "";
  document.getElementById("artistName").value = "";
  document.getElementById("albumName").value = "";
  })


//call the first round of songs IIFE
musicHistory.loadSongs(showSongs);

//delete buttons on individual songs on list
document.getElementById("songBox").addEventListener("click", function(event) {
  console.log(event);
  if (event.target.id === "deleteButton") {
    console.log("you've clicked delete button");
    event.target.parentElement.remove();
  }
});

//more songs button - fires second IIFE
document.getElementById("moreSongs").addEventListener("click", function(event) {
  console.log(event);
  console.log("you clicked more songs");
  // musicHistory2.getSongs2(showSongs2);
})

