/* --- Liar Entertainment Data Management Ver.25.0 --- */

// --- <3 (V3) DATA ---
const V3_NEWS = [
    { date: "2022.10.31", tag: "RELEASE", title: "2nd Mini Album 「COOL」", link: "#COOL" },
    { date: "2022.04.10", tag: "RELEASE", title: "1st Mini Album 「VENOM」", link: "#VENOM" },
    { date: "2022.04.01", tag: "RELEASE", title: "Pre-Debut Cover EP 「ALL OUT」", link: "#ALL-OUT" }
];
const V3_MEMBERS = [
    { name: "JIA (지아)", img: "images/v3/v3-jia.jpg", birthday: "2001.10.09", role: "Leader", position: "Main Vocal / Sub Dancer / Sub Rapper" },
    { name: "LICCA (릿카)", img: "images/v3/v3-licca.jpg", birthday: "2000.07.14", role: "Center", position: "Main Vocal / Main Rapper / Lead Dancer" },
    { name: "NAYEON (나연)", img: "images/v3/v3-nayeon.jpg", birthday: "2006.06.20", role: "", position: "Main Dancer / Sub Vocal" }
];
const V3_ALBUMS = [
    { id: "COOL", title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3/v3-cool.jpg", embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
    { id: "VENOM", title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3/v3-venom.jpg", embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
    { id: "ALL-OUT", title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3/v3-allout.jpg", embed: `<iframe src="https://u.pcloud.link/publink/embed?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` }
];

// --- GØD7IKE DATA ---
const GOD_NEWS = [
    { date: "2026.XX.XX", tag: "RELEASE", title: "4th Mini Album 「CHOSEN KARMA」", link: "#CHOSEN_KARMA" },
    { date: "2025.10.07", tag: "RELEASE", title: "1st Full Album 「Wings」", link: "#Wings" },
    { date: "2025.02.24", tag: "RELEASE", title: "3rd Mini Album 「REBORN」", link: "#REBORN" },
    { date: "2024.12.XX", tag: "RELEASE", title: "Special Remix 「FREE&SHINE」", link: "#JIA_PROJECT" },
    { date: "2024.11.XX", tag: "RELEASE", title: "4uatre Single 「TEA」", link: "#JIA_PROJECT" },
    { date: "2024.10.XX", tag: "RELEASE", title: "Jia Solo 「I'm Ready」", link: "#JIA_PROJECT" },
    { date: "2024.09.XX", tag: "RELEASE", title: "4uatre Single 「FACT$」", link: "#JIA_PROJECT" },
    { date: "2024.04.22", tag: "RELEASE", title: "LCR 1st EP 「PURRFECT」", link: "#LCR" },
    { date: "2023.11.14", tag: "RELEASE", title: "2nd Mini Album 「ISSUE MAKER」", link: "#ISSUE_MAKER" },
    { date: "2023.05.21", tag: "RELEASE", title: "1st Mini Album 「OOMM」", link: "#OOMM" }
];
const GOD_MEMBERS = [
    { name: "JIA (지아)", img: "images/god7ike/god7ike-jia.jpg", birthday: "2001.10.09", role: "Leader", position: "Main Vocal" },
    { name: "MIMI (미미)", img: "images/god7ike/god7ike-mimi.jpg", birthday: "2009.11.03", role: "Maknae", position: "Lead Dancer / Sub Vocal" },
    { name: "NAYEON (나연)", img: "images/god7ike/god7ike-nayeon.jpg", birthday: "2006.06.20", role: "", position: "Main Dancer / Sub Vocal" },
    { name: "LAY (레이)", img: "images/god7ike/god7ike-lay.jpg", birthday: "2007.01.06", role: "", position: "Main Rapper" },
    { name: "HAYUL (하율)", img: "images/god7ike/god7ike-hayul.jpg", birthday: "2003.02.07", role: "Visual", position: "Main Vocal" },
    { name: "LICCA (릿카)", img: "images/god7ike/god7ike-licca.jpg", birthday: "2000.07.14", role: "Center", position: "Lead Vocal / Lead Rapper / Lead Dancer" },
    { name: "ROY (ロイ)", img: "images/god7ike/god7ike-roy.jpg", birthday: "2007.01.06", role: "", position: "Main Rapper" }
];
const GOD_ALBUMS = [
    { id: "CHOSEN_KARMA", title: "CHOSEN KARMA", type: "4th Mini Album", img: "images/god7ike/god7ike-chosen-karma.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { id: "Wings", title: "Wings", type: "1st Full Album", img: "images/god7ike/god7ike-wings.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { id: "REBORN", title: "REBORN", type: "3rd Mini Album", img: "images/god7ike/god7ike-reborn.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { id: "JIA_PROJECT", title: "JIA RESURRECTION", type: "4uatre & Solo", img: "images/god7ike/4uatre-tea.jpg", embed: `<ul style="text-align:left; color:#fff; font-family:'Noto Sans JP'; padding:20px; list-style:none;"><li style="margin-bottom:10px;">• I'm Ready (Jia Solo)</li><li style="margin-bottom:10px;">• TEA (4uatre)</li><li style="margin-bottom:10px;">• FACT$ (4uatre)</li><li>• FREE&SHINE (feat. Licca)</li></ul>` },
    { id: "LCR", title: "PURRFECT", type: "LCR 1st EP", img: "images/god7ike/lcr-purrfect.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { id: "ISSUE_MAKER", title: "ISSUE MAKER", type: "2nd Mini Album", img: "images/god7ike/god7ike-issue-maker.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` },
    { id: "OOMM", title: "OOMM", type: "1st Mini Album", img: "images/god7ike/god7ike-oomm.jpg", embed: `<p style='padding:20px;'>PLAYER COMING SOON</p>` }
];

// --- 共通機能 ---
function toggleMenu() {
    document.getElementById('menu-btn').classList.toggle('open');
    document.getElementById('nav-overlay').classList.toggle('open');
    document.getElementById('menu-closer').classList.toggle('open');
}
function openAlbumModal(data, i) {
    const a = data[i];
    document.getElementById('modal-title').innerText = a.title;
    document.getElementById('modal-body').innerHTML = `<p style="font-size:0.9rem; color:#ccc; margin-bottom:15px; font-family:'Noto Sans JP'; text-align:center;">${a.type}</p><div class="player-container" style="background:#000;">${a.embed}</div>`;
    document.getElementById('master-modal').classList.add('active');
}
function openMemberModal(data, i) {
    const m = data[i];
    const combinedPosition = m.role ? `${m.role} / ${m.position}` : m.position;
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-body').innerHTML = `<img src="${m.img}" class="modal-img"><div class="modal-info-list"><div class="modal-info-item"><span class="modal-label">BIRTHDAY</span><span class="modal-value">${m.birthday}</span></div><div class="modal-info-item"><span class="modal-label">POSITION</span><span class="modal-value">${combinedPosition}</span></div></div>`;
    document.getElementById('master-modal').classList.add('active');
}
function closeModal(e, force = false) {
    if (force || e.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}
function toggleNews() {
    const hiddenItems = document.querySelectorAll('.news-item.hidden-news');
    const btn = document.getElementById('view-more-btn');
    if(!btn) return;
    const isExpanding = btn.innerText === 'VIEW MORE';
    hiddenItems.forEach(item => { item.style.display = isExpanding ? 'flex' : 'none'; });
    btn.innerText = isExpanding ? 'CLOSE' : 'VIEW MORE';
}