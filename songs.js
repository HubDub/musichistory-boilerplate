
//IIFY
var musicHistory = (function () {
  var songs = [];
  return {
    loadSongs: function () {
      $.ajax({
      url: 'https://music-history-ce03d.firebaseio.com/songs.json',
      }).done(function(songData) {
        showSongs(songData);
      });
    },
    addSong: function (song) {
      songs.push(song);
      return songs;
    },
    getSongs: function () {
      return songs
    },
    // loadMoreSongs: function (callback) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("GET", "music2.json");
    //   xhr.addEventListener("load", function(evt) {
    //     var songs2 = JSON.parse(evt.target.responseText).songs2;
    //     console.log(songs2);

    //     songs2.forEach(function (song) {
    //       songs.push(song)
    //     })

    //     callback(songs);
    //   });
    // xhr.send();
    // }
  }
}());
//this function augments the IIFE above. you could also make loadMoreSongs be a new function located within the musicHistory IIFE, but written like this it is an augmenting IIFE.
var musicHistory = (function (mh) {
  mh.loadMoreSongs = function (callback) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "music2.json");
      xhr.addEventListener("load", function(evt) {
        var newSongs = JSON.parse(evt.target.responseText).songs2;
        console.log(newSongs);

        newSongs.forEach(function (song) {
          mh.addSong(song)
        })

        var allSongs = mh.getSongs()
        callback(allSongs);
      });
    xhr.send();
    }
    return mh
}(musicHistory));

function showSongs(songs) {
  console.log("showSongs is here")
  var finalSongBox = document.getElementById("songBox");
  console.log("showsongs", songs);
  var clearSongBox = document.getElementById("songBox");
  clearSongBox.innerHTML = " ";
  for (var key in songs) {
    console.log(songs[key])
    console.log(songs[key].albumName)
    finalSongBox.innerHTML += `<p> ${songs[key].songName} by ${songs[key].artistName} on the album ${songs[key].albumName}  <button id="deleteButton">delete</button></p>`
  }
}

//more songs button - fires second function to get 2nd json
document.getElementById("moreSongs").addEventListener("click", function(event) {
  console.log(event);
  console.log("you clicked more songs");
  musicHistory.loadMoreSongs(showSongs);
});

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


//call the first round of songs IIFE - fires as page loads
musicHistory.loadSongs(showSongs);

//delete buttons on individual songs on list
document.getElementById("songBox").addEventListener("click", function(event) {
  console.log(event);
  if (event.target.id === "deleteButton") {
    console.log("you've clicked delete button");
    event.target.parentElement.remove();
  }
});


