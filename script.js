const heartBtn = document.querySelector('.heart-stack');
const container = document.querySelector('.container');
const text = document.querySelector('h1');
const audio = document.querySelector('#player');

container.addEventListener('click', makeHeartsFly);

function makeHeartsFly() {
  audio.play();
  container.removeEventListener('click', makeHeartsFly);
  heartBtn.remove();
  text.innerHTML = 'Whacky doo!!!';

  const heartEmoji = {
    0: "💙",
    1: "💚",
    2: "💛",
    3: "💕",
    4: "🧡",
    5: "💜",
    6: "❤️",
    7: "💕"
  };

  // Add for-loop to create flying hearts

  for (let i = 0; i < 8; i++) {
    let randomNumber1 = Math.floor(Math.random() * 8);
    let randomNumber2 = Math.floor(Math.random() * 8);
    let randomNumber3 = Math.floor(Math.random() * 8);
    let randomNumber4 = Math.floor(Math.random() * 8);
    let randomNumber5 = Math.floor(Math.random() * 8);
    let randomNumber6 = Math.floor(Math.random() * 8);
    let randomNumber7 = Math.floor(Math.random() * 8);
    let randomNumber8 = Math.floor(Math.random() * 8);
    let randomNumber9 = Math.floor(Math.random() * 8);
    let randomNumber10 = Math.floor(Math.random() * 8);
    let randomNumber11 = Math.floor(Math.random() * 8);
    let randomNumber12 = Math.floor(Math.random() * 8);
    let randomNumber13 = Math.floor(Math.random() * 8);
    let randomNumber14 = Math.floor(Math.random() * 8);

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber1];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber2];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (200 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber3];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber4];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (250 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber5];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber6];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (300 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber7];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber8];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (360 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber9];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber10];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (400 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber11];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber12];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (500 * i))

    setTimeout(() => {
      const heartWrapper = document.createElement('div');
      const heart = document.createElement('div');
      heartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + i);
      container.appendChild(heartWrapper);
      heart.classList.add('heart', 'heart-' + i);
      heart.innerHTML = heartEmoji[randomNumber13];
      heartWrapper.appendChild(heart);

      const altHeartWrapper = document.createElement('div');
      const altHeart = document.createElement('div');
      altHeartWrapper.classList.add('heart-wrapper', 'heart-wrapper-' + (8 + i));
      altHeart.classList.add('heart', 'heart-' + (8 + i));
      altHeart.innerHTML = heartEmoji[randomNumber14];
      container.appendChild(altHeartWrapper);
      altHeartWrapper.appendChild(altHeart);
    }, (540 * i))
  }
}
