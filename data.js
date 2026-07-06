/* --- data.js --- */

// ニュースデータ（仮）
const newsData = [
    { date: "2024.03.20", title: "LCR Debut Single 'CHOSEN KARMA' Out Now", group: "lcr" },
    { date: "2024.03.15", title: "GØD7IKE World Tour 2024 Announcement", group: "god7ike" },
    { date: "2024.03.10", title: "HAYUL Official Profile Open", group: "hayul" },
    { date: "2024.03.01", title: "V3 Japan Fanmeeting 'VENOM' Ticket Info", group: "v3" },
    { date: "2024.02.20", title: "Liar Entertainment Audition 2024", group: "office" }
];

const allGroups = {
    "god7ike": {
        name: "GØD7IKE",
        banner: "images/god7ike/god7ike-main.jpg",
        about: "GODLIKE（ゴッドライク）は、韓国の7人組バーチャルアイドルグループ。Liar Entertainment所属。",
        members: [
            { name: "MEMBER A", img: "images/god7ike/m1.jpg", age: "20", position: "Vocal" },
            // ... 他のメンバー
        ],
        discography: [
            { title: "REBORN", img: "images/god7ike/album1.jpg", code: "pCloudのコード1" },
        ]
    },
    "lcr": {
        name: "LCR",
        banner: "images/lcr/lcr-main.jpg",
        about: "LCRは、独特な世界観を持つ3人組ボーイズグループ。",
        members: [
            { name: "MEMBER X", img: "images/lcr/m1.jpg", age: "22", position: "Rap" },
        ],
        discography: [
            { title: "CHOSEN KARMA", img: "images/lcr/album1.jpg", code: "pCloudのコード2" },
        ]
    },
    "hayul": {
        name: "HAYUL",
        banner: "images/hayul/hayul-main.jpg",
        about: "圧倒的な歌唱力を誇るソロアーティスト。",
        hasMemberSection: false, // ソロの場合はMEMBERセクションを隠す設定
        members: [],
        discography: [
            { title: "TEA", img: "images/hayul/album1.jpg", code: "pCloudのコード3" },
        ]
    },
    "v3": {
        name: "<3",
        banner: "images/v3/v3-main.jpg",
        about: "Vivid Venom。3人組ガールズグループ。",
        members: [
            { name: "MEMBER 1", img: "images/v3/m1.jpg", age: "19", position: "Dance" },
        ],
        discography: [
            { title: "COOL", img: "images/v3/album1.jpg", code: "pCloudのコード4" },
        ]
    }
};

/* 共通関数：メニュー開閉 */
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    const btn = document.getElementById('menu-btn');
    nav.classList.toggle('open');
    btn.classList.toggle('active');
}

/* 共通関数：タブ切り替え */
function switchTab(tabId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    document.getElementById('btn-' + tabId).classList.add('active');
}