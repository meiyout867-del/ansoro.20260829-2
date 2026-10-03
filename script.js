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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // 要素が画面内に入ったらクラスを付与
        if (entry.isIntersecting) {
            entry.target.classList.add('is-show');
        }
    });
}, {
    rootMargin: '0px 0px -20% 0px' // 画面の下部20%を通過したら発火
});

// .fade-up クラスを持つすべての要素を監視
document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

const headings = document.querySelectorAll(".section h2");

const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            headingObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

headings.forEach((heading) => {
    headingObserver.observe(heading);
});
