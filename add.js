var addLink = document.getElementById("link-add");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  addView.classList.remove("hidden");
  // addView.classList.add("visible");
  homeView.classList.add("hidden");
  // homeView.classList.remove("visible");

});


document.getElementById("submitButton").addEventListener("click", function (event) {
  console.log(event);
  var songNameInput = document.getElementById("songName").value;
  var artistNameInput = document.getElementById("artistName").value;
  var albumNameInput = document.getElementById("albumName").value;
  console.log(songNameInput);
  console.log(artistNameInput);
  console.log(albumNameInput);
  var newSong = (songNameInput + " - by " + artistNameInput + " on the album " + albumNameInput);
  console.log(newSong);
  finalSongArray.push(newSong);
  console.log(finalSongArray);
  finalSongBox.innerHTML = " ";
  for (i = 0; i < finalSongArray.length; i++) {
    finalSongBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
  };
  document.getElementById("songName").value = "";
  document.getElementById("artistName").value = "";
  document.getElementById("albumName").value = "";
})

