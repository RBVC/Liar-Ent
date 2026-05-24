/* --- Liar Entertainment 全データ管理：data.js --- */

// V3 ニュース
const V3_NEWS = [
    { date: "2022.10.31", tag: "RELEASE", title: "2nd Mini Album 「COOL」", link: "#disco-0" },
    { date: "2022.04.10", tag: "RELEASE", title: "1st Mini Album 「VENOM」", link: "#disco-1" },
    { date: "2022.04.01", tag: "RELEASE", title: "Pre-Debut Cover EP 「ALL OUT」", link: "#disco-2" }
];

// V3 アルバム
const V3_ALBUMS = [
    {
        title: "COOL",
        type: "2nd Mini Album / 2022.10.31",
        img: "images/v3/v3-cool.jpg",
        pcloud: "https://u.pcloud.link/publink/embed?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV"
    },
    {
        title: "VENOM",
        type: "1st Mini Album / 2022.04.10",
        img: "images/v3-venom.jpg",
        pcloud: "https://u.pcloud.link/publink/embed?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7"
    },
    {
        title: "ALL OUT",
        type: "Pre-Debut Cover EP / 2022.04.01",
        img: "images/v3/v3-allout.jpg",
        pcloud: "https://u.pcloud.link/publink/embed?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX"
    }
];

// 共通ハンバーガーメニュー機能
function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-overlay');
    const closer = document.getElementById('menu-closer');
    if (btn) btn.classList.toggle('open');
    if (nav) nav.classList.toggle('open');
    if (closer) closer.classList.toggle('open');
}

// モーダル機能
function openModal(title, date, pcloudUrl) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-date').innerText = date;
    document.getElementById('modal-player').innerHTML = `<iframe src="${pcloudUrl}" frameborder="0" width="100%" height="350" scrolling="no"></iframe>`;
    document.getElementById('disco-modal').classList.add('active');
}

function closeModal(event, force = false) {
    if (force || event.target.id === 'disco-modal') {
        document.getElementById('disco-modal').classList.remove('active');
        document.getElementById('modal-player').innerHTML = '';
    }
}