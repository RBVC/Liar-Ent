/* --- Liar Entertainment Unified Data Ver.26.0 --- */

// --- <3 (V3) ---
const V3_MEMBERS = [
    { name: "JIA (지아)", img: "images/v3/v3-jia.jpg", birthday: "2001.10.09", position: "Leader / Main Vocal / Sub Dancer / Sub Rapper" },
    { name: "LICCA (릿카)", img: "images/v3/v3-licca.jpg", birthday: "2000.07.14", position: "Center / Main Vocal / Main Rapper / Lead Dancer" },
    { name: "NAYEON (나연)", img: "images/v3/v3-nayeon.jpg", birthday: "2006.06.20", position: "Main Dancer / Sub Vocal" }
];
const V3_ALBUMS = [
    { title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3/v3-cool.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
    { title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3/v3-venom.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
    { title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3/v3-allout.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` }
];

// --- GØD7IKE ---
const GOD_MEMBERS = [
    { name: "JIA (지아)", img: "images/god7ike/god7ike-jia.jpg", birthday: "2001.10.09", position: "Leader / Main Vocal" },
    { name: "MIMI (미미)", img: "images/god7ike/god7ike-mimi.jpg", birthday: "2009.11.03", position: "Maknae / Lead Dancer / Sub Vocal" },
    { name: "NAYEON (나연)", img: "images/god7ike/god7ike-nayeon.jpg", birthday: "2006.06.20", position: "Main Dancer / Sub Vocal" },
    { name: "LAY (레이)", img: "images/god7ike/god7ike-lay.jpg", birthday: "2007.01.06", position: "Main Rapper" },
    { name: "HAYUL (하율)", img: "images/god7ike/god7ike-hayul.jpg", birthday: "2003.02.07", position: "Visual / Main Vocal" },
    { name: "LICCA (릿카)", img: "images/god7ike/god7ike-licca.jpg", birthday: "2000.07.14", position: "Center / Lead Vocal / Lead Rapper / Lead Dancer" },
    { name: "ROY (ロイ)", img: "images/god7ike/god7ike-roy.jpg", birthday: "2007.01.06", position: "Main Rapper" }
];
const GOD_ALBUMS = [
    { title: "CHOSEN KARMA", type: "4th Mini Album", img: "images/god7ike/god7ike-chosen-karma.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { title: "Wings", type: "1st Full Album", img: "images/god7ike/god7ike-wings.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { title: "REBORN", type: "3rd Mini Album", img: "images/god7ike/god7ike-reborn.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { title: "JIA RESURRECTION", type: "4uatre & Solo", img: "images/god7ike/4uatre-tea.jpg", embed: `<ul style="text-align:left; color:#fff; font-family:'Noto Sans JP'; padding:20px; list-style:none;"><li>• I'm Ready (Jia Solo)</li><li>• TEA (4uatre)</li><li>• FACT$ (4uatre)</li><li>• FREE&SHINE (feat. Licca)</li></ul>` },
    { title: "PURRFECT", type: "LCR 1st EP", img: "images/god7ike/lcr-purrfect.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { title: "ISSUE MAKER", type: "2nd Mini Album", img: "images/god7ike/god7ike-issue-maker.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { title: "OOMM", type: "1st Mini Album", img: "images/god7ike/god7ike-oomm.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` }
];

// --- 共通機能 ---
function toggleMenu() {
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('nav-overlay').classList.toggle('open');
    document.getElementById('menu-closer').classList.toggle('open');
}

// タブ切り替え（TVT方式）
function switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

function openAlbumModal(data, i) {
    const a = data[i];
    document.getElementById('modal-title').innerText = a.title;
    document.getElementById('modal-body').innerHTML = `<p style="font-size:0.9rem; color:#ccc; margin-bottom:15px;">${a.type}</p><div style="background:#000;">${a.embed}</div>`;
    document.getElementById('master-modal').classList.add('active');
}

function openMemberModal(data, i) {
    const m = data[i];
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-body').innerHTML = `
        <img src="${m.img}" class="modal-img">
        <div class="modal-info-list">
            <div class="modal-info-item"><span class="modal-label">BIRTHDAY</span><span class="modal-value">${m.birthday}</span></div>
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