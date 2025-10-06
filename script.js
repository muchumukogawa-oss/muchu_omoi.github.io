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
// radio_select.addEventListener('change', () => {});

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

// ColorSelect.html 用
const decideBtn = document.getElementById('decideBtn');
const confirmPopup = document.getElementById('confirmPopup');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

if (decideBtn && confirmPopup && yesBtn && noBtn) {
  // 決定ボタン押下時にポップアップ表示
  decideBtn.addEventListener('click', (e) => {
    e.preventDefault();
    confirmPopup.style.display = 'flex';
  });

  // 「はい」→ result.html に遷移
  yesBtn.addEventListener('click', () => {
    window.location.href = 'result.html';
  });

  // 「いいえ」→ ポップアップを閉じる
  noBtn.addEventListener('click', () => {
    confirmPopup.style.display = 'none';
  });
}
