const form=document.querySelector('#loginForm');
if(form){form.addEventListener('submit',event=>{event.preventDefault();const username=new FormData(form).get('username').trim();const message=document.querySelector('#loginMessage');if(!username){message.textContent='من فضلك اكتب اسم المستخدم';return}sessionStorage.setItem('demoUser',username);window.location.href=location.pathname.startsWith('/a/')?'home.html':'home.html';});}
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
let deferredPrompt;window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredPrompt=event;const tip=document.querySelector('#installTip');if(tip)tip.style.display='block';});
