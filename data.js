/* --- Liar Entertainment 全データ管理：data.js --- */

// V3 ニュース
const V3_NEWS = [
    { date: "2022.10.31", tag: "RELEASE", title: "2nd Mini Album 「COOL」", link: "#disco-0" },
    { date: "2022.04.10", tag: "RELEASE", title: "1st Mini Album 「VENOM」", link: "#disco-1" },
    { date: "2022.04.01", tag: "RELEASE", title: "Pre-Debut Cover EP 「ALL OUT」", link: "#disco-2" }
];

// V3 メンバー詳細（画像パスを images/v3/ に修正）
const V3_MEMBERS = [
    {
        name: "JIA (지아)",
        img: "images/v3/v3-jia.jpg",
        birthday: "2001.10.09",
        role: "Leader",
        position: "Main Vocal / Sub Dancer / Sub Rapper"
    },
    {
        name: "LICCA (릿카)",
        img: "images/v3/v3-licca.jpg",
        birthday: "2000.07.14",
        role: "Center",
        position: "Main Rapper / Lead Vocal / Lead Dancer"
    },
    {
        name: "NAYEON (나연)",
        img: "images/v3/v3-nayeon.jpg",
        birthday: "2006.06.20",
        role: "Maknae",
        position: "Main Dancer / Lead Rapper / Sub Vocal"
    }
];

// V3 アルバム（画像パスを images/v3/ に修正）
const V3_ALBUMS = [
    { title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3/v3-cool.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV" },
    { title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3/v3-venom.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7" },
    { title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3/v3-allout.jpg", pcloud: "https://u.pcloud.link/publink/embed?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX" }
];

// --- 共通機能 ---

// ハンバーガーメニュー
function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-overlay');
    const closer = document.getElementById('menu-closer');
    if (btn) btn.classList.toggle('open');
    if (nav) nav.classList.toggle('open');
    if (closer) closer.classList.toggle('open');
}

// モーダル：アルバム用
function openAlbumModal(i) {
    const a = V3_ALBUMS[i];
    document.getElementById('modal-title').innerText = a.title;
    document.getElementById('modal-body').innerHTML = `
        <p style="font-size:0.9rem; color:#ccc; margin-bottom:15px; font-family:'Noto Sans JP';">${a.type}</p>
        <iframe src="${a.pcloud}" frameborder="0" width="100%" height="350" scrolling="no"></iframe>
    `;
    document.getElementById('master-modal').classList.add('active');
}

// モーダル：メンバー用
function openMemberModal(i) {
    const m = V3_MEMBERS[i];
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-body').innerHTML = `
        <img src="${m.img}" class="modal-img">
        <div class="modal-info-text">
            <p><b>BIRTHDAY</b> ${m.birthday}</p>
            <p><b>ROLE</b> ${m.role}</p>
            <p><b>POSITION</b> ${m.position}</p>
        </div>
    `;
    document.getElementById('master-modal').classList.add('active');
}

// モーダル閉じる
function closeModal(e, force = false) {
    if (force || e.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}