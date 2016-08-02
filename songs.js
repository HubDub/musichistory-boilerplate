var songs = [];

songs[songs.length] = "The Story > by Brandi Carlile on the album The Story";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Run to the Hills > by Iron Maiden on the album The Number of the Beast";

var removeCharArray = [];
for (i = 0; i < songs.length; i++) {
  removeCharArray.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

}
console.log(removeCharArray);
//or you could do
//  songs[i] = songs.replace(">", "-");
//for each item you don't like

// removeChar.push(songs[i].replace(/[^a-z0-9\s\>]/gi, ""))

var finalSongBox = document.getElementById("songBox");
var finalSongArray = [];
for (i = 0; i < removeCharArray.length; i++) {
  finalSongArray.push(removeCharArray[i].replace(">", "-"));
    finalSongBox.innerHTML += `<p> ${finalSongArray[i]}</p>`
};
console.log(finalSongArray);

//or you can use .replace(/>/g, "-")
//g is the global scope

