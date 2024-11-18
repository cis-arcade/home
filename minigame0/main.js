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
    "is david dating krystal?" : "possibly............."
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