// Sample JSON data with character stats and image URLs
const characterData = [
    {
        "name": "Goku",
        "power": 0.9,
        "durability": 0.9,
        "speed": 0.6,
        "combat-skills": 0.4,
        "image": "https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
    },
    {
    "name": "Alien Dragon",
    "power": 0.7,
    "durability": 0.7,
    "speed": 0.5,
    "combat-skills": 0.5,
    "image": "https://www.gstatic.com/android/keyboard/emojikitchen/20240530/u1f409/u1f409_u1f47d.png?fbx"
    },
    {
        "name": "Zoro",
        "power": 0.5,
        "durability": 0.8,
        "speed": 0.5,
        "combat-skills": 0.8,
        "image": "https://upload.wikimedia.org/wikipedia/en/a/a4/Roronoa_Zoro.jpg"
    },
  {
        "name": "Sasuke Uchiha",
        "power": 0.8,
        "durability": 0.7,
        "speed": 0.85,
        "combat-skills": 0.9,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAakkY9c-hOlAW-rI3VJye-MdIicv_dobt_Q&s"
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
        "image": "https://i.scdn.co/image/ab67616d00001e02b6dad05dc0e31656c4110930"
    },
    {
        "name": "Gumball",
        "power": 0.2,
        "durability": 0.9,
        "speed": 0.9,
        "combat-skills": 0.4,
        "image": "https://i1.sndcdn.com/avatars-lwOTSVr06nF76Hnk-U3BPQg-t240x240.jpg"
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
  "name" : "Courage D. Cowardly Dog",
        "power" : 0.1,
        "durability" : 0.5,
        "speed" : 0.9,
        "combat-skills" : 0.4,
        "image" : "https://i.ytimg.com/vi/xjw4Xt4B9yI/hqdefault.jpg"
      
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
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4p-BlQ3UzSMU3EkZ1bGiK41vDOvrpH-3TA&s"
   
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
        "image" : "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/JiraiyaNarutomanga.jpg/150px-JiraiyaNarutomanga.jpg"
    },
    {
        "name" : "Inosuke",
        "power" : 0.9,
        "durability" : 0.6,
        "speed" : 0.8,
        "combat-skills" : 0.9,
        "image" : "https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
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
        "image" : "https://variety.com/wp-content/uploads/2022/05/MCDSHRE_EC008.jpg?w=1000&h=667&crop=1"
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
        "image" : "https://wallpapersok.com/images/hd/neon-jotaro-kujo-and-star-platinum-r5liu43y5oyfkydk.jpg"
    },
    {
    "name" : "Yujiro Hanma",
    "power" : 0.8,
    "durability" : 0.8,
    "speed" : 0.8,
    "combat-skills" : 0.8,
    "image" : "https://win.gg/_next/image/?url=https%3A%2F%2Fapi3.win.gg%2Fwp-content%2Fuploads%2F2023%2F08%2FYujiro-Hanma-Workout-1-1024x576-1.jpg&w=3840&q=75"
    },
    {
    "name": "Sans",
    "power" : 0.6,
    "durability" : 0.1,
    "speed" : 0.8,
    "combat-skills" : 0.9,
    "image" : "https://ih1.redbubble.net/image.434433009.6328/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    },
 
 
 ];
 
 
 let selectedTraits = { "power": null, "durability": null, "speed": null, "combat-skills": null };
 let opponentCharacter = null;
 const shuffleInterval = 100;
 let shuffleTimers = {};
 
 
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
        <img src="${opponentCharacter.image}" alt="${opponentCharacter.name}" width="500; " height="500px">
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
        startShufflingAllTraits();
        setTimeout(stopShufflingAllTraits, 1000); // Reshuffle remaining traits for 1 second
    }
 }
 
 
function displayFinalStats() {
    // Check if any trait is not selected, and use the data from the trait-container if empty
    const traits = ["power", "durability", "speed", "combat-skills"];
    traits.forEach(trait => {
        if (selectedTraits[trait] === null) {
            // Get the character data from the corresponding trait container
            const trait_item = document.getElementById(trait);
            const characterName = trait_item.querySelector("img").dataset.character;  // Get the trait name from the header
            selectedTraits[trait] = characterData.find(c => c.name === characterName);
        }
    });

    console.log(selectedTraits)
    // Now that all traits are selected (or substituted from the trait-container), display the final stats
    const finalStatsElement = document.getElementById("final-stats");
    finalStatsElement.innerHTML = `
        <h3>Final Stats</h3>
        <p>Power: ${selectedTraits["power"].power}</p>
        <p>Durability: ${selectedTraits["durability"].durability}</p>
        <p>Speed: ${selectedTraits["speed"].speed}</p>
        <p>Combat Skills: ${selectedTraits["combat-skills"].combatSkills}</p>
        <img src="${selectedTraits["power"].image}" alt="${selectedTraits["power"].name}" width="500" height="500">
    `;
    calculateVictory()
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
 
 
    } else {
        showOverlay("DEFEAT");
    }
 }
 
 
 // Show overlay with the result text and play again button
 function showOverlay(resultText, color) {
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
 

 function reset_clicked() {
    let mybutt = document.getElementById("reset-game-img")
    mybutt.src = "clicked.png"
    resetGame()
 }

 function reset_unclicked(){
    let mybutt = document.getElementById("reset-game-img")
    mybutt.src = "unclicked.png"
 }

 function attack_clicked() {
    let mybutt = document.getElementById("attack")
    mybutt.src = "clicked.png"
    displayFinalStats()
 }

 function attack_unclicked(){
    let mybutt = document.getElementById("attack")
    mybutt.src = "unclicked.png"
 }
 
 
 // Start the game on page load
 window.onload = startGame;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 