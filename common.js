/* --- Liar Entertainment Common Logic --- */

window.allGroups = window.allGroups || {};
let currentAudio = null;
let currentPlaylist = [];
let currentTrackIndex = 0;

function initApp() {
    injectModal();
    injectFooter();
    generateNav();
}

function generateNav() {
    const navUl = document.querySelector('#nav-menu ul');
    if (!navUl) return;
    navUl.innerHTML = Object.keys(allGroups).map(id => 
        `<li><a href="artist.html?id=${id}">${allGroups[id].name}</a></li>`
    ).join('');
}

function injectFooter() {
    const footers = document.querySelectorAll('footer');
    const footerHtml = `<div class="f-logo">Liar Entertainment</div><p class="f-copy">&copy; Liar Entertainment ALL RIGHTS RESERVED.</p>`;
    footers.forEach(f => f.innerHTML = footerHtml);
}

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

function toggleMenu() {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('nav-menu');
    btn?.classList.toggle('active');
    nav?.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : 'auto';
}

function closeModal(e, force = false) {
    if (force || e?.target.id === 'master-modal') {
        if (currentAudio) { currentAudio.pause(); currentAudio = null; }
        document.getElementById('master-modal').classList.remove('active');
        document.getElementById('modal-body').innerHTML = '';
    }
}

function openMemberModal(groupId, index) {
    const m = allGroups[groupId].members[index];
    const posHtml = m.position.split(' / ').join('<br>');
    document.getElementById('modal-title').innerText = m.name;
    document.getElementById('modal-body').innerHTML = `
        <img src="${m.img}" class="modal-img">
        <div class="modal-info-list" style="text-align:left; max-width:280px; margin:0 auto;">
            <div style="margin-bottom:12px;"><span style="font-size:9px;color:#ccc;display:block;font-weight:900;">BIRTHDAY</span><span style="font-weight:700;">${m.birthday || '---'}</span></div>
            <div style="margin-bottom:12px;"><span style="font-size:9px;color:#ccc;display:block;font-weight:900;">POSITION</span><span style="font-weight:700;">${posHtml}</span></div>
        </div>`;
    document.getElementById('master-modal').classList.add('active');
}

// プレイリスト対応アルバムモーダル
function openAlbumModal(groupId, index) {
    const a = allGroups[groupId].discography[index];
    document.getElementById('modal-title').innerText = a.title;
    
    currentPlaylist = a.tracks || [];
    currentTrackIndex = 0;

    let tracksHtml = `<p style="padding:40px; font-weight:bold;">COMING SOON</p>`;
    
    if (currentPlaylist.length > 0) {
        const listItems = currentPlaylist.map((t, i) => `
            <div class="track-item" id="track-${i}" onclick="loadTrack(${i})">
                <span class="track-num">${String(i + 1).padStart(2, '0')}</span>
                <span class="track-name">${t.title}</span>
            </div>`).join('');

        tracksHtml = `
            <p style="font-size:12px; color:#ccc; margin-bottom:20px; font-weight:900;">${a.type}</p>
            <div class="custom-player">
                <div class="player-controls">
                    <button class="play-pause-btn" id="play-btn" onclick="togglePlay()">▶</button>
                </div>
                <div class="seek-bar-container" onclick="seekAudio(event)">
                    <div class="seek-bar-fill" id="seek-fill"></div>
                </div>
                <div class="player-time"><span id="current-time">0:00</span><span id="duration-time">0:00</span></div>
            </div>
            <div class="playlist-container">${listItems}</div>`;
    }
    
    document.getElementById('modal-body').innerHTML = tracksHtml;
    document.getElementById('master-modal').classList.add('active');

    // 1曲目がある場合は自動ロード（再生はしない）
    if (currentPlaylist.length > 0 && currentPlaylist[0].url) {
        loadTrack(0, false);
    }
}

function loadTrack(index, autoPlay = true) {
    const track = currentPlaylist[index];
    if (!track || !track.url) return;

    if (currentAudio) { currentAudio.pause(); }
    
    currentTrackIndex = index;
    currentAudio = new Audio(track.url);
    currentAudio.ontimeupdate = updateProgress;
    currentAudio.onloadedmetadata = () => {
        document.getElementById('duration-time').innerText = formatTime(currentAudio.duration);
    };
    currentAudio.onended = () => { if (currentTrackIndex < currentPlaylist.length - 1) loadTrack(currentTrackIndex + 1); };

    // UI更新
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
    document.getElementById(`track-${index}`).classList.add('active');

    if (autoPlay) togglePlay();
}

function togglePlay() {
    const btn = document.getElementById('play-btn');
    if (!currentAudio) return;
    if (currentAudio.paused) {
        currentAudio.play();
        btn.innerText = "II";
    } else {
        currentAudio.pause();
        btn.innerText = "▶";
    }
}

function updateProgress() {
    const fill = document.getElementById('seek-fill');
    const curText = document.getElementById('current-time');
    if (!currentAudio) return;
    const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
    fill.style.width = percent + "%";
    curText.innerText = formatTime(currentAudio.currentTime);
}

function seekAudio(e) {
    if (!currentAudio) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    currentAudio.currentTime = (x / rect.width) * currentAudio.duration;
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
}

function switchTab(tabName) {
    document.querySelectorAll('.content-section, .tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}

window.addEventListener('DOMContentLoaded', initApp);