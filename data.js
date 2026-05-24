/* --- Liar Entertainment Data Management --- */

const V3_NEWS = [
    { date: "2022.10.31", tag: "RELEASE", title: "2nd Mini Album 「COOL」", link: "#disco-0" },
    { date: "2022.04.10", tag: "RELEASE", title: "1st Mini Album 「VENOM」", link: "#disco-1" },
    { date: "2022.04.01", tag: "RELEASE", title: "Pre-Debut Cover EP 「ALL OUT」", link: "#disco-2" }
];

const V3_ALBUMS = [
    { title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3-cool.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV" },
    { title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3-venom.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7" },
    { title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3-allout.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX" }
];

// ハンバーガーメニュー
function toggleMenu() {
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('nav-overlay').classList.toggle('open');
    document.getElementById('menu-closer').classList.toggle('open');
}

// モーダル
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