const responses = [
    "Yes, definitely!",
    "No, certainly not.",
    "Ask again later.",
    "Outlook good.",
    "Very doubtful.",
    "Signs point to yes.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Most likely.",
    "My sources say no.",
    "Sorry, my brain isn't working right now.",
  ];

  const special = {
      'am i funny?': 'lol no',
      'is mr mercado funny?': 'Luck is shining upon you!',
      'who am i?': 'Who? A nobody.',
      'where am i?': "In your dad's basement eating chips.",
      'how old am i?': "You're a teen and still don't know how old you are.",
      "what's your name?": 'I have no name but you can call me sir.',
      'is  michael jordan better than lebron james': 'in your dreams',
      'what is a all mexican job site biggest fear ': 'are you sure you want to ask this question?',
      'why was the math book depressed?': 'Because it had too many problems.',
      'what does a bee do at the gym?': 'Zumba!',
      'why don’t birds use facebook?': 'Because they already have Twitter.',
      'what does one iguana say to her twin sister?.': 'Iguan-ya, too!',
      'why don’t skeletons fight?': 'Because they don’t have the guts.',
      'is mr. mercado secretly a cat?': 'Absoduckinglutely.',
      'how many toes do i have.': 'Ask ur mom.',
      'are you with the nupe?': 'SHE WITH THE NUPES NOW SHE WITH THE NUPES NOW SAID SHE LIKE YOU BUT SHE LOVE ME',
      'am i pretty?': '(Hell nah) or (probably not).',
      'man or bear?': 'Beer.',
      'am i gonna be successful?': '(Nah) or (yup).',
      'are you magic?': '(Hell nah) or (duh)',
      'is the sky up?': '(Erm idk)',
      "what would happen if i turn off your computer?" : "i would find you and i would end you",
      "is david dating krystal?" : "possibly.............",
      "Is john the smartest" : "Say it right, THE Smartest",
      "want to play uno?" : "Uh No ",
      " " : "flabbergasted?",
      "are you a ai?" : "maybe",
      "fastest man alive" : "Barry Allen",
      "baki" : "I can beat him with a pinky",
      "random number" : "(0) or (1) or (2) or (3) or (4) or (5) or (6) or (7) or (8) or (9) or (use a random number generator fool)",
      "wanna have a bad time?" : "Because if you take another step forward you really wont like what happens next. ",
      "Doki Doki" : "That game is kid friendly",
      "Albert einstein" : "E=mc^2",
      "n" : "This isnt COD",
      "songs" : "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "Fried chicken" : "This isnt kfc",
      "horse pills" : "No those are cough drops",
      "Krusty Krabs" : "No! This is patrick!",
      "spell gibberish" : "Okay. One blash esh ta Beluklaa bashooey Errybuyygudy",
      "who is the blackest" : "Everyone who is underneath your mother (PS. Everyone)",
      "tell me a yo mama joke" : "(Yo mama so fat, her font size is 10e^B I G) or (Yo mama so ugly she turns everyone into BONES!) or (Yo mama so fat, when someone remembers her, Their head gets heavy!) or (Yo mama so Short, she is made up) or (Yo mama so nice, she smells like fine rice) or (yo mama so cool, when she wears sunglasses, her sunglasses have on sunglasses) or (yo mama so old, she was found to predate the dinosaurs) or (Yo mama so dumb, she stops at a stop sign and doesn’t go until someone says so) or (Yo mama so big, when someone took a picture of her, her camera broke) or (Yo mama so stanky, that when vultures smell her, they think she is food) or (yo mama so american, she deep fries her toothpaste) or (yo mama so hairy, big foot thought he met a female of his kind)"
  };
  
  
  
  


  document.getElementById("button-special").addEventListener("click", function() {
    const question = document.getElementById("question").value.trim().toLowerCase();
    if (!question) {
      alert("Please enter a question.");
      return;
    }

    const eightBall = document.getElementById("eight-ball");
    const answerDiv = document.getElementById("answer");

    // Reset answer
    answerDiv.innerText = "";

    // Start shaking effect
    eightBall.style.animation = "shake 0.1s infinite";
    
    // Stop shaking after 2 seconds and show the answer
    setTimeout(() => {
      eightBall.style.animation = "";
      
      // Check if the question has a special answer
      const response = special[question] || responses[Math.floor(Math.random() * responses.length)];
      
      // Display the appropriate response
      answerDiv.innerText = response;
    }, 2000);
  });