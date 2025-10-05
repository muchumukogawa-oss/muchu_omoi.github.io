'use strict';

// index.html 用
const startImg = document.querySelector('.start-img');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close');
const agreeBtn = document.getElementById('agreeBtn');

// play.html 用
const nextBtn = document.getElementById('nextBtn');

// index.html 用イベント
if (startImg && popup && closeBtn && agreeBtn) {
  startImg.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => (popup.style.display = 'none'));

  agreeBtn.addEventListener('click', () => {
    window.location.href = 'play.html';
  });
}

// play.html 用イベント
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    window.location.href = 'BoothSelect.html';
  });
}
