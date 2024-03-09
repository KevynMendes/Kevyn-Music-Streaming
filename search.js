function searchAndPlay() {
    const searchTerm = document.getElementById("search").value.toLowerCase();
    let foundIndex = -1;

    // Mapeia os termos de busca para as músicas correspondentes
    const searchTermsMap = {
        'Bass 2024': { title: 'Slow Down', artist: 'Vintage Culture' },
        'edm': { title: 'Spectrum', artist: 'Marco Generani' },
        'top hits': { title: 'New Rules', artist: 'Dua Lipa' },
        'pop': { title: 'New Rules', artist: 'Dua Lipa' },
        'chill vibes': { title: 'Mwaki', artist: 'Sofiya Nzau' },
        '2023': { title: 'I Know Remix', artist: 'Travis Scott' },
        'rap': { title: 'I Love It', artist: 'Kanye West' },
        'eletronica': { title: 'Paris', artist: 'Keinemusik' },
        'hip hop': { title: 'P.I.M.P', artist: '50 Cent' },
    };

    if (searchTerm in searchTermsMap) {
        const { title, artist } = searchTermsMap[searchTerm];
        foundIndex = playlist.findIndex(song => song.toLowerCase().includes(title.toLowerCase()));
        // Se a música correspondente for encontrada, atualiza o artista
        if (foundIndex !== -1) {
            updateTrackInfo(foundIndex, title, artist);
            audio.src = playlist[foundIndex];
            audio.play();
            document.getElementById("player").style.display = "block";
            document.getElementById("playPauseButton").classList.remove("bi-play-circle-fill");
            document.getElementById("playPauseButton").classList.add("bi-pause-circle-fill");
            return; // Sai da função após encontrar e reproduzir a música correspondente
        }
    }

    // Se não foi encontrado pela chave de busca, pesquisa normalmente
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].toLowerCase().includes(searchTerm)) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex !== -1) {
        audio.src = playlist[foundIndex];
        audio.play();
        updateTrackInfo(foundIndex); // Atualiza as informações da faixa com base no índice da música encontrada
        document.getElementById("player").style.display = "block";
        document.getElementById("playPauseButton").classList.remove("bi-play-circle-fill");
        document.getElementById("playPauseButton").classList.add("bi-pause-circle-fill");
    } else {
        alert("Nenhuma música encontrada para o termo de pesquisa: " + searchTerm);
    }
}

function updateTrackInfo(index) {
    var trackTitle = document.getElementById("trackTitle");
    var trackArtist = document.getElementById("trackArtist");

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
    trackTitle.textContent = trackNames[index];
    // Atualizar o nome do artista da faixa atual
    trackArtist.textContent = trackArtists[index];
}

      function toggleLanguagesOptions() {
            var options = document.getElementById("languagesOptions");
            if (options.style.display === "none") {
                options.style.display = "block";
            } else {
                options.style.display = "none";
            }
        }

        // Função para mudar o idioma
        function changeLanguage(language) {
            // Aqui você pode adicionar a lógica para mudar o idioma da página
            alert("Você tentou mudar o Idioma para: " + language + "Desculpe essa função ainda não está disponivel. ") ;
        }
        
         // Adiciona um ouvinte de evento ao botão "Criar Playlist"
         document.querySelector('.section-playlist__button').addEventListener('click', function() {
            alert('Função ainda não disponível.'); // Exibe o aviso
        });
        