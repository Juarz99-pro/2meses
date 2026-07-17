const audio=document.getElementById('audio'),cover=document.querySelector('.cover img'),progress=document.getElementById('progress');
audio.onplay=()=>cover.style.animationPlayState='running';
audio.onpause=()=>cover.style.animationPlayState='paused';
audio.ontimeupdate=()=>{if(audio.duration)progress.value=audio.currentTime/audio.duration*100}
progress.oninput=()=>{if(audio.duration)audio.currentTime=progress.value/100*audio.duration}

const pics=[...Array(13)].map((_,i)=>`img/${String(i+1).padStart(2,'0')}.jpg`);
let idx=0,L=left,C=center,R=right;
function draw(){L.src=pics[(idx-1+pics.length)%pics.length];C.src=pics[idx];R.src=pics[(idx+1)%pics.length]}
function move(d){idx=(idx+d+pics.length)%pics.length;draw()}draw();setInterval(()=>move(1),4000);

const text=`Mi amor ❤️

Hoy celebramos nuestro segundo mes como esposos, y aunque parezca poco tiempo, para mí han sido algunos de los días más felices de mi vida. 🥹💖

Gracias por cada abrazo, cada sonrisa, cada palabra de aliento y por hacer de nuestra casa un verdadero hogar. Contigo aprendí que el amor no solo se dice, también se demuestra en los pequeños detalles de cada día. 🌹✨

Prometo seguir cuidándote, apoyándote y hacer todo lo posible para verte sonreír. Quiero seguir escribiendo nuestra historia, viajar contigo, cumplir sueños, formar una hermosa familia y envejecer tomados de la mano. 👩‍❤️‍👨💍

Si pudiera volver a elegir... volvería a elegirte una y mil veces. Eres el amor de mi vida, mi mejor amiga, mi paz y mi lugar favorito. ❤️♾️

Feliz segundo mes de casados. Te amo infinitamente. 💕`;
let i=0;function type(){if(i<text.length){letter.textContent+=text[i++];setTimeout(type,20)}}type();

const start=new Date('2026-05-17T00:00:00');
function upd(){let s=Math.floor((Date.now()-start)/1000),d=Math.floor(s/86400),h=Math.floor(s/3600),m=Math.floor(s/60);
counter.innerHTML=`❤️ 2 Meses ❤️<br>${d} días<br>${h} horas<br>${m} minutos<br>${s} segundos`;}
upd();setInterval(upd,1000);
