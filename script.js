const m = document.querySelector('.menu');
const n = document.querySelector('.site-header nav');

// メニューボタンのクリック処理
if (m) {
    m.onclick = () => n.classList.toggle('open');
}

// ナビゲーションリンククリック処理
if (n) {
    n.querySelectorAll('a').forEach(a => {
        a.onclick = () => n.classList.remove('open');
    });
}
