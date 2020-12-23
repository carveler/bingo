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

let spin = true; //true 動作　false　停止
let show;
btnStart.addEventListener('click', function () {
  if (spin) {
    spin = false;
    btnStart.textContent = 'Stop';
    playDrum.play();
    //showing random numbers
    show = setInterval(showRandomNum, 30);
  } else {
    spin = true;
    btnStart.textContent = 'Start';
    playDrum.pause();
    playDrum.currentTime = 0;
    clearInterval(show);
    numContainer.textContent = num;
    console.log(num);
    numArr.splice(index, 1);

    document.querySelector(`.num_li_${num}`).style.color = 'rgb(241, 247, 248)';
    document.querySelector(`.num_li_${num}`).style.backgroundColor =
      'rgb(92, 194, 238)';
  }

  //delete selected number from array

  //change color if it is selected
});
