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
    "Am I funny?": "lol no",
    "Is Mr Mercado funny?": "Luck is shining upon you!",
    "Who am I?" : "Who? A nobody.",
    "Where am I?": "In your dad's basement eating chips.",
    "How old am I?": "You're a teen and still don't know how old you are.",
    "What's your name?": "I have no name but you can call me sir.",
    "Is  Michael Jordan better than LeBron James" : "in your dreams",
    "What is a all mexican job site biggest fear " : "are you sure you want to ask this question?",
    "Why was the math book depressed?" : "Because it had too many problems.",
    "What does a bee do at the gym?" : "Zumba!",
    "Why don’t birds use Facebook?" : "Because they already have Twitter.",
    "What does one iguana say to her twin sister?." : "Iguan-ya, too!",
    "Why don’t skeletons fight?" : "Because they don’t have the guts.",
    "Is Mr. Mercado secretly a cat?" : "Absoduckinglutely.",
    "How many toes do i have." : "Ask ur mom.",
    "Are you with the nupe?" : "SHE WITH THE NUPES NOW SHE WITH THE NUPES NOW SAID SHE LIKE YOU BUT SHE LOVE ME",
    "Am I pretty?" : "(Hell nah) or (probably not).",
    "Man or Bear?" : "Beer.",
    "Am I gonna be successful?" : "(Nah) or (yup).",
    "Are you magic?" : "(Hell nah) or (duh)",
    "Is the sky up?" : "(Erm idk)",
  };

  document.getElementById("shake-button").addEventListener("click", function() {
    const question = document.getElementById("question").value.trim();
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