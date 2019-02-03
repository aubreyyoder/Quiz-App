'use strict';

const STORE= [
  {
    question: 'What are the basic tools necessary for rock climbing (in general)?',
    answers: [
      '- Just my body and a yearn for adventure.',
      '- Special pants made specifically for climbing.',
      '- A GoPro camera to show how bad ass I am!',
      '- A helmet, knee pads and a lack of fear.'
    ],
    correctAnswer: 0,
    icon: 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1638/https://gocamp24.com/wp-content/uploads/2016/08/Rock-Climbing-Wallpaper-HD.jpg',
    alt: "guy climbing rock wall"
  },

  {
    question: 'What does it mean to "lead a climb"?',
    answers: [
      '- Be the first to ever climb that route.',
      '- Climb a route without knowing any information about it.',
      '- Climb a route and clip the rope to the wall as you go.',
      '- To place your own gear in a crack as you climb.'
    ],
    correctAnswer: 2,
    icon:'https://cdn-images-1.medium.com/max/1017/1*Bb3ccZ1nsjDr98wi_GuzJw.jpeg',
    alt:'quickdraw on wall with rope clipped through'
  },
    
  {
    question: 'What does it mean when you have to "walk off" a route?',
    answers: [
      '- You can\'t climb it because there isn\'t a way down.',
      '- Your partner left you, so you have to climb down the way you came up.',
      '- You dropped the rope, and you are forced to find a different way down.',
      '- When the last person in a group climbs a route, they have to find a way down other than the way they came up.'
    ],
    correctAnswer: 3,
    icon: 'https://www.rei.com/content/dam/images/Expert%20Advice/Migration/HeroImages/Content_080516_0033_Trad_Climbing_Basics_lg.jpg',
    alt: 'trad gear on harness'
  },

  {
    question: 'What is the title of the person holding the other end of the climber\'s rope?',
    answers: [
      '- The Safety Checker.',
      '- The Belayer.',
      '- The Rappeller.',
      '- The Back Up.'
    ],
    correctAnswer: 1,
    icon:"https://www.rei.com/content/dam/images/Expert%20Advice/2017/12/Harnois_071516_0502_climbing_rope_do's_and_don'ts.jpg",
    alt: 'climbing rope on ground'
  },

  {
    question: 'When "cleaning" a route, you are...',
    answers: [
      '- ...wiping chalk off of all of the holds.',
      '- ...drying the wall after a rain storm.',
      '- ...pulling off all of the gear so nothing is left behind.',
      '- ...climbing a route without making any mistakes.'
    ],
    correctAnswer: 2,
    icon: 'https://www.outsidepursuits.com/wp-content/uploads/2017/08/Best-Climbing-Rope.jpg',
    alt: 'climbing shoes, harness, rope, belay-device'
  },

  {
    question: 'When someone says they want to climb a route (that would typically be climbed on a rope) without any ropes or gear, they are going to _____ that route.',
    answers: [
      '- Free solo',
      '- Red point',
      '- Pink point',
      '- Top rope'
    ],
    correctAnswer: 0,
    icon: 'https://shop.cdn.epictv.com/GQ4WnHv8R1KbV7Ko0oqp-caf5a3ec88ce64aa6578764a2044b9fe.jpeg',
    alt: 'climbing shoe'
  },

  {
    question: 'Which of the following ratings is the hardest listed?',
    answers: [
      '- 5.8',
      '- V8',
      '- 5.9',
      '- V9'
    ],
    correctAnswer: 3,
    icon: 'https://www.rei.com/content/dam/images/Expert%20Advice/Migration/HeroImages/Rinckenberger_111815_5040_Rock_Climbing_Glossary_lg.jpg',
    alt: 'girl belaying from above'
  },

  {
    question: 'What is the cushion that climbers put at the bottom of a boulder called?',
      answers: [
        '- Fall pad.',
        '- Slip Mat.',
        '- Crash pad.',
        '- Catch cushion.'
      ],
      correctAnswer: 2,
      icon: 'https://www.grimper.com/media/test/p%C3%A9dago/ouverture.jpg',
      alt: 'crash pads under boulder'
  },

  {
    question: 'What are the necessary tools for a belayer to catch their climber?',
    answers: [ 
      '- A rope.',
      '- A belay device.',
      '- A harness.',
      '- All of the above.'
    ],
    correctAnswer: 3,
    icon: 'https://www.wildmoments.net/images/large/joshua_Tree_blend_finished.jpg',
    alt: 'Joshua Tree'
  },

  {   
    question: 'El Capitan is located in which California National Park?',
    answers: [
      '- Joshua Tree National Park.',
      '- Yosemite National Park.',
      '- Sequoia National Park.',
      '- Kings Canyon National Park.'
    ],
    correctAnswer: 1,
    icon: 'http://files.all-free-download.com//downloadfiles/wallpapers/1920_1080/apple_mac_os_x_el_capitan_13902.jpg',
    alt: 'Yosemite Valley'
  }
];

  let questionNumber= -1;
  let score= 0;


  function displayLanding(display) {
    if (display) {
      $('#landing').show();
      $('#content').hide();
    } else {
      $('#landing').hide();
      $('#content').show();
    }
  }

  function showQuestion() {
    increaseQuestionNumber();
    let question= generateQuestionAndAnswerString();
    $('#content').html(question);
    handleSubmit();
  }

  function startQuiz() {
    displayLanding();
    showQuestion();
  }

  function generateQuestionAndAnswerString() {
    let answerOptions='';
    if (questionNumber < STORE.length) {    
      for (let i = 0; i < STORE[questionNumber].answers.length; i++) {
        answerOptions += `
        <div>
          <label class="question-label">
            <input name="question${questionNumber}" type="radio" value="${i}" required>
            <span>${STORE[questionNumber].answers[i]}</span>
          </label>
        </div>`
      }

        return `
        <div class="quiz-question-${questionNumber}">
        <h2> ${STORE[questionNumber].question}</h2>
        <form class="answer-options">
        ${answerOptions}
      <button type="submit" class= "submit-button">Submit</button>
      </form>
      </div>
      `;
    } else {
      renderQuiz();
      restartQuiz();
      $('.questionNumber').text(10)
    }
  }

  function startQuizButtonHandler() {
    $('#js-start-quiz').click(event => {
      event.preventDefault();
      startQuiz();
    });
  }

  function renderQuiz() {
    const questionString = generateQuestionAndAnswerString();
    $('.js-rock-climbing-quiz').html(questionString);
  }

  function handleSubmit(){
    $('.answer-options').submit(event => {
      event.preventDefault();
      let selectedAnswer= $(event.target).find('input:checked').val()
      determineIndividualResult(selectedAnswer);
    });
  }

  function determineIndividualResult(selectedAnswer) {
    let rightAnswer= STORE[questionNumber].correctAnswer;

    if (selectedAnswer == rightAnswer) {
      userGotItRight();
    } else {
      giveCorrectAnswer();
    }
  }


  function userGotItRight() {
    let button= `<button type="submit" class="next-question-button">Next Question</button>`

// if last question, change value of 'button'
    if (questionNumber == STORE.length-1) {
      button = `<button type="submit" class="restart-quiz-button">Restart Quiz</button>`
    }

      $('#content').html(`
        <h2>Correct!</h2>
        <div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}" height="300" width="500"></div>
        ${button}`
      );
    increaseScore();
    
  }

  function increaseScore() {
    score= score+10;
    $('.js-score').text(score);
  }

  function giveCorrectAnswer() { 
    let button= `<button type="submit" class="next-question-button">Next Question</button>`

// if last question, change value of 'button'
    if (questionNumber == STORE.length-1) {
      button = `<button type="submit" class="restart-quiz-button">Restart Quiz</button>`
    }
      $('#content').html(`
        <h2><p>Good try!</p>
        <p>The correct answer is ${STORE[questionNumber].answers[STORE[questionNumber].correctAnswer]}</p></h2>
        <div class="icon"><img src="${STORE[questionNumber].icon}" alt="${STORE[questionNumber].alt}" height="300" width="500"></div>
        ${button}`
      );
  }

  function nextQuestion() {
    $(document).on('click', '.next-question-button', event => {
      showQuestion();
    })
  }

  function increaseQuestionNumber() {
    questionNumber++
    $('.questionNumber').text(questionNumber + 1);
  }

  function restartQuiz() {
    $(document).on('click','.restart-quiz-button', event => {
      questionNumber= -1;
      score= 0;
      $('.js-score').text(score);
      $('.questionNumber').text(score);
      displayLanding(true);
    })
  }

  function handleEntireQuiz() {
    startQuizButtonHandler();
    nextQuestion();
    restartQuiz();
  }

  $(handleEntireQuiz);