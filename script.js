const balloonBtn = document.querySelector('.balloon-stack');
const container = document.querySelector('.container');
const text = document.querySelector('h1');
const audio = document.querySelector('#player');

container.addEventListener('click', makeBalloonsFly);

function makeBalloonsFly() {
  audio.play();
  container.removeEventListener('click', makeBalloonsFly);
  balloonBtn.remove();
  text.innerHTML = 'Whippeee!!!';
  text.classList.add('h1-clicked');
  container.classList.add('container-clicked');

  const balloonEmoji = {
    0: "🎈",
    1: "🎈",
    2: "🎈",
    3: "🎈",
    4: "🎈",
    5: "🎈",
    6: "🎈",
    7: "🎈"
  };

  // Add for-loop to create flying balloons

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
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber1];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber2];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (200 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber3];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber4];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (250 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber5];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber6];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (300 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber7];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber8];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (360 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber9];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber10];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (400 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber11];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber12];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (500 * i))

    setTimeout(() => {
      const balloonWrapper = document.createElement('div');
      const balloon = document.createElement('div');
      balloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + i);
      container.appendChild(balloonWrapper);
      balloon.classList.add('balloon', 'balloon-' + i);
      balloon.innerHTML = balloonEmoji[randomNumber13];
      balloonWrapper.appendChild(balloon);

      const altBalloonWrapper = document.createElement('div');
      const altBalloon = document.createElement('div');
      altBalloonWrapper.classList.add('balloon-wrapper', 'balloon-wrapper-' + (8 + i));
      altBalloon.classList.add('balloon', 'balloon-' + (8 + i));
      altBalloon.innerHTML = balloonEmoji[randomNumber14];
      container.appendChild(altBalloonWrapper);
      altBalloonWrapper.appendChild(altBalloon);
    }, (540 * i))
  }
}
