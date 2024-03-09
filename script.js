function togglePlayer() {
  var player = document.getElementById("player");
  var playPauseButton = document.getElementById("playPauseButton");
  var toggleButton = document.getElementById("toggleButton");

  if (player.style.display === "none") {
      player.style.display = "block";
      toggleButton.textContent = "Playlist Aleatória";
      if (!audio.paused) {
          playPauseButton.classList.remove("bi-play-circle");
          playPauseButton.classList.add("bi-pause-circle");
      }
  } else {
      player.style.display = "";
      toggleButton.textContent = "Playlist Aleatória";
  }

  if (audio.paused) {
    audio.play();
    playPauseButton.classList.remove("bi-play-circle-fill");
    playPauseButton.classList.add("bi-pause-circle-fill");
  }
  }
  var audio = document.getElementById("minhaPlaylist");
  var indiceAtual = [0];

function playPause() {
  var playPauseButton = document.getElementById("playPauseButton");
  if (audio.paused) {
      audio.play();
      playPauseButton.classList.remove("bi-play-circle-fill");
      playPauseButton.classList.add("bi-pause-circle-fill");
  } else {
      audio.pause();
      playPauseButton.classList.remove("bi-pause-circle-fill");
      playPauseButton.classList.add("bi-play-circle-fill");
  }
}

let currentTrackIndex = 0; // Variável para armazenar o índice da faixa atual

function proximaFaixa() {
    if (currentTrackIndex < playlist.length - 1) {
        currentTrackIndex++;
    } else {
        currentTrackIndex = 0;
    }
    
    audio.src = playlist[currentTrackIndex];
    audio.play();
    updateTrackInfo(currentTrackIndex); // Atualiza as informações da próxima faixa
    document.getElementById("playPauseButton").classList.remove("bi-play-circle-fill");
    document.getElementById("playPauseButton").classList.add("bi-pause-circle-fill");
}

function updateTrackInfo() {
var trackTitle = document.getElementById("trackTitle");
var trackArtist = document.getElementById("trackArtist");

// array com os nomes das músicas e dos artistas
var trackNames = [
  'Slow Down',
  'New Rules',
  'Spectrum',
  'Mwaki',
  'I KNOW (Remix)',
  'Turn Me On',
  'Space Diver',
  'Paris',
  'Ninetoes',
  'Pain For Ecstasy',
  'Get it Together',
  'Jamais Serão',
  'P.I.M.P',  
  'I Love it',
  'The London',
];

var trackArtists = [
  'Vintage Culture',
  'Dua Lipa',
  'Marco Generani',
  'Sofiya Nzau',
  'Alx Yav',
  'Black Coffee',
  'Boris Brejcha',
  'Keinemusik',
  'Carl Cox',
  'Tale Of Us',
  'Drake',
  'Filipe Ret',
  '50 Cent',
  'Kanye West',
  'Travis Scott',
];

// Atualizar o título da faixa atual
trackTitle.textContent = trackNames[indiceAtual];
// Atualizar o nome do artista da faixa atual
trackArtist.textContent = trackArtists[indiceAtual];
}

function faixaAnterior() {
  if (currentTrackIndex > 0) {
      currentTrackIndex--; 
  } else {
      currentTrackIndex = playlist.length - 1;
  }

  // Atualiza a fonte de áudio e reproduz a faixa anterior
  audio.src = playlist[currentTrackIndex];
  audio.play();
  updateTrackInfo(currentTrackIndex); // Atualiza as informações da faixa anterior
  document.getElementById("playPauseButton").classList.remove("bi-play-circle-fill");
  document.getElementById("playPauseButton").classList.add("bi-pause-circle-fill");
}

audio.onended = function() {
  var playPauseButton = document.getElementById("playPauseButton");
  playPauseButton.classList.remove("bi-pause-circle-fill");
  playPauseButton.classList.add("bi-arrow-clockwise");
  audio.currentTime = 0; // Reinicia a música
};

function adjustVolume(volume) {
audio.volume = volume;
}

var volumeControl = document.getElementById("volumeControl");
var volume = 0.5; // Volume inicial

// Definir volume padrão
audio.volume = volume;

// Função para atualizar o volume do áudio
function updateVolume(newVolume) {
volume = newVolume;
audio.volume = volume;
}

function toggleMute() {
  if (audio.muted) {
    audio.muted = false; // Desmutar o áudio
    document.getElementById("vol").classList.remove("bi-volume-mute-fill");
    document.getElementById("vol").classList.add("bi-volume-up-fill");
  } else {
    audio.muted = true; // Mutar o áudio
    document.getElementById("vol").classList.remove("bi-volume-up-fill");
    document.getElementById("vol").classList.add("bi-volume-mute-fill");
  }
}

// Adicionar evento de rolagem do mouse para ajustar o volume
volumeControl.addEventListener("wheel", function(event) {
  event.preventDefault(); // Evitar rolar a página ao usar o scroll do mouse
  
  var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
  
  // Ajustar o volume com base na direção do scroll do mouse
  var newVolume = Math.max(0, Math.min(1, volume + (delta * 0.05))); // Aumenta ou diminui o volume
  
  // Atualizar o volume do áudio
  updateVolume(newVolume);
  updateVolumeSliderPosition(); // Atualizar a posição da bolinha do controle de volume
});

// Adicionar eventos de mouse para arrastar o controle de volume
var isDragging = false;

volumeControl.addEventListener("mousedown", function(event) {
isDragging = true;
updateVolumeOnClick(event);
});

document.addEventListener("mousemove", function(event) {
if (isDragging) {
  updateVolumeOnClick(event);
}
});

document.addEventListener("mouseup", function() {
isDragging = false;
});

function updateVolumeOnClick(event) {
var boundingRect = volumeControl.getBoundingClientRect();
var offsetX = event.clientX - boundingRect.left;
var width = boundingRect.width;
var newVolume = Math.max(0, Math.min(1, offsetX / width));

// Atualizar o volume do áudio
updateVolume(newVolume);
updateVolumeSliderPosition();
}

function updateVolumeSliderPosition() {
var thumbWidth = volumeControl.offsetWidth * volume;
volumeControl.style.setProperty("--thumb-position", thumbWidth + "px");
}
window.addEventListener("load", updateVolumeSliderPosition)


// Atualiza o controle deslizante de progresso da música
function updateProgressSlider() {
  var progressSlider = document.getElementById("progressSlider");
  var progress = (audio.currentTime / audio.duration) * 100;
  progressSlider.value = progress;
  }
  
  // Avança/retrocede a música para a posição desejada quando o controle deslizante é arrastado
  function seekTo(progress) {
  var seekToTime = (progress / 100) * audio.duration;
  audio.currentTime = seekToTime;
  }
  
  // Atualiza o controle deslizante de progresso e o tempo atual periodicamente
  audio.addEventListener("timeupdate", function() {
  updateProgressSlider();
  updateCurrentTime();
  });
  
  // Atualiza o tempo atual da música
  function updateCurrentTime() {
  var currentTimeElement = document.getElementById("currentTime");
  currentTimeElement.textContent = formatTime(audio.currentTime);
  }
  
  // Atualiza o tempo atual da música conforme o controle deslizante de progresso é arrastado
  progressSlider.addEventListener("input", function() {
  updateCurrentTime();
  });
  
  // Função para formatar o tempo em minutos e segundos
  function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = Math.floor(seconds % 60);
  return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
  }
  
  // Atualiza o tempo da música conforme o controle deslizante de progresso é arrastado
  progressSlider.addEventListener("input", function() {
  updateCurrentTime();
  });
  
  // Função para calcular quanto tempo falta para o término da música
  function updateRemainingTime() {
  var remainingTimeElement = document.getElementById("remainingTime");
  var remainingTime = audio.duration - audio.currentTime;
  remainingTimeElement.textContent = "-" + formatTime(remainingTime);
  }
  
  // Atualize o tempo restante da música periodicamente
  audio.addEventListener("timeupdate", function() {
  updateRemainingTime();
  });
  
  // Atualize o tempo restante da música quando o controle deslizante de progresso é arrastado
  progressSlider.addEventListener("input", function() {
  updateRemainingTime();
  });
  
  progressSlider.addEventListener("input", function(event) {
    var progress = event.target.value;
    seekTo(progress);
  });
  

  function playMusic(musicSrc, trackTitle, trackArtist) {
    var player = document.getElementById('minhaPlaylist');
    var trackTitleElement = document.getElementById('trackTitle');
    var trackArtistElement = document.getElementById('trackArtist');
    
    player.src = musicSrc;
    player.play();
    
    // Atualiza o título da faixa e o nome do artista
    trackTitleElement.textContent = trackTitle;
    trackArtistElement.textContent = trackArtist;
    }
    

document.addEventListener("DOMContentLoaded", function() {
// Obtenha todos os cards de música
const musicCards = document.querySelectorAll(".cards");

// Manipulador de eventos de clique a cada cartão de música
musicCards.forEach(function(card) {
  card.addEventListener("click", function(event) {
    event.preventDefault();
    
    // Configura a fonte de áudio no elemento de áudio do reprodutor
    const audioPlayer = document.getElementById("minhaPlaylist");
    audioPlayer.setAttribute("src", card.getAttribute("href"));
    
    // Mostra o reprodutor se estiver oculto
    document.getElementById("player").style.display = "block";
    
    // Inicia a reprodução da música
    audioPlayer.play();

    // Atualiza o ícone do botão de reprodução para pausar
    document.getElementById("playPauseButton").classList.remove("bi-play-circle-fill");
    document.getElementById("playPauseButton").classList.add("bi-pause-circle-fill");
  });
});
});

var playlist = [
'src/music/1.Maverick Sabre - Slow Vintage Culture Remix.mp3',
'src/music/2.Dua Lipa - New Rules.mp3',
'src/music/3.Spectrum - Marco Generani .mp3',
'src/music/4.Mwaki feat. Sofiya Nzau.mp3',
'src/music/5.I KNOW Remix.mp3',
'src/music/6.Black Coffee - Turn Me On.mp3',
'src/music/7.Boris Brejcha - Space Diver.mp3',
'src/music/8.Paris - Keinemusik.mp3',
'src/music/9.Ninetoes - Finder (Carl Cox Remix).mp3',
'src/music/10.Rex The Dog - Change This Pain For Ecstasy.mp3',
'src/music/11.Drake - Get It Together feat. Jorja Smith.mp3',
'src/music/12.Filipe Ret - Jamais Serão.mp3',
'src/music/13.50Cent - P.I.M.P..mp3',
'src/music/15.Kanye West & Lil Pump - I Love It.mp3',
'src/music/14.The London ft. J. Cole & Travis Scott.mp3',
];


document.addEventListener("DOMContentLoaded", function() {
// Obtenha todos os cards de música
const musicCards = document.querySelectorAll(".cards");

//Manipulador de eventos de clique a cada cartão de música
musicCards.forEach(function(card) {
  card.addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    
    // Obtenha as informações da faixa do card clicado
    const trackTitle = card.querySelector("span").textContent; // Supondo que o título da faixa esteja dentro de uma tag <span>
    const trackArtist = card.querySelector("img").alt; // Supondo que o artista da faixa esteja no atributo alt da tag <img>
    
    // Atualize as informações da faixa no player
    document.getElementById("trackTitle").textContent = trackTitle;
    document.getElementById("trackArtist").textContent = trackArtist;
    
    // Configura a fonte de áudio no elemento de áudio do reprodutor
    const audioPlayer = document.getElementById("minhaPlaylist");
    audioPlayer.setAttribute("src", card.getAttribute("href"));
    
    // Mostra o reprodutor se estiver oculto
    document.getElementById("player").style.display = "block";
    
    // Inicia a reprodução da música
    audioPlayer.play();
  });
});

// Adiciona um ouvinte de evento ao elemento de áudio para atualizar as informações da faixa quando a música começar a tocar
const audioPlayer = document.getElementById("minhaPlaylist");
audioPlayer.addEventListener("play", function() {
  // Obtenha as informações da faixa atual
  const trackTitle = document.getElementById("trackTitle").textContent;
  const trackArtist = document.getElementById("trackArtist").textContent;
  
  // Exiba as informações da faixa
  document.getElementById("trackInfo").style.display = "block";
});
});

