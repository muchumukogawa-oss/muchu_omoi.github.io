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

// 以下実行コード　　エラー出るためコメントアウト中
if (window.location.pathname.endsWith('result.html')) {
  //   // 各エリアごとにカラーコードと画像パスを管理
  const imageMap = {
    1: {
      '#92d050': ['img/area1/001.PNG', 'img/area1/101.PNG'],
      '#ffee00': ['img/area1/002.PNG', 'img/area1/102.PNG'],
      '#ffd500': ['img/area1/003.PNG', 'img/area1/103.PNG'],
      '#db3522': ['img/area1/004.PNG', 'img/area1/104.PNG'],
      '#f5fe68': ['img/area1/005.PNG', 'img/area1/105.PNG'],
      '#dc6c2d': ['img/area1/006.PNG', 'img/area1/106.PNG'],
      '#dc6c2d': ['img/area1/007.PNG', 'img/area1/107.PNG'],
      '#dd544b': ['img/area1/008.PNG', 'img/area1/108.PNG'],
      '#f8f371': ['img/area1/009.PNG', 'img/area1/109.PNG'],
      '#ebbc5c': ['img/area1/010.PNG', 'img/area1/110.PNG'],
      '#e898dc': ['img/area1/011.PNG', 'img/area1/111.PNG'],
      '#e48f8c': ['img/area1/012.PNG', 'img/area1/112.PNG'],
      '#ebe94f': ['img/area1/013.PNG', 'img/area1/113.PNG'],
      '#deac89': ['img/area1/014.PNG', 'img/area1/114.PNG'],
      '#f0cea0': ['img/area1/015.PNG', 'img/area1/115.PNG'],
      '#f0cea0': ['img/area1/016.PNG', 'img/area1/116.PNG']
      // ... 1エリアの16色分
    },
    2: {
      '#c1e4f5': ['img/area2/001.PNG', 'img/area2/101.PNG'],
      '#ffcccc': ['img/area2/002.PNG', 'img/area2/102.PNG'],
      '#ffddf4': ['img/area2/003.PNG', 'img/area2/103.PNG'],
      '#00b050': ['img/area2/004.PNG', 'img/area2/104.PNG'],
      '#83caeb': ['img/area2/005.PNG', 'img/area2/105.PNG'],
      '#ff9999': ['img/area2/006.PNG', 'img/area2/106.PNG'],
      '#e3f8fa': ['img/area2/007.PNG', 'img/area2/107.PNG'],
      '#fdffd1': ['img/area2/008.PNG', 'img/area2/108.PNG'],
      '#6d93d2': ['img/area2/009.PNG', 'img/area2/109.PNG'],
      '#c1e3a8': ['img/area2/010.PNG', 'img/area2/110.PNG'],
      '#cbf0f6': ['img/area2/011.PNG', 'img/area2/111.PNG'],
      '#fcfea6': ['img/area2/012.PNG', 'img/area2/112.PNG'],
      '#405d94': ['img/area2/013.PNG', 'img/area2/113.PNG'],
      '#7ab1dc': ['img/area2/014.PNG', 'img/area2/114.PNG'],
      '#7ed2e0': ['img/area2/015.PNG', 'img/area2/115.PNG'],
      '#eeb4fa': ['img/area2/016.PNG', 'img/area2/116.PNG']
      // ... 2エリアの16色分
    },
    3: {
      '#d0d0d0': ['img/area3/001.PNG', 'img/area3/101.PNG'],
      '#5d93c4': ['img/area3/002.PNG', 'img/area3/102.PNG'],
      '#64a8b4': ['img/area3/003.PNG', 'img/area3/103.PNG'],
      '#729f4f': ['img/area3/004.PNG', 'img/area3/104.PNG'],
      '#747474': ['img/area3/005.PNG', 'img/area3/105.PNG'],
      '#426a8c': ['img/area3/006.PNG', 'img/area3/106.PNG'],
      '#406a7e': ['img/area3/007.PNG', 'img/area3/107.PNG'],
      '#52714a': ['img/area3/008.PNG', 'img/area3/108.PNG'],
      '#3a3a3a': ['img/area3/009.PNG', 'img/area3/109.PNG'],
      '#2b475f': ['img/area3/010.PNG', 'img/area3/110.PNG'],
      '#2e5055': ['img/area3/011.PNG', 'img/area3/111.PNG'],
      '#3c542a': ['img/area3/012.PNG', 'img/area3/112.PNG'],
      '#000000': ['img/area3/013.PNG', 'img/area3/113.PNG'],
      '#1c2f3f': ['img/area3/014.PNG', 'img/area3/114.PNG'],
      '#233f43': ['img/area3/015.PNG', 'img/area3/115.PNG'],
      '#595959': ['img/area3/016.PNG', 'img/area3/116.PNG']
      // ... 3エリアの16色分
    },
    4: {
      '#cdcd44': ['img/area4/001.PNG', 'img/area4/101.PNG'],
      '#c797cf': ['img/area4/002.PNG', 'img/area4/102.PNG'],
      '#9788ad': ['img/area4/003.PNG', 'img/area4/103.PNG'],
      '#b16159': ['img/area4/004.PNG', 'img/area4/104.PNG'],
      '#838328': ['img/area4/005.PNG', 'img/area4/105.PNG'],
      '#8d6b9f': ['img/area4/006.PNG', 'img/area4/106.PNG'],
      '#9c615f': ['img/area4/007.PNG', 'img/area4/107.PNG'],
      '#b82b1b': ['img/area4/008.PNG', 'img/area4/108.PNG'],
      '#525216': ['img/area4/009.PNG', 'img/area4/109.PNG'],
      '#7c657f': ['img/area4/010.PNG', 'img/area4/110.PNG'],
      '#be6948': ['img/area4/011.PNG', 'img/area4/111.PNG'],
      '#83361d': ['img/area4/012.PNG', 'img/area4/112.PNG'],
      '#3b0703': ['img/area4/013.PNG', 'img/area4/113.PNG'],
      '#69296c': ['img/area4/014.PNG', 'img/area4/114.PNG'],
      '#983162': ['img/area4/015.PNG', 'img/area4/115.PNG'],
      '#69140b': ['img/area4/016.PNG', 'img/area4/116.PNG']
      // ... 4エリアの16色分
    }
  };
  // URLパラメータからエリアとカラーコードを取得

  const params = new URLSearchParams(window.location.search);
  const area = params.get('area');
  const color = params.get('color');
  const img = document.getElementById('main');
  const leftArrow = document.querySelector('.leftArrow');
  const rightArrow = document.querySelector('.rightArrow');

  let imgN = 0;
  let imageList = [];

  function updateArrows() {
    if (!leftArrow || !rightArrow) return;
    // 左端なら左矢印非表示
    leftArrow.style.display = imgN === 0 ? 'none' : 'block';
    // 右端なら右矢印非表示
    rightArrow.style.display = imgN === imageList.length - 1 ? 'none' : 'block';
  }

  if (img && area && color && imageMap[area] && imageMap[area][color]) {
    imageList = imageMap[area][color];
    img.src = imageList[imgN];
    updateArrows();

    // スライドショーのイベント
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => {
        if (imgN > 0) {
          imgN -= 1;
          img.src = imageList[imgN];
          updateArrows();
        }
      });
      rightArrow.addEventListener('click', () => {
        if (imgN < imageList.length - 1) {
          imgN += 1;
          img.src = imageList[imgN];
          updateArrows();
        }
      });
    }
  } else if (img) {
    img.src = 'img/仮画像.png';
    if (leftArrow) leftArrow.style.display = 'none';
    if (rightArrow) rightArrow.style.display = 'none';
  }
}
