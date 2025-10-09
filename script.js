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
const backeBtn = document.getElementById('backBtn');

const buttons = document.querySelectorAll('.button-16grid button');
const confirmPopup = document.getElementById('confirmPopup');
const selectedColorCircle = document.getElementById('selectedColor');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

let selectedId = null;

if (buttons.length > 0 && confirmPopup && selectedColorCircle && yesBtn && noBtn) {
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
    // window.location.href = `result.html?color=${encodeURIComponent(selectedId)}`;
    const areaDiv = document.querySelector('.button-16grid');
    const areaNum = areaDiv ? areaDiv.id.replace('area', '') : '1';
    window.location.href = `result.html?area=${areaNum}&color=${encodeURIComponent(selectedId)}`;
  });

  // 「いいえ」押下時
  noBtn.addEventListener('click', () => {
    confirmPopup.style.display = 'none';
  });
}

// result.html 用

//スライドショー
// const image_list = ['img/仮画像.png', 'img/画像仮2.png'];

// // ...existing code...
// const img = document.getElementById('main'); // 画像
// const [leftArrow, rightArrow] = document.getElementsByTagName('span');

// document.addEventListener('DOMContentLoaded', () => {
//   if (img) {
//     img.src = image_list[0];
//   }
// });

// let imgN = 0;

// if (img && leftArrow && rightArrow) {
//   rightArrow.addEventListener('click', () => {
//     if (imgN === image_list.length - 1) return;
//     imgN += 1;
//     img.src = image_list[imgN];
//   });
//   leftArrow.addEventListener('click', () => {
//     if (imgN === 0) return;
//     imgN -= 1;
//     img.src = image_list[imgN];
//   });
// }

//キャラクター画像用
//エリア1-4のボタンでresult.htmlでimg id=mainとしているところに各画像を入れ込みたい。16個の画像が必要であるが、各エリアによって画像が違う。その場合一番効率の良いコードを書け

// 以下実行コード　　エラー出るためコメントアウト中
// if (window.location.pathname.endsWith('result.html')) {
//   // 各エリアごとにカラーコードと画像パスを管理
//   const imageMap = {
//     1: {
//       "#92d050": ['img/仮画像.png','img/画像仮2.png'],
//       "#ffee00": ['img/area1/2.png'],
//       "#ffd500":,
//       "#db3522":,
//       "#f5fe68":,
//       "#dc6c2d":,
//       "#dc6c2d":,
//       "#dd544b":,
//       "#f8f371":,
//       "#ebbc5c":,
//       "#e898dc":,
//       "#e48f8c":,
//       "#ebe94f":,
//       "#deac89":,
//       "#f0cea0":,
//       "#f0cea0":,
//       // ... 1エリアの16色分
//     },
//     2: {
//       "#cde3f3": 'img/area2/1.png',
//       "#f1cecd": 'img/area2/2.png',
//       "#f6dff2":,
//       "#5fad5c":,
//       "#9ec8e7":,
//       "#e79e9b":,
//       "#e3f8fa":,
//       "#fdffd1":,
//       "#6d93d2":,
//       "#c1e3a8":,
//       "#cbf0f6":,
//       "#fcfea6":,
//       "#405d94":,
//       "#7ab1dc":,
//       "#7ed2e0":,
//       "#eeb4fa":,
//       // ... 2エリアの16色分
//     },
//     3: {
//       "#d0d0d0": 'img/area3/1.png',
//       "#5d93c4": 'img/area3/2.png',
//       "#64a8b4":,
//       "#729f4f":,
//       "#747474":,
//       "#426a8c":,
//       "#406a7e":,
//       "#52714a":,
//       "#3a3a3a":,
//       "#2b475f":,
//       "#2e5055":,
//       "#3c542a":,
//       "#000000":,
//       "#1c2f3f":,
//       "#233f43":,
//       "#595959":,
//       // ... 3エリアの16色分
//     },
//     4: {
//       "#cdcd44": 'img/area4/1.png',
//       "#c797cf": 'img/area4/2.png',
//       "#9788ad":,
//       "#b16159":,
//       "#838328":,
//       "#8d6b9f":,
//       "#9c615f":,
//       "#b82b1b":,
//       "#525216":,
//       "#7c657f":,
//       "#be6948":,
//       "#83361d":,
//       "#3b0703":,
//       "#69296c":,
//       "#983162":,
//       "#69140b":,
//       // ... 4エリアの16色分
//     }
//   };
//   // URLパラメータからエリアとカラーコードを取得

//   const params = new URLSearchParams(window.location.search);
//   const area = params.get('area');
//   const color = params.get('color');
//   const img = document.getElementById('main');
//   const leftArrow = document.querySelector('.leftArrow');
//   const rightArrow = document.querySelector('.rightArrow');

//   let imgN = 0;
//   let imageList = [];

//   if (img && area && color && imageMap[area] && imageMap[area][color]) {
//     imageList = imageMap[area][color];
//     img.src = imageList[imgN];

//     // スライドショーのイベント
//     if (leftArrow && rightArrow) {
//       leftArrow.addEventListener('click', () => {
//         if (imgN > 0) {
//           imgN -= 1;
//           img.src = imageList[imgN];
//         }
//       });
//       rightArrow.addEventListener('click', () => {
//         if (imgN < imageList.length - 1) {
//           imgN += 1;
//           img.src = imageList[imgN];
//         }
//       });
//     }
//   } else if (img) {
//     img.src = 'img/仮画像.png';
//   }
// }
