'use strict';

// index.html 用
const startBtn = document.querySelector('.start-btn');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const agreeBtn = document.getElementById('agreeBtn');

// index.html 用イベント
if (startBtn && popup && closeBtn && agreeBtn) {
  startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => (popup.style.display = 'none'));

  agreeBtn.addEventListener('click', () => {
    window.location.href = 'play.html';
  });
}

// BoothSelect.html 用イベント
//ドロップダウン
// const drop_select = document.querySelector('select');
// drop_select.addEventListener('change', () => {});

//ラジオボタン
// const radio_select = document.querySelector('select');
// radio_select.addEventListener('changedecideBtn', () => {});

const drop_select = document.querySelector('select');
if (drop_select) {
  drop_select.addEventListener('change', () => {
    // ドロップダウン変更時の処理を書く
  });
}

// ラジオボタン
const radio_selects = document.querySelectorAll('input[type="radio"]');
if (radio_selects.length > 0) {
  radio_selects.forEach((radio) => {
    radio.addEventListener('change', () => {
      // ラジオボタン変更時の処理を書く
    });
  });
}

//AreaSelect.html,用

// ColorSelect.html 用
const decideBtn = document.getElementById('decideBtn');
// const confirmPopup = document.getElementById('confirmPopup');
// const yesBtn = document.getElementById('yesBtn');
// const noBtn = document.getElementById('noBtn');

// if (decideBtn && confirmPopup && yesBtn && noBtn) {
//   // 決定ボタン押下時にポップアップ表示
//   decideBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     confirmPopup.style.display = 'flex';
//   });

//   // 「はい」→ result.html に遷移
//   yesBtn.addEventListener('click', () => {
//     window.location.href = 'result.html';
//   });

//   // 「いいえ」→ ポップアップを閉じる
//   noBtn.addEventListener('click', () => {
//     confirmPopup.style.display = 'none';
//   });
// }
const buttons = document.querySelectorAll('.button-16grid button');
const confirmPopup = document.getElementById('confirmPopup');
const selectedColorCircle = document.getElementById('selectedColor');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let selectedId = null;

// ボタン押下時
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedId = btn.id;
    selectedColorCircle.style.background = selectedId; // idがカラーコード
    confirmPopup.style.display = 'flex';
  });
});

// 「はい」押下時
yesBtn.addEventListener('click', () => {
  window.location.href = `result.html?color=${encodeURIComponent(selectedId)}`;
});

// 「いいえ」押下時
noBtn.addEventListener('click', () => {
  confirmPopup.style.display = 'none';
});

// result.html 用
const image_list = ['img/仮画像.png', 'img/画像仮2.png'];

const img = document.getElementById('main'); // 画像
const [leftArrow, rightArrow] = document.getElementsByTagName('span');
// ページ読み込み時に実行される
document.addEventListener('DOMContentLoaded', () => {
  img.src = image_list[0]; // 1枚目（配列listの先頭）を設定
});
let imgN = 0; // 現在のファイル番号

// 右矢印ボタンをクリックしたときに実行される
rightArrow.addEventListener('click', () => {
  if (imgN === image_list.length - 1) {
    return; // 最後の画像なら何もしない
  } else {
    imgN += 1; // インデックスを一つ進めて…
    img.src = image_list[imgN]; // src属性を書き換え
  }
});
// 左矢印ボタンをクリックしたときに実行される
leftArrow.addEventListener('click', () => {
  if (imgN === 0) {
    return; // 最初の画像なら何もしない
  } else {
    imgN -= 1;
    img.src = image_list[imgN];
  }
});
