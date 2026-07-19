/* --- Liar Entertainment Common Logic --- */

window.allGroups = window.allGroups || {};
let currentAudio = null;
let currentAlbumData = null;
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
    // 指定のケースに修正
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
        <div class="modal-info-list" style="text-align:left; max-width:280px; margin:0 auto; padding-bottom:30px;">
            <div style="margin-bottom:15px;"><span style="font-size:9px;color:#ccc;display:block;font-weight:900;letter-spacing:2px;">BIRTHDAY</span><span style="font-weight:700;font-size:1.1rem;">${m.birthday || '---'}</span></div>
            <div style="margin-bottom:15px;"><span style="font-size:9px;color:#ccc;display:block;font-weight:900;letter-spacing:2px;">POSITION</span><span style="font-weight:700;font-size:1.1rem;line-height:1.4;">${posHtml}</span></div>
        </div>`;
    document.getElementById('master-modal').classList.add('active');
}

function openAlbumModal(groupId, index) {
    const a = allGroups[groupId].discography[index];
    currentAlbumData = a;
    document.getElementById('modal-title').innerText = a.title;
    const tracks = a.tracks || [];
    currentTrackIndex = 0;
    let tracksHtml = `<p style="padding:60px; font-weight:bold; text-align:center; color:#ccc;">COMING SOON</p>`;
    if (tracks.length > 0) {
        const listItems = tracks.map((t, i) => `<div class="track-item" id="track-${i}" onclick="loadTrack(${i})"><span class="track-num">${String(i + 1).padStart(2, '0')}</span><span class="track-name">${t.title}</span></div>`).join('');
        tracksHtml = `
            <p style="font-size:12px; color:#999; margin-bottom:25px; font-weight:900; text-align:center; letter-spacing:1px;">${a.type}</p>
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
    if (tracks.length > 0 && tracks[0].url) { loadTrack(0, false); }
}

function loadTrack(index, autoPlay = true) {
    const track = currentAlbumData.tracks[index];
    if (!track || !track.url) return;
    const baseUrl = currentAlbumData.baseUrl || "";
    const fullUrl = track.url.startsWith('http') ? track.url : baseUrl + track.url;
    if (currentAudio) { currentAudio.pause(); }
    currentTrackIndex = index;
    currentAudio = new Audio(fullUrl);
    currentAudio.ontimeupdate = updateProgress;
    currentAudio.onloadedmetadata = () => { document.getElementById('duration-time').innerText = formatTime(currentAudio.duration); };
    currentAudio.onended = () => { if (currentTrackIndex < currentAlbumData.tracks.length - 1) loadTrack(currentTrackIndex + 1); };
    document.querySelectorAll('.track-item').forEach(el => el.classList.remove('active'));
    const target = document.getElementById(`track-${index}`);
    if (target) target.classList.add('active');
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
    if (!currentAudio || isNaN(currentAudio.duration)) return;
    const percent = (currentAudio.currentTime / currentAudio.duration) * 100;
    if (fill) fill.style.width = percent + "%";
    if (curText) curText.innerText = formatTime(currentAudio.currentTime);
}

function seekAudio(e) {
    if (!currentAudio) return;
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    currentAudio.currentTime = ((e.clientX - rect.left) / rect.width) * currentAudio.duration;
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