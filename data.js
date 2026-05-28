/* --- Liar Entertainment Data Ver.30.0 --- */

const allGroups = {
    "v3": {
        name: "<3",
        banner: "images/v3/v3-main.jpg",
        about: "<3（V3、ヴィスリ）は、韓国の3人組バーチャルアイドルグループ。Liar Entertainment所属。グループ名は「ViVid Venom」の略称であり“鮮やかな音楽の毒で世界を魅了する”という意味を持つ。Vが横向き（&lt;）になっているのは英語のスラングである「横向きハートマーク」を表している。",
        members: [
            { name: "JIA (지아)", birthday: "2001.10.09", pos: "Leader / Main Vocal / Sub Dancer / Sub Rapper", img: "images/v3/v3-jia.jpg" },
            { name: "LICCA (릿카)", birthday: "2000.07.14", pos: "Center / Main Vocal / Main Rapper / Lead Dancer", img: "images/v3/v3-licca.jpg" },
            { name: "NAYEON (나연)", birthday: "2006.06.20", pos: "Main Dancer / Sub Vocal", img: "images/v3/v3-nayeon.jpg" }
        ],
        discography: [
            { title: "COOL", type: "2nd Mini Album / 2022.10.31", img: "images/v3/v3-cool.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZeknS5ZhOGKkPxGKq5MjJAI6JVPLpTXBeRV&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
            { title: "VENOM", type: "1st Mini Album / 2022.04.10", img: "images/v3/v3-venom.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0Z8knS5ZA3xYWPiILQ0M3rQzVDNrM5a4Onw7&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` },
            { title: "ALL OUT", type: "Pre-Debut Cover EP / 2022.04.01", img: "images/v3/v3-allout.jpg", embed: `<iframe src="https://u.pcloud.link/publink/show?code=0ZzzoU5ZgjQk2aTBTHF0ig70v7BxL0Y0ddGX&view=list" width="100%" height="500" frameborder="0" scrolling="no"></iframe>` }
        ]
    },
    "god7ike": {
        name: "GØD7IKE",
        banner: "images/god7ike/god7ike-main.jpg",
        about: "GODLIKE（ゴッドライク）は、韓国の7人組バーチャルアイドルグループ。Liar Entertainment所属。グループ名には“神のような人間離れしたパフォーマンスで世界を魅了する”という意味が込められている。",
        members: [
            { name: "JIA (지아)", birthday: "2001.10.09", pos: "Leader / Main Vocal", img: "images/god7ike/god7ike-jia.jpg" },
            { name: "MIMI (미미)", birthday: "2009.11.03", pos: "Maknae / Lead Dancer / Sub Vocal", img: "images/god7ike/god7ike-mimi.jpg" },
            { name: "NAYEON (나연)", birthday: "2006.06.20", pos: "Main Dancer / Sub Vocal", img: "images/god7ike/god7ike-nayeon.jpg" },
            { name: "LAY (레이)", birthday: "2007.01.06", pos: "Main Rapper", img: "images/god7ike/god7ike-lay.jpg" },
            { name: "HAYUL (ハユル)", birthday: "2003.02.07", pos: "Visual / Main Vocal", img: "images/god7ike/god7ike-hayul.jpg" },
            { name: "LICCA (릿카)", birthday: "2000.07.14", pos: "Center / Lead Vocal / Lead Rapper / Lead Dancer", img: "images/god7ike/god7ike-licca.jpg" },
            { name: "ROY (ロイ)", birthday: "2007.01.06", pos: "Main Rapper", img: "images/god7ike/god7ike-roy.jpg" }
        ],
        discography: [
            { title: "CHOSEN KARMA", type: "4th Mini Album", img: "images/god7ike/god7ike-chosen-karma.jpg", embed: `<p>Coming Soon</p>` },
            { title: "Wings", type: "1st Full Album", img: "images/god7ike/god7ike-wings.jpg", embed: `<p>Coming Soon</p>` },
            { title: "REBORN", type: "3rd Mini Album", img: "images/god7ike/god7ike-reborn.jpg", embed: `<p>Coming Soon</p>` }
        ]
    }
};

// 共通機能
function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-menu');
    if (btn) btn.classList.toggle('active');
    if (nav) nav.classList.toggle('open');
    document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : 'auto';
}

function switchTab(tabName) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

function openModal(title, content) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('master-modal').classList.add('active');
}

function closeModal(e, force = false) {
    if (force || e.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}