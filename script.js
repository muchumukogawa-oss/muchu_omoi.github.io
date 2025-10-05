'use strict';

const startImg = document.querySelector('.start-img');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const agreeBtn = document.getElementById('agreeBtn');
const nextBtn = document.getElementById('nextBtn');

// 「はじめる」クリックでポップアップ表示
startImg.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

// ×ボタンで閉じる
closeBtn.addEventListener('click', () => (popup.style.display = 'none'));

// 「同意する」クリックで play.html へ遷移
agreeBtn.addEventListener('click', () => {
  window.location.href = 'play.html';
});

// 「次へ」クリックで BoothSelect.html へ遷移
nextBtn.addEventListener('click', () => {
  window.location.href = 'BoothSelect.html';
});
