/* --- Liar Entertainment Data Ver.26.0 --- */

const V3_DATA = {
    members: [
        { name: "JIA (지아)", img: "images/v3/v3-jia.jpg", birthday: "2001.10.09", position: "Leader / Main Vocal / Sub Dancer / Sub Rapper" },
        { name: "LICCA (릿카)", img: "images/v3/v3-licca.jpg", birthday: "2000.07.14", position: "Center / Main Vocal / Main Rapper / Lead Dancer" },
        { name: "NAYEON (나연)", img: "images/v3/v3-nayeon.jpg", birthday: "2006.06.20", position: "Main Dancer / Sub Vocal" }
    ],
    albums: [
        { title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3/v3-cool.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV&view=list" width="100%" height="500" frameborder="0"></iframe>` },
        { title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3/v3-venom.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7&view=list" width="100%" height="500" frameborder="0"></iframe>` },
        { title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3/v3-allout.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX&view=list" width="100%" height="500" frameborder="0"></iframe>` }
    ]
};

const GOD_DATA = {
    members: [
        { name: "JIA (지아)", img: "images/god7ike/god7ike-jia.jpg", birthday: "2001.10.09", position: "Leader / Main Vocal" },
        { name: "MIMI (미미)", img: "images/god7ike/god7ike-mimi.jpg", birthday: "2009.11.03", position: "Maknae / Lead Dancer / Sub Vocal" },
        { name: "NAYEON (나연)", img: "images/god7ike/god7ike-nayeon.jpg", birthday: "2006.06.20", position: "Main Dancer / Sub Vocal" },
        { name: "LAY (레이)", img: "images/god7ike/god7ike-lay.jpg", birthday: "2007.01.06", position: "Main Rapper" },
        { name: "HAYUL (하율)", img: "images/god7ike/god7ike-hayul.jpg", birthday: "2003.02.07", position: "Visual / Main Vocal" },
        { name: "LICCA (릿카)", img: "images/god7ike/god7ike-licca.jpg", birthday: "2000.07.14", position: "Center / Lead Vocal / Lead Rapper / Lead Dancer" },
        { name: "ROY (ロイ)", img: "images/god7ike/god7ike-roy.jpg", birthday: "2007.01.06", position: "Main Rapper" }
    ],
    albums: [
        { title: "CHOSEN KARMA", type: "4th Mini Album", img: "images/god7ike/god7ike-chosen-karma.jpg", embed: `<p>Coming Soon</p>` },
        { title: "Wings", type: "1st Full Album", img: "images/god7ike/god7ike-wings.jpg", embed: `<p>Coming Soon</p>` },
        { title: "REBORN", type: "3rd Mini Album", img: "images/god7ike/god7ike-reborn.jpg", embed: `<p>Coming Soon</p>` },
        { title: "JIA PROJECT", type: "4uatre & Solo", img: "images/god7ike/4uatre-tea.jpg", embed: `<p>I'm Ready / TEA / FACT$ / FREE&SHINE</p>` },
        { title: "PURRFECT", type: "LCR 1st EP", img: "images/god7ike/lcr-purrfect.jpg", embed: `<p>Coming Soon</p>` },
        { title: "ISSUE MAKER", type: "2nd Mini Album", img: "images/god7ike/god7ike-issue-maker.jpg", embed: `<p>Coming Soon</p>` },
        { title: "OOMM", type: "1st Mini Album", img: "images/god7ike/god7ike-oomm.jpg", embed: `<p>Coming Soon</p>` }
    ]
};

// 共通機能
function toggleMenu() {
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('nav-menu').classList.toggle('open');
}

function switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

function openMemberModal(group, i) {
    const data = group === 'v3' ? V3_DATA.members : GOD_DATA.members;
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

function openAlbumModal(group, i) {
    const data = group === 'v3' ? V3_DATA.albums : GOD_DATA.albums;
    const a = data[i];
    document.getElementById('modal-title').innerText = a.title;
    document.getElementById('modal-body').innerHTML = `
        <p style="font-size:12px; color:#ccc; margin-bottom:20px; font-weight:800; letter-spacing:2px;">${a.type}</p>
        <div style="background:#f9f9f9; border-radius:10px; overflow:hidden;">${a.embed}</div>
    `;
    document.getElementById('master-modal').classList.add('active');
}

function closeModal(e, force = false) {
    if (force || e.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}