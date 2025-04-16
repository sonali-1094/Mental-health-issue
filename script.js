const solutions = {
    anxiety: "Practice deep breathing, meditation, and limit caffeine intake. Engage in physical activities like yoga or running.",
    depression: "Stay connected with loved ones, set small daily goals, and consider therapy or professional help.",
};

const shlokas = [
    "ॐ सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।",
    "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।",
    "सर्वं ज्ञानं मयि वर्तते।",
];

function showSolution(issue) {
    document.getElementById(`${issue}-solution`).innerText = solutions[issue];
}

function playMusic() {
    document.getElementById("meditation-music").play();
}

function stopMusic() {
    document.getElementById("meditation-music").pause();
}

function showTherapy() {
    document.getElementById("therapy-solution").innerText = "You can consult a therapist or use online counseling services like BetterHelp, TalkSpace, or Practo.";
}

function showShloka() {
    const randomIndex = Math.floor(Math.random() * shlokas.length);
    document.getElementById("shloka-text").innerText = shlokas[randomIndex];
}


let timeLeft = 60;
    let timerElement = document.getElementById("timer");
    let countdown;
    let isRunning = false;

    function updateDisplay() {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;

      timerElement.textContent = `${minutes}:${seconds}`;
    }

    function startTimer() {
      if (isRunning) return;

      isRunning = true;
      countdown = setInterval(() => {
        if (timeLeft <= 0) {
          clearInterval(countdown);
          timerElement.textContent = "Time's up!";
          isRunning = false;
        } else {
          timeLeft--;
          updateDisplay();
        }
      }, 1000);
    }

    function resetTimer() {
      clearInterval(countdown);
      timeLeft = 60;
      isRunning = false;
      updateDisplay();
    }

    const songs = [
      { title: "Relaxing Music", file: "musicsong 3.mp3" },
      { title: "Calm Shloka", file: "musicsong4.mp3" },
      { title: "Peaceful Melody", file: "musicsongs1.mp3.mp3" }
  ];
  
  
  let currentSong = 0;
  const audio = document.getElementById("player");
  const title = document.getElementById("songTitle");
  
  function loadSong(index) {
      audio.src = songs[index].file;
      title.textContent = "Now Playing: " + songs[index].title;
  }
  
  function playSong() {
      audio.play();
  }
  
  function pauseSong() {
      audio.pause();
  }
  
  function nextSong() {
      currentSong = (currentSong + 1) % songs.length;
      loadSong(currentSong);
      playSong();
  }
  
  function prevSong() {
      currentSong = (currentSong - 1 + songs.length) % songs.length;
      loadSong(currentSong);
      playSong();
  }
  
  // Load first song on page load
  window.addEventListener("DOMContentLoaded", () => {
      loadSong(currentSong);
  });
  