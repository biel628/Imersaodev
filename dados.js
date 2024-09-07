const lista = [
        {
            titulo: "Super Mario Bros.",
            link1: "https://pt.wikipedia.org/wiki/Super_Mario_Bros.",
            descricao: "Um dos jogos de plataforma mais famosos de todos os tempos, onde Mario precisa resgatar a Princesa Peach do vilão Bowser.",
            tags: "plataforma, clássico, nintendo",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/03/Super_Mario_Bros._box.png/260px-Super_Mario_Bros._box.png"
        },
        {
            titulo: "The Legend of Zelda",
            link1: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda",
            descricao: "Um RPG de ação que introduziu o gênero dungeon crawler, onde Link embarca em uma aventura épica para salvar Hyrule.",
            tags: "rpg, aventura, nintendo",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Zelda_Logo.svg/200px-Zelda_Logo.svg.png"
        },
        
        {
            titulo: "Sonic the Hedgehog",
            link1: "https://pt.wikipedia.org/wiki/Sonic_the_Hedgehog",
            descricao: "Um ouriço azul super veloz que precisa derrotar o Dr. Eggman e salvar seus amigos.",
            tags: "plataforma, velocidade, sega",
            img:"https://upload.wikimedia.org/wikipedia/commons/f/f7/SonicSeriesLogo.png"
        },
        {
            titulo: "Final Fantasy",
            link1: "https://pt.wikipedia.org/wiki/Final_Fantasy_VII",
            descricao: "Final Fantasy VII (ファイナルファンタジーVII Fainaru Fantajī Sebun?) é um jogo eletrônico de RPG desenvolvido e publicado pela Square.",
            tags: "rpg, fantasia, playstation",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAh32vcXx6GuRoZAl37WdGkn8LXxgVcNvJKQ&s"          
        },
        {
            titulo: "Tomb Raider",
            link1: "https://pt.wikipedia.org/wiki/Tomb_Raider",
            descricao: "Lara Croft, a arqueóloga mais famosa dos games, explora tumbas antigas e desvendando mistérios em diversas partes do mundo.",
            tags: "aventura, ação, arqueologia",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Tomb_Raider_Logo_2022.svg/270px-Tomb_Raider_Logo_2022.svg.png"
            
        },
        {
            titulo: "Metal Gear Solid",
            link1: "https://pt.wikipedia.org/wiki/Metal Gear_Solid",
            descricao: "Um jogo de espionagem tático com foco em infiltração, stealth e combate furtivo.",
            tags: "ação, espionagem, stealth",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/4c/Metal_Gear_Solid_-_North-american_cover.jpg/280px-Metal_Gear_Solid_-_North-american_cover.jpg"     },
        {
            titulo: "Diablo",
            link1: "https://pt.wikipedia.org/wiki/Diablo_(s%C3%A9rie)",
            descricao: "Um RPG de ação hack and slash onde você luta contra hordas de demônios em um mundo sombrio e gótico.",
            tags: "rpg, ação, hack_and_slash",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/35/Diablo_Blizzard_logo.png/270px-Diablo_Blizzard_logo.png"     },
        {
            titulo: "Half-Life",
            link1: "https://pt.wikipedia.org/wiki/Half-Life",
            descricao: "Um marco nos jogos de tiro em primeira pessoa, com uma história envolvente e jogabilidade inovadora.",
            tags: "fps, sci-fi, aventura",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/fa/Half-Life_Cover_Art.jpg/220px-Half-Life_Cover_Art.jpg" },
        {
            titulo: "StarCraft",
            link1: "https://pt.wikipedia.org/wiki/StarCraft",
            descricao: "Um dos jogos de estratégia em tempo real mais populares de todos os tempos, com três raças distintas e batalhas épicas.",
            tags: "estratégia, sci-fi, rts",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/e/e0/StarCraft.jpg/250px-StarCraft.jpg"
        },
        {
            titulo: "Donkey Kong Country",
            link1: "https://pt.wikipedia.org/wiki/Donkey_Kong_Country",
            descricao: "Um clássico dos jogos de plataforma 2D, com gráficos coloridos e trilha sonora memorável.",
            tags: "plataforma, nintendo, 2d",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/83/Donkey_Kong_Country_capa.png/270px-Donkey_Kong_Country_capa.png"
        },
        {
            titulo: "Tony Hawk's Pro Skater 2",
            link1: "https://pt.wikipedia.org/wiki/Tony_Hawk's_Pro_Skater_2",
            descricao: "Um dos jogos de skate mais populares de todos os tempos, com uma trilha sonora inesquecível e diversas manobras para realizar.",
            tags: "skate, esportes, ação",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a9/Tony_Hawk%27s_Pro_Skater_2_n64_cover.png/250px-Tony_Hawk%27s_Pro_Skater_2_n64_cover.png"
        },
        {
            titulo: "Resident Evil 2",
            link1: "https://pt.wikipedia.org/wiki/Resident_Evil_2",
            descricao: "Um dos jogos de terror mais icônicos, com zumbis, suspense e uma atmosfera tensa.",
            tags: "terror, survival_horror, ação",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Resident_Evil_2_capa.png/275px-Resident_Evil_2_capa.png"
        },
        {
            titulo: "Chrono Trigger",
            link1: "https://pt.wikipedia.org/wiki/Chrono_Trigger",
            descricao: "Um RPG com uma história envolvente e viagens no tempo, considerado um dos melhores jogos de todos os tempos.",
            tags: "rpg, viagem_no_tempo, fantasia",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/a/a7/Chrono_Trigger.jpg/285px-Chrono_Trigger.jpg"
        },
        {
            titulo: "Myst",
            link1: "https://pt.wikipedia.org/wiki/Myst",
            descricao: "Um jogo de aventura point-and-click que te transporta para mundos misteriosos e enigmáticos.",
            tags: "aventura, quebra_cabeça, point_and_click",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/7/77/MystCapa.png/250px-MystCapa.png"
        },
        {
            titulo: "Super Mario World",
            link1: "https://pt.wikipedia.org/wiki/Super_Mario_World",
            descricao: "Um dos jogos de plataforma mais aclamados de todos os tempos, com um mundo vasto e repleto de segredos.",
            tags: "plataforma, nintendo, 2d",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/06/Super-Mario-World.jpg/270px-Super-Mario-World.jpg"
        },
        {
            titulo: "The Legend of Zelda: A Link to the Past",
            link1: "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_A Link_to_the Past",
            descricao: "Um clássico dos RPGs de ação, com um mundo interconectado e diversas masmorras para explorar.",
            tags: "rpg, aventura, nintendo",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/31/The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png/280px-The_Legenda_of_Zelda_A_Link_to_the_Past_capa.png"
        },
        {
            titulo: "SimCity 2000",
            link1: "https://pt.wikipedia.org/wiki/SimCity_2000",
            descricao: "Um dos simuladores de construção de cidades mais populares, permitindo que você construa e gerencie sua própria metrópole.",
            tags: "simulação, construção, cidade",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/SimCity_2000_cover.png/250px-SimCity_2000_cover.png"
        },
        {
            titulo: "Quake",
            link1: "https://pt.wikipedia.org/wiki/Quake",
            descricao: "Um dos primeiros jogos a popularizar os jogos de tiro em primeira pessoa, com gráficos avançados para a época.",
            tags: "fps, ação",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/f/fc/Quake_1_cover.png/250px-Quake_1_cover.png"
        },
        {
            titulo: "Monkey Island 2: LeChuck's Revenge",
            link1: "https://pt.wikipedia.org/wiki/Monkey_Island_2:_LeChuck's_Revenge",
            descricao: "Monkey Island 2: LeChuck's Revenge é um jogo de aventura point-and-click desenvolvido e lançado pela LucasArts em 1991. Foi o segundo jogo da série Monkey Island (Ilha dos Macacos), sequência de The Secret of Monkey Island, e é o sexto título da empresa a utilizar o motor SCUMM.",
            tags: "aventura, point_and_click, humor",
            img: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3c/Capa_de_Monkey_Island_2_LeChuck%27s_Revenge.jpg/250px-Capa_de_Monkey_Island_2_LeChuck%27s_Revenge.jpg"
        }
];