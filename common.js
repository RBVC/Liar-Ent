/* --- Liar Entertainment Common Logic --- */

window.allGroups = window.allGroups || {};

function initApp() {
    injectModal();      // モーダル生成
    injectFooter();     // フッター生成
    generateNav();      // ナビ生成
}

// ナビゲーション生成
function generateNav() {
    const navUl = document.querySelector('#nav-menu ul');
    if (!navUl) return;
    navUl.innerHTML = Object.keys(allGroups).map(id => 
        `<li><a href="artist.html?id=${id}">${allGroups[id].name}</a></li>`
    ).join('');
}

// フッター注入
function injectFooter() {
    const footers = document.querySelectorAll('footer');
    const footerHtml = `
        <a href="index.html" class="f-logo-link"><div class="f-logo">Liar Entertainment</div></a>
        <p class="f-copy">&copy; Liar Entertainment ALL RIGHTS RESERVED.</p>
    `;
    footers.forEach(f => f.innerHTML = footerHtml);
}

// モーダル注入
function injectModal() {
    if (document.getElementById('master-modal')) return;
    const modalHtml = `
        <div id="master-modal" class="modal" onclick="closeModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <span class="modal-close" onclick="closeModal(null, true)">×</span>
                <h3 id="modal-title" class="modal-main-title"></h3>
                <div id="modal-body"></div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
}

// メニュー開閉
function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-menu');
    btn?.classList.toggle('active');
    nav?.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : 'auto';
}

// モーダル制御
function updateModal(title, html) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = html;
    document.getElementById('master-modal').classList.add('active');
}

function closeModal(e, force = false) {
    if (force || e?.target.id === 'master-modal') {
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}

function openMemberModal(groupId, index) {
    const m = allGroups[groupId].members[index];
    const posHtml = m.position.split(' / ').join('<br>');
    updateModal(m.name, `
        <img src="${m.img}" class="modal-img">
        <div class="modal-info-list">
            <div class="modal-info-item"><span class="modal-label">BIRTHDAY</span><span class="modal-value">${m.birthday || '---'}</span></div>
            <div class="modal-info-item"><span class="modal-label">POSITION</span><span class="modal-value">${posHtml}</span></div>
        </div>
    `);
}

function openAlbumModal(groupId, index) {
    const a = allGroups[groupId].discography[index];
    const embed = a.embedUrl ? `<iframe src="${a.embedUrl}" frameborder="0" scrolling="no"></iframe>` : `<p style="padding:40px; font-weight:bold;">COMING SOON</p>`;
    updateModal(a.title, `
        <p style="font-size:12px; color:#ccc; margin-bottom:20px; font-weight:900;">${a.type}</p>
        <div class="player-container">${embed}</div>
    `);
}

function switchTab(tabName) {
    document.querySelectorAll('.content-section, .tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

window.addEventListener('DOMContentLoaded', initApp);