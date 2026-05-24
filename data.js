/* --- Liar Entertainment 全データ管理：data.js Ver.15.2 --- */

// V3 ニュース (IDを ALL-OUT に変更)
const V3_NEWS = [
    { date: "2022.10.31", tag: "RELEASE", title: "2nd Mini Album 「COOL」", link: "#COOL" },
    { date: "2022.04.10", tag: "RELEASE", title: "1st Mini Album 「VENOM」", link: "#VENOM" },
    { date: "2022.04.01", tag: "RELEASE", title: "Pre-Debut Cover EP 「ALL OUT」", link: "#ALL-OUT" }
];

// V3 メンバー詳細
const V3_MEMBERS = [
    { name: "JIA (지아)", img: "images/v3/v3-jia.jpg", birthday: "2001.10.09", role: "Leader", position: "Main Vocal / Sub Dancer / Sub Rapper" },
    { name: "LICCA (릿카)", img: "images/v3/v3-licca.jpg", birthday: "2000.07.14", role: "Center", position: "Main Rapper / Lead Vocal / Lead Dancer" },
    { name: "NAYEON (나연)", img: "images/v3/v3-nayeon.jpg", birthday: "2006.06.20", role: "Maknae", position: "Main Dancer / Lead Rapper / Sub Vocal" }
];

// V3 アルバム (IDを ALL-OUT に変更)
const V3_ALBUMS = [
    { 
        id: "COOL",
        title: "COOL", 
        type: "2nd Mini Album / 2022.10.31", 
        img: "images/v3/v3-cool.jpg", 
        embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>`
    },
    { 
        id: "VENOM",
        title: "VENOM", 
        type: "1st Mini Album / 2022.04.10", 
        img: "images/v3/v3-venom.jpg", 
        embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>`
    },
    { 
        id: "ALL-OUT",
        title: "ALL OUT", 
        type: "Pre-Debut Cover EP / 2022.04.01", 
        img: "images/v3/v3-allout.jpg", 
        embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>`
    }
];

// --- 共通機能 ---

function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-overlay');
    const closer = document.getElementById('menu-closer');
    if (btn) btn.classList.toggle('open');
    if (nav) nav.classList.toggle('open');
    if (closer) closer.classList.toggle('open');
}

function openAlbumModal(i) {
    const a = V3_ALBUMS[i];
    document.getElementById('modal-title').innerText = a.title;
    document.getElementById('modal-body').innerHTML = `
        <p style="font-size:0.9rem; color:#ccc; margin-bottom:15px; font-family:'Noto Sans JP'; text-align:center;">${a.type}</p>
        <div class="player-container">${a.embed}</div>
    `;
    document.getElementById('master-modal').classList.add('active');
}

function openMemberModal(i) {
    const m = V3_MEMBERS[i];
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-body').innerHTML = `
        <img src="${m.img}" class="modal-img">
        <div class="modal-info-list">
            <div class="modal-info-item"><span class="modal-label">BIRTHDAY</span><span class="modal-value">${m.birthday}</span></div>
            <div class="modal-info-item"><span class="modal-label">ROLE</span><span class="modal-value">${m.role}</span></div>
            <div class="modal-info-item"><span class="modal-label">POSITION</span><span class="modal-value">${m.position}</span></div>
        </div>
    `;
    document.getElementById('master-modal').classList.add('active');
}

function closeModal(e, force = false) {
    if (force || e.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}