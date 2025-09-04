let startButton = document.querySelector('.startButton');
let stopButton = document.querySelector('.stopButton');
let resetButton = document.querySelector('.resetButton');

// HTML要素を取得
let msecEl = document.querySelector('.millisecond');
let secEl = document.querySelector('.seconds');
let minEl = document.querySelector('.minutes');
let houEl = document.querySelector('.hours');

// 時間を管理する変数
let millisecond = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let timerId = null;

//ラップ機能on　：ture　リセット機能on　：false
let sw = false;

//スタートボタンクリックイベント
startButton.addEventListener('click', function () {
  // 既にタイマーが動いている場合は何もしない
  if (timerId !== null) { //もしtimerIdがnullではない（つまり、タイマーが動いている）なら
    return ; //ここから先を実施しない
  }
  
  if (sw === false) { //もしtimerIdがnullではない（つまり、タイマーが動いている）なら
    resetButton.textContent = "ラップ"; //ここから先を実施しない
    console.log(sw)
  }
  timerId = setInterval(() => {
    millisecond++;

    // 100ミリ秒で1秒に
    if (millisecond >= 100) {
      seconds++;
      millisecond = 0;
    }

    // 60秒で1分に
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
    }

    // 60分で1時間に
    if (minutes >= 60) {
      hours++;
      minutes = 0;
    }

    // 24時間でタイマーを停止
    if (hours >= 24) {
      clearInterval(timerId);
      hours = 0;
      minutes = 0;
      seconds = 0;
      millisecond = 0;
    }

    // HTMLの表示を更新（0埋め表示）
    msecEl.textContent = String(millisecond).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    houEl.textContent = String(hours).padStart(2, '0');
    // .padStart(2, '0') は、文字列の長さが2桁に満たない場合に、先頭を0で埋めてくれる便利なメソッドです。これにより、5が05のように表示され、見た目が整います。



    
  }, 10); // 10ミリ秒ごとに実行
});

//ストップボタンを押したときにタイマーカウントを止める
stopButton.addEventListener('click', function () {
  clearInterval(timerId);
  resetButton.textContent = "リセット";
  timerId = null; // タイマーIDをリセットして再開可能にする
});

//リセットボタンを起動
if(sw === false){
  resetButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
  
    let millisecond = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
  
    msecEl.textContent = String(millisecond).padStart(2, '0');
    secEl.textContent = String(seconds).padStart(2, '0');
    minEl.textContent = String(minutes).padStart(2, '0');
    houEl.textContent = String(hours).padStart(2, '0');
  });
};












