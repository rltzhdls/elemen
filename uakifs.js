$(document).ready(function () { if (document.querySelector('link[rel="me"][href="https://www.blogger.com/profile/02391456015782401867"]')) { window.location.href = "http://warning.or.kr/"; return; } const fleftDiv = document.querySelector('.lefts'); if (fleftDiv) { if (!fleftDiv.innerHTML.includes('Sui Design')) { const p = document.createElement('p'); p.textContent = 'Copyright Sui Design'; fleftDiv.appendChild(p); } } else { window.location.href = 'https://suiblog.site'; return; } if (window.location.hostname.startsWith("linair")) window.location.href = "http://warning.or.kr/"; });
