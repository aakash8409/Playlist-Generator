 // JavaScript function to generate playlist based on mood
 function generatePlaylist() {
  const mood = document.getElementById("mood").value;
  const playlistDiv = document.getElementById("playlist");

  let playlist = "";

  switch (mood) {
    case "happy":
      playlist = `
      <h3>Happy Playlist</h3>
      <ul>
        <li>"Jugnu" by Badshah and Nikhita Gandhis</li>
        <li>"Maiyya Mainu" by Sachet Tandon</li>
        <li>"Ude Dil Befikre" by Vishal-Shekhar, Benny Dayal, and Jaideep Sahni</li>
        <li>"Sau Aasmaan" by Neeti Mohan and Armaan Malik</li>
      </ul>
    `;
      break;
    case "sad":
      playlist = `
      <h3>Sad Playlist</h3>
      <ul>
        <li>"Phir Bhi Tumko Chaahunga" by Adele</li>
        <li>"When We Were Young" by Billie Eilish</li>
        <li>"Let Her Go" by Passenger</li>
      </ul>
    `;
      break;
    case "energetic":
      playlist = `
      <h3>Energetic Playlist</h3>
      <ul>
        <li>"Eye of the Tiger" by Survivor</li>
        <li>"Uptown Funk" by Mark Ronson ft. Bruno Mars</li>
        <li>"Stronger" by Kanye West</li>
      </ul>
    `;
      break;
    case "calm":
      playlist = `
      <h3>Calm Playlist</h3>
      <ul>
        <li>"Weightless" by Marconi Union</li>
        <li>"Thinking Out Loud" by Ed Sheeran</li>
        <li>"Bloom" by The Paper Kites</li>
      </ul>
    `;
      break;
    default:
      playlist = "<p>Please select a mood!</p>";
  }

  playlistDiv.innerHTML = playlist;
}