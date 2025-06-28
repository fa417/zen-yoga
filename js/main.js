// トップに戻るボタン
const backToTop = document.getElementById('to-top-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// 

// 下からふわっと出る
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(el => observer.observe(el));
});
// 

// リロード時ページトップへ戻る
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// 