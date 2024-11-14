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
    "My sources say no."
  ];

  document.getElementById("shake-button").addEventListener("click", function() {
    const question = document.getElementById("question").value;
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
      const randomAnswer = responses[Math.floor(Math.random() * responses.length)];
      answerDiv.innerText = randomAnswer;
    }, 2000);
  });