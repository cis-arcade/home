// Sample JSON data with character stats and image URLs
const characterData = [
    {
        "name": "Goku",
        "power": 0.9,
        "durability": 0.9,
        "speed": 0.6,
        "combat-skills": 0.4,
        "image": "https://pbs.twimg.com/profile_images/1366466342354751491/JyhZpbtu_400x400.jpg"
    },
    {
        "name": "Zoro",
        "power": 0.5,
        "durability": 0.8,
        "speed": 0.3,
        "combat-skills": 0.8,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg"
    },
  {
        "name": "Sasuke Uchiha",
        "power": 0.8,
        "durability": 0.7,
        "speed": 0.85,
        "combat-skills": 0.9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3u5aBpeTbQAvoUzYnSygMiQJUHRY-gPkFg&s"
    },
    {
        "name": "Sakura Haruno",
        "power": 0.75,
        "durability": 0.8,
        "speed": 0.6,
        "combat-skills": 0.7,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3lUQRHTtlfiJ8qnsaA2JxbzoVjrwcherPSw&s"
    },
    {
        "name": "Monkey D. Luffy",
        "power": 0.9,
        "durability": 0.9,
        "speed": 0.7,
        "combat-skills": 0.85,
        "image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/One-Piece-Monkey-D.-Luffy-Cropped-Cropped.jpg"
    },
    {
        "name": "Portgas D. Ace",
        "power": 0.85,
        "durability": 0.75,
        "speed": 0.8,
        "combat-skills": 0.8,
        "image": "https://practicaltyping.com/wp-content/uploads/2019/04/ace.jpg"
    },
    {
        "name": "Gumball",
        "power": 0.2,
        "durability": 0.9,
        "speed": 0.9,
        "combat-skills": 0.4,
        "image": "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABWogdk1eSkSW-9GYG_bznD3yRM7uvrdT3wSnnvD_SOQi1fADaJqwywUxU1JXkaOXEGx5jgjv1V4-ZPdD0Im-umbIaz5F_XMzK0-H.jpg?r=6aa"
    },
    {
        "name" : "Naruto",
        "power" : 0.9,
        "durability" : 0.7,
        "speed" : 0.9,
        "combat-skills" : 1.2,
        "image" : "https://variety.com/wp-content/uploads/2024/08/NARSHP_set2_screen_3x2cr-res.jpg?w=1000&h=667&crop=1"
    },
    {
        "name" : "Tanjiro",
        "power" : 0.8,
        "durability" : 0.7,
        "speed" : 0.9,
        "combat-skills" : 0.8,
        "image" : "https://a.storyblok.com/f/178900/960x540/6e6bcda041/demon-slayer.jpg/m/filters:quality(95)format(webp)"
    },
    {
        "name" : "Meliodas",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Meliodas-Seven-Deadly-Sins-Cropped.jpg"

    },
    {
  "name" : "Vanellope",
        "power" : 0.8,
        "durability" : 0.3,
        "speed" : 0.9,
        "combat-skills" : 0.4,
        "image" : "https://eartotheretravel.com/wp-content/uploads/2015/10/Vanellope_profile.png"
    },
    {
 "name" : "Raven",
        "power" : 0.8,
        "durability" : 0.9,
        "speed" : 0.7,
        "combat-skills" : 0.7,
        "image" : "https://i.ytimg.com/vi/xG_8cepY6Sw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBUZc5LJR445FH-RuFKfM0CjI2Iqw"
     
     },
    {
  "name" : "Denji",
        "power" : 0.8,
        "durability" : 0.7,
        "speed" : 0.5,
        "combat-skills" : 0.8,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpKWbQxztg3izIxyOoczWiTb_pifNeuK8pfA&s"
    
       },
    {
  "name" : "Craig",
        "power" : 0.4,
        "durability" : 0.3,
        "speed" : 0.7,
        "combat-skills" : 0.8,
        "image" : "https://cn.i.cdn.ti-platform.com/content/1539/craig-of-the-creek/showpage/za/craig.48956a2a.jpg"
        
        },
    {
  "name" : "couragecowardlydog",
        "power" : 0.1,
        "durability" : 0.5,
        "speed" : 0.9,
        "combat-skills" : 0.4,
        "image" : "https://www.syfy.com/sites/syfy/files/2019/11/courage-the-cowardly-dog.jpg"
       
     },
    {
  "name" : "Timmy Turner",
        "power" : 0.8,
        "durability" : 0.9,
        "speed" : 0.3,
        "combat-skills" : 0.5,
        "image" : "https://www.famousbirthdays.com/group_images/medium/timmy-turner-played.jpg"
    
     },
    {
  "name" : "Jake",
        "power" : 0.5,
        "durability" : 0.9,
        "speed" : 0.6,
        "combat-skills" : 0.7,
        "image" : "https://content.presspage.com/uploads/1441/1920_commercial-desk.png?10000"
    
     },
    {
  "name" : "TinkerBell",
        "power" : 0.3,
        "durability" : 0.9,
        "speed" : 0.9,
        "combat-skills" : 0.7,
        "image" : "https://lumiere-a.akamaihd.net/v1/images/2b65901707e2087367946f7b7772fd8335c6c9e5.jpeg?region=0,0,600,600"
    
     },
    {
  "name" : "Robot Chicken",
        "power" : 0.5,
        "durability" : 0.9,
        "speed" : 0.9,
        "combat-skills" : 0.4,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq43gadLEZsjcZohfVzd-zepYpbCiTscJLg&s"
    
    },
    {
  "name" : "SpongeBob",
        "power" : 0.6,
        "durability" : 0.9,
        "speed" : 0.4,
        "combat-skills" : 0.4,
        "image" : "https://www.spongebobshop.com/cdn/shop/products/SB-Standees-Spong-3_1200x.jpg?v=1603744568"
    },
{
        "name" : "Senku",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mdHjAqzPc5-gk1krr-dSBOxXr82sOzLcZw&s"
    },
    {
        "name" : "Tsukasa",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://statics.ruadoll.com/image/cache/2023/1103/0/27a9ad9d-3363-75a0-bd42-c88c90613ee9-1000x1000.jpg"
    },
    {
        "name" : "Ban",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/Ban-in-The-Seven-Deadly-Sins.jpg"
    },
    {
        "name" : "Itachi",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64202805dcfea1001d0b7a1a.jpg"
    },
    {
        "name" : "Madara",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://cdns-images.dzcdn.net/images/cover/30e780aee426c1a60d6c866452ce41f4/0x1900-000000-80-0-0.jpg"
    },
    {
        "name" : "Jiraiya",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://i.pinimg.com/736x/c7/88/10/c7881074d9fc473bc729820f05a24b46.jpg"
    },
    {
        "name" : "Inosuke",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://thathashtagshow.com/wp-content/uploads/2022/01/demon-slayer-inosuke-rescue-season-2-cliffhanger-1024x536.jpg"
    },
    {
        "name" : "Jack Sparrow",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMMq7m9IwMxqFv4Z4JX3zh5WYgq8qmS9mqw&s"

    },
{ 
       "name" : "Chowder",
       "power" : 0.3,
       "durability" : 0.9,
       "speed" : 0.6,
       "combat-skills" : 0.5,
       "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1AQ68ks-pTURZ3Hhv-Pvk9uNB6iAFqN1Kw&s"
    },

   {
        "name" : "Dr.Barber",
        "power" : 0.8,
        "durability" : 0.4,
        "speed" : 0.5,
        "combat-skills" : 0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqBVE3URMIq7UAD-rW2WNcw4fAvp7kgWBZdw&s"
    },
    
    {
        "name" : "Kira",
        "power" : 0.9,
        "durability" : 0.7,
        "speed" : 0.6,
        "combat-skills" : 0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR2F5Q47U9PZkAE0CvxLyUGyfFtvJlHJmGdQ&s"
    },
    
    {
        "name" : "Shrek",
        "power" : 0.9,
        "durability" : 0.7,
        "speed" :  0.5,
        "combat-skills" :  0.9,
        "image" : "https://cdn.webshopapp.com/shops/27322/files/169115909/800x600x2/shrek-masker.jpg"
    },
    
    {
        "name" : "Snoopy",
        "power" :  0.7,
        "durability" : 0.8,
        "speed" :  0.7,
        "combat-skills" :  0.8,
        "image" : "https://static.wixstatic.com/media/449abe_7b15686b2118476da4a733a7861dd772~mv2.jpg/v1/fill/w_1080,h_1080,al_c,q_85/sn-color.jpg"
    },
    
    {
        "name" : "Patrick",
        "power" :  0.1,
        "durability" : 0.9,
        "speed" :  0.5,
        "combat-skills" : 0.5,
        "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
    },
  
      {
        "name" : "John",
        "power" :  0.7,
        "durability" : 0.9,
        "speed" :  0.7,
        "combat-skills" : 0.7,
        "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/1200px-Patrick_Star.svg.png"
    },
    
    {
        "name" : "Eren",
        "power" : 0.9,
        "durability" : 0.7,
        "speed" : 0.5,
        "combat-skills" :  0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkcKGGLKhsBCkkPFT7Cu6cZB1Q3XjxdZZsMA&s"
    },
    
    {
        "name" :  "Snoop Dogg",
        "power" : 0.2,
        "durability" : 0.6,
        "speed" : 0.5,
        "combat-skills" :  0.7,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOL6pGmDI5beMercY5pjlPqJ18Q1RwmyHmhw&s"
    },
    
    {
        "name" :  "Dock Hag",
        "power" : 0.6,
        "durability" : 0.5,
        "speed" : 0.2,
        "combat-skills" :  0.9,
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvjVB7Zwhz7YE-Buskmo4SY4pDfT3L3ezSg&s"
    },

    {
        "name" : "Jotaro",
        "power" : 0.8,
        "durability" :  0.3,
        "speed" : 0.4,
        "combat-skills" :  0.9,
        "image" : ""
    },

];

let selectedTraits = { "power": null, "durability": null, "speed": null, "combat-skills": null };
let opponentCharacter = null;
const shuffleInterval = 100;
let shuffleTimers = {};
let win_counter=0;

// Start the game by generating an opponent and shuffling all traits for 1 second initially
function startGame() {
    generateOpponent();
    startShufflingAllTraits();
    setTimeout(stopShufflingAllTraits, 1000); // Stop all shuffling after 1 second
}

// Generate a random opponent character at game start
function generateOpponent() {
    opponentCharacter = characterData[Math.floor(Math.random() * characterData.length)];
    const opponentElement = document.getElementById("opponent");
    opponentElement.innerHTML = `
        <h3>Opponent: ${opponentCharacter.name}</h3>
        <img src="${opponentCharacter.image}" alt="${opponentCharacter.name}" width="150; " height="150px">
        <p>Power: ${opponentCharacter.power}</p>
        <p>Durability: ${opponentCharacter.durability}</p>
        <p>Speed: ${opponentCharacter.speed}</p>
        <p>Combat Skills: ${opponentCharacter["combat-skills"]}</p>`;
}

// Shuffle images for all traits
function startShufflingAllTraits() {
    const traits = ["power", "durability", "speed", "combat-skills"];
    traits.forEach(trait => {
        if (!selectedTraits[trait]) { // Only shuffle traits that aren't selected yet
            shuffleImages(trait);
        }
    });
}

// Start shuffling images for a specific trait
function shuffleImages(trait) {
    const traitElement = document.getElementById(`${trait}-img`);
    shuffleTimers[trait] = setInterval(() => {
        const randomCharacter = characterData[Math.floor(Math.random() * characterData.length)];
        traitElement.src = randomCharacter.image;
        traitElement.dataset.character = randomCharacter.name;
    }, shuffleInterval);
  


    // Add click event to select the trait
    traitElement.onclick = () => {
        if (!selectedTraits[trait]) {
            selectTrait(trait, traitElement.dataset.character);
        }
    };
}

// Stop shuffling images for all traits
function stopShufflingAllTraits() {
    Object.keys(shuffleTimers).forEach(trait => {
        clearInterval(shuffleTimers[trait]);
    });
}

// Function to handle trait selection
function selectTrait(trait, characterName) {
    // Lock the selected trait with the chosen character
    selectedTraits[trait] = characterData.find(c => c.name === characterName);

    // Stop shuffling for this selected trait
    clearInterval(shuffleTimers[trait]);

    // If all traits are selected, display final stats; otherwise, reshuffle remaining traits
    if (Object.values(selectedTraits).every(trait => trait !== null)) {
        displayFinalStats();
    } else {
        console.log("done")
        console.log(selectedTraits)
        startShufflingAllTraits();
        setTimeout(stopShufflingAllTraits, 1000); // Reshuffle remaining traits for 1 second
    }
}

// Display final stats once all traits are selected and determine victory
function displayFinalStats() {
    const finalStats = Object.keys(selectedTraits).map(trait => {
        return `<p>${trait.charAt(0).toUpperCase() + trait.slice(1)}: ${selectedTraits[trait][trait]}</p>`;
    }).join('');
    document.getElementById("final-stats").innerHTML = `<h3>Your Character's Stats:</h3>${finalStats}`;

    // Calculate victory or defeat based on the aggregated score
    calculateVictory();
}

// Calculate the user's total score and compare with the opponent's score
function calculateVictory() {
    const userTotal = Object.keys(selectedTraits).reduce((sum, trait) => sum + selectedTraits[trait][trait], 0);
  console.log(userTotal)
    const opponentTotal = opponentCharacter.power + opponentCharacter.durability +
                          opponentCharacter.speed + opponentCharacter["combat-skills"];
    console.log(opponentTotal)
    if (userTotal > opponentTotal) {
        showOverlay("VICTORY");
        win_counter=win_counter+1
        const win_element=document.getElementById("win-counter")
        win_element.innerHTML=win_counter
        console.log("Win rate: " + win_counter)
    
        
        
    } else {
        showOverlay("DEFEAT");
    }
}

// Show overlay with the result text and play again button
function showOverlay(resultText) {
    const overlay = document.getElementById("result-overlay");
    overlay.style.display = "flex";
    overlay.innerHTML = `
        <h1>${resultText}</h1>
        <button onclick="resetGame()">Play Again</button>
    `;
}

// Reset the game to start over
function resetGame() {
    selectedTraits = { "power": null, "durability": null, "speed": null, "combat-skills": null };
    document.getElementById("final-stats").innerHTML = ""; // Clear final stats display
    document.getElementById("result-overlay").style.display = "none"; // Hide overlay
    startGame(); // Restart the game
}

// Start the game on page load
window.onload = startGame;

