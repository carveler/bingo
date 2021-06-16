// const randomNumber = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

const numContainer = document.querySelector('.num_container');
const btnStart = document.querySelector('.btn_start');
const resultContainer = document.querySelector('.result_container');
const numResult = document.querySelector('.num_result');
const playDrum = document.getElementById('audio_drum');
const playCymbal = document.getElementById('audio_cymbal');
let numList;
let numArr = []; //1-75
let index;
let num;

//showing random number to window
const showRandomNum = () => {
  //1=<74  get random index
  index = Math.floor(Math.random() * numArr.length);
  num = numArr[index];
  numContainer.textContent = num;
};
//add number 1-75 to HTML
for (let i = 1; i < 76; i++) {
  numList = document.createElement('li');
  numList.classList.add(`num_li_${i}`);
  numList.textContent = i;
  numResult.appendChild(numList);
  numArr.push(i);
}
const numLi = document.querySelector('.num_li');

let spin = true; //true spin　false　stop
let show;
btnStart.addEventListener('click', function () {
  if (numArr.length > 0) {
    if (spin) {
      spin = false;
      btnStart.textContent = 'Stop';
      btnStart.style.backgroundColor = 'rgb(92, 194, 238)';

      playDrum.play();
      //showing random numbers
      show = setInterval(showRandomNum, 30);
    } else {
      spin = true;
      btnStart.textContent = 'Start';
      btnStart.style.backgroundColor = 'rgb(233, 79, 79)';
      playDrum.pause();
      //drum sound reset
      playDrum.currentTime = 0;

      //stop   show = setInterval(showRandomNum, 30);
      clearInterval(show);
      numContainer.textContent = num;
      //delete selected number from array
      numArr.splice(index, 1);

      //change color if it is selected
      document.querySelector(`.num_li_${num}`).style.color =
        'rgb(241, 247, 248)';
      document.querySelector(`.num_li_${num}`).style.backgroundColor =
        'rgb(92, 194, 238)';
    }
  }
});
