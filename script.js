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
const drop_select = document.querySelector('select');
drop_select.addEventListener('change', () => {});

//ラジオボタン
const radio_select = document.querySelector('select');
radio_select.addEventListener('change', () => {});
