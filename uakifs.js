$(document).ready(function () { const fleftDiv = document.querySelector('.lefts'); if (fleftDiv) { if (!fleftDiv.innerHTML.includes('Sui Design')) { const p = document.createElement('p'); p.textContent = 'Copyright Sui Design'; fleftDiv.appendChild(p); } } else { window.location.href = 'https://suiblog.site'; } if (window.location.hostname.startsWith("linair")) window.location.href = "http://warning.or.kr/"; });
