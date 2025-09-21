let currentLang = localStorage.getItem("lang") || "en";

// الحروف لكل لغة
let lettersEn = "abcdefghijklmnopqrstuvwxyz";
let lettersAr = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";

// الكلمات باللغتين
const wordsData = {
  en: {
    programming: [
      "php",
      "javascript",
      "go",
      "scala",
      "fortran",
      "r",
      "mysql",
      "python",
    ],
    movies: [
      "prestige",
      "inception",
      "parasite",
      "interstellar",
      "whiplash",
      "memento",
      "coco",
      "up",
    ],
    people: [
      "ahmed",
      "ebrahim",
      "osman",
      "mohammad",
      "mostafa",
      "sayed",
      "said",
      "saleh",
      "abdullah",
      "abdulrahman",
    ],
    countries: ["egypt", "saudi arabia", "jordan", "iraq"],
    sports: [
      "football",
      "basketball",
      "tennis",
      "swimming",
      "volleyball",
      "rugby",
      "boxing",
      "cycling",
    ],
    fruits: [
      "apple",
      "banana",
      "orange",
      "mango",
      "strawberry",
      "grape",
      "pineapple",
      "kiwi",
    ],
    animals: [
      "lion",
      "tiger",
      "elephant",
      "giraffe",
      "camel",
      "dolphin",
      "penguin",
      "kangaroo",
    ],
    colors: [
      "red",
      "blue",
      "green",
      "yellow",
      "black",
      "white",
      "purple",
      "pink",
    ],
    foods: [
      "pizza",
      "burger",
      "sushi",
      "pasta",
      "tacos",
      "biryani",
      "steak",
      "sandwich",
    ],
    capitals: [
      "cairo",
      "riyadh",
      "amman",
      "baghdad",
      "london",
      "paris",
      "berlin",
      "tokyo",
    ],
    landmarks: [
      "pyramids",
      "eiffel tower",
      "statue of liberty",
      "great wall",
      "taj mahal",
      "colosseum",
    ],
    music: [
      "guitar",
      "piano",
      "violin",
      "drums",
      "flute",
      "saxophone",
      "trumpet",
      "cello",
    ],
    jobs: [
      "doctor",
      "engineer",
      "teacher",
      "pilot",
      "chef",
      "artist",
      "developer",
      "nurse",
    ],
    planets: [
      "mercury",
      "venus",
      "earth",
      "mars",
      "jupiter",
      "saturn",
      "uranus",
      "neptune",
    ],
    tech: [
      "computer",
      "laptop",
      "smartphone",
      "tablet",
      "router",
      "server",
      "printer",
      "keyboard",
    ],
    series: [
      "breaking bad",
      "friends",
      "sherlock",
      "dark",
      "narcos",
      "vikings",
      "the office",
      "stranger things",
    ],
    history: [
      "alexander the great",
      "genghis khan",
      "napoleon",
      "hitler",
      "churchill",
      "george washington",
    ],
    islamicFigures: [
      "prophet muhammad",
      "abu bakr",
      "omar ibn al khattab",
      "uthman ibn affan",
      "ali ibn abi talib",
    ],
    arabicFigures: [
      "al mutanabbi",
      "nizar qabbani",
      "ahmad shawqi",
      "taha hussein",
      "gibran khalil",
    ],
  },
  ar: {
    programming: [
      "بي اتش بي",
      "جافاسكربت",
      "جو",
      "سكالا",
      "فورتران",
      "آر",
      "ماي اس كيو إل",
      "بايثون",
    ],
    movies: [
      "برستيج",
      "إنسبشن",
      "باراسايت",
      "إنترستيلار",
      "ويبلاش",
      "ميمينتو",
      "كوكو",
      "آب",
    ],
    people: [
      "أحمد",
      "إبراهيم",
      "عثمان",
      "محمد",
      "مصطفى",
      "سيد",
      "سعيد",
      "صالح",
      "عبدالله",
      "عبدالرحمن",
    ],
    countries: ["مصر", "السعودية", "الأردن", "العراق"],
    sports: [
      "كرة القدم",
      "كرة السلة",
      "تنس",
      "سباحة",
      "كرة الطائرة",
      "رجبي",
      "ملاكمة",
      "دراجات",
    ],
    fruits: [
      "تفاح",
      "موز",
      "برتقال",
      "مانجو",
      "فراولة",
      "عنب",
      "أناناس",
      "كيوي",
    ],
    animals: ["أسد", "نمر", "فيل", "زرافة", "جمل", "دلفين", "بطريق", "كنغر"],
    colors: ["أحمر", "أزرق", "أخضر", "أصفر", "أسود", "أبيض", "بنفسجي", "وردي"],
    foods: [
      "بيتزا",
      "برجر",
      "سوشي",
      "باستا",
      "تاكو",
      "برياني",
      "ستيك",
      "ساندويتش",
    ],
    capitals: [
      "القاهرة",
      "الرياض",
      "عمان",
      "بغداد",
      "لندن",
      "باريس",
      "برلين",
      "طوكيو",
    ],
    landmarks: [
      "الأهرامات",
      "برج إيفل",
      "تمثال الحرية",
      "السور العظيم",
      "تاج محل",
      "الكولوسيوم",
    ],
    music: [
      "غيتار",
      "بيانو",
      "كمان",
      "طبول",
      "ناي",
      "ساكسفون",
      "ترومبيت",
      "تشيلو",
    ],
    jobs: ["طبيب", "مهندس", "معلم", "طيار", "شيف", "فنان", "مطور", "ممرض"],
    planets: [
      "عطارد",
      "الزهرة",
      "الأرض",
      "المريخ",
      "المشتري",
      "زحل",
      "أورانوس",
      "نبتون",
    ],
    tech: [
      "كمبيوتر",
      "لابتوب",
      "هاتف ذكي",
      "تابلت",
      "راوتر",
      "خادم",
      "طابعة",
      "لوحة مفاتيح",
    ],
    series: [
      "بريكنج باد",
      "فريندز",
      "شيرلوك",
      "دارك",
      "ناركوس",
      "فايكنج",
      "ذا أوفيس",
      "سترينجر ثينغز",
    ],
    history: [
      "الإسكندر الأكبر",
      "جنكيز خان",
      "نابليون",
      "هتلر",
      "تشرشل",
      "جورج واشنطن",
    ],
    islamicFigures: [
      "النبي محمد",
      "أبو بكر",
      "عمر بن الخطاب",
      "عثمان بن عفان",
      "علي بن أبي طالب",
    ],
    arabicFigures: [
      "المتنبي",
      "نزار قباني",
      "أحمد شوقي",
      "طه حسين",
      "جبران خليل",
    ],
  },
};
// النصوص باللغتين
const uiText = {
  en: {
    gameOver: "Game Over, The Word Is",
    youWin: "🎉 You Win! The Word Is",
  },
  ar: {
    gameOver: "انتهت اللعبة، الكلمة هي",
    youWin: "🎉 فزت! الكلمة هي",
  },
};
const categoryNames = {
  en: {
    programming: "Programming",
    movies: "Movies",
    people: "People",
    countries: "Countries",
    sports: "Sports",
    fruits: "Fruits",
    animals: "Animals",
    colors: "Colors",
    foods: "Foods",
    capitals: "Capitals",
    landmarks: "Landmarks",
    music: "Music",
    jobs: "Jobs",
    planets: "Planets",
    tech: "Technology",
    series: "Series",
    history: "History",
    islamicFigures: "Islamic Figures",
    arabicFigures: "Arabic Figures",
  },
  ar: {
    programming: "برمجة",
    movies: "أفلام",
    people: "أشخاص",
    countries: "دول",
    sports: "رياضة",
    fruits: "فواكه",
    animals: "حيوانات",
    colors: "ألوان",
    foods: "أطعمة",
    capitals: "عواصم",
    landmarks: "معالم",
    music: "موسيقى",
    jobs: "وظائف",
    planets: "كواكب",
    tech: "تكنولوجيا",
    series: "مسلسلات",
    history: "تاريخ",
    islamicFigures: "شخصيات إسلامية",
    arabicFigures: "شخصيات عربية",
  },
};

let lettersContainer = document.querySelector(".letters");
let lettersGuessContainer = document.querySelector(".letter-guess");
let theDraw = document.querySelector(".hangman-draw");

let randomWord, randomCategory, guessSpans;
let wrongAttempts = 0;

// الأصوات
let failSound = document.getElementById("fail");
let successSound = document.getElementById("success");

// توليد الحروف حسب اللغة
function generateLetters() {
  lettersContainer.innerHTML = "";
  let lettersSet = currentLang === "en" ? lettersEn : lettersAr;
  let lettersArray = Array.from(lettersSet);

  lettersArray.forEach((letter) => {
    let span = document.createElement("span");
    span.appendChild(document.createTextNode(letter));
    span.className = "letter-box";
    lettersContainer.appendChild(span);
  });
}

// بدء اللعبة
function startGame() {
  lettersGuessContainer.innerHTML = "";
  wrongAttempts = 0;
  theDraw.className = "hangman-draw";
  document.querySelectorAll(".popup").forEach((p) => p.remove());

  let words = wordsData[currentLang];
  let allKeys = Object.keys(words);
  randomCategory = allKeys[Math.floor(Math.random() * allKeys.length)];
  let randomWords = words[randomCategory];
  randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
  randomWord = currentLang === "en" ? randomWord.toLowerCase() : randomWord;

  // اتجاه اللغة
  lettersGuessContainer.style.direction = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelector(".game-info .category").innerHTML =
    " <span>" + categoryNames[currentLang][randomCategory] + "</span>";

  Array.from(randomWord).forEach((letter) => {
    let span = document.createElement("span");
    if (letter === " ") span.className = "with-space";
    lettersGuessContainer.appendChild(span);
  });

  guessSpans = document.querySelectorAll(".letter-guess span");
  generateLetters();
}

// الضغط على الحروف
document.addEventListener("click", (e) => {
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let clickedLetter =
      currentLang === "en"
        ? e.target.innerHTML.toLowerCase()
        : e.target.innerHTML;

    let matchFound = false;

    Array.from(randomWord).forEach((wordLetter, wordIndex) => {
      let checkLetter =
        currentLang === "en" ? wordLetter.toLowerCase() : wordLetter;
      if (clickedLetter === checkLetter) {
        matchFound = true;
        guessSpans[wordIndex].innerHTML = wordLetter;
      }
    });

    if (!matchFound) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      failSound.currentTime = 0; // reset
      failSound.play();
      if (wrongAttempts === 8) endGame(false);
    } else {
      successSound.currentTime = 0; // reset
      successSound.play();
      checkWin();
    }
  }
});

// تحقق من الفوز
function checkWin() {
  let allGuessed = true;
  Array.from(randomWord).forEach((letter, index) => {
    if (letter !== " " && guessSpans[index].innerHTML === "") {
      allGuessed = false;
    }
  });
  if (allGuessed) {
    endGame(true);
  }
}

// نهاية اللعبة
function endGame(win = false) {
  let div = document.createElement("div");
  let text = document.createTextNode(
    win
      ? `${uiText[currentLang].youWin} ${randomWord}`
      : `${uiText[currentLang].gameOver} ${randomWord}`
  );
  div.appendChild(text);
  div.className = "popup";
  document.body.appendChild(div);
  lettersContainer.classList.add("finished");
  setTimeout(() => {
    location.reload();
  }, 2000);
}

// زر تغيير اللغة
document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  localStorage.setItem("lang", currentLang);
  document.getElementById("lang-toggle").innerText =
    currentLang === "en" ? "🌐 EN" : "🌐 AR";
  startGame();
});

// تحميل اللغة المحفوظة
document.getElementById("lang-toggle").innerText =
  currentLang === "en" ? "🌐 EN" : "🌐 AR";
startGame();
