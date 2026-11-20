const surpriseNotes = [
  {title:"I still can't believe it started with a follow", message:"My lovee, sometimes I think about how close I came to simply scrolling past your profile. I'm so glad I didn't. I had no idea that following a beautiful girl on TikTok would lead me to someone who would become such an important part of my life. It's funny how the smallest decisions can lead to the biggest feelings. If I could go back to that first moment, I'd still press follow. I'd choose that beginning again, because it brought me to you."},
  {title:"You make ordinary moments feel special", message:"I love that it doesn't always take a big date or a special occasion for you to make me smile. Sometimes it's just a message, a random video, a little update about your day, or hearing your voice. Those simple moments have become some of my favourite parts of being with you. I hope you never think the little things go unnoticed. I notice them, I appreciate them, and I keep them close."},
  {title:"Your 3 AM messages", message:"I still smile when I remember how you could wake up at 3 AM and text me like it was the most normal thing in the world. 😂 It made me feel included in your little world, even at the most unexpected hours. I loved knowing that I could be one of the first people you reached out to when you woke up. Those tiny habits might seem ordinary to you, but they mean a lot to me."},
  {title:"The girl in those outfit videos", message:"Those little outfit videos you send me are honestly one of the sweetest things. I love that you share those parts of your day with me. It makes me feel like I'm right there getting a tiny glimpse of your morning and seeing what you're up to. And yes, I enjoy seeing you look beautiful, but what I love even more is that you think of me enough to share those moments. Keep being your lovely self, princess."},
  {title:"Our Chicken Inn memory", message:"I don't think I'll forget that Chicken Inn date anytime soon. You bought me lunch, and I remember wanting to do something thoughtful for you too, so I started shredding your chicken into strips because I knew you weren't a fan of spicy food. It was such a small thing, but I liked being able to pay attention to what you enjoy and what you don't. I hope we keep having dates where the simplest details become memories we laugh about later."},
  {title:"The first time I saw you", message:"Meeting you in person for the first time is still one of my favourite memories. Before that, I had your pictures and our conversations, but that day I finally got to see you right in front of me. I remember how happy I was. I remember feeling hopeful, too, because suddenly the possibility of us felt a little more real. If I could replay that day, I would take my time and enjoy every minute of it all over again."},
  {title:"September 22", message:"September 22 will always mean something special to me. I know you weren't feeling okay that day, and I don't want to pretend everything was perfect. But I remember how the day ended, and I will always be grateful for that first kiss. It marked the beginning of us, and it turned an ordinary date on the calendar into a day I never want to forget. Thank you for sharing that moment with me, my lovee."},
  {title:"You don't have to be perfect", message:"I want you to feel comfortable being yourself with me. You don't have to have the perfect words, the perfect mood, or the perfect day. You can tell me when you're happy, when you're tired, when something is bothering you, or when you simply need a quiet moment. I am still learning you, and I hope we keep giving each other room to grow. I don't want a pretend-perfect relationship. I want something honest, gentle, and real with you."},
  {title:"I notice the little things", message:"I notice the effort you make, the times you check on me, the things you share, and the ways you let me into your day. I might not always find the perfect words to say it, but I appreciate you. I appreciate the time you give me and the trust you continue to build with me. Please don't feel that you have to do something huge to be appreciated. Even the smallest things matter to me because they come from you."},
  {title:"On the days we miss each other", message:"I know distance can make some days feel longer. There are moments when I wish I could be beside you instead of sending a message or making a call. But even when we are not in the same place, I still want us to feel close through the way we communicate, listen, and make time for each other. When you miss me, remember that I miss you too. And please remember that you are never less loved just because we're far apart."},
  {title:"I'm proud of you", message:"I hope you give yourself credit for how much you handle and for all the little ways you keep moving forward. I may not know every thought in your head or every challenge you face, but I want you to know that I'm cheering for you. I want to celebrate your wins, encourage you when things are difficult, and remind you to be kind to yourself. You deserve support, patience, and happiness, my princess."},
  {title:"My favourite part is that we're still writing this", message:"We've had our beginning, our first meetings, our first kiss, and now these first two months. But I don't want this website to feel like a goodbye or like our story is already complete. It's just a little pause to look back and appreciate how far we've come. There are still conversations we haven't had, places we haven't visited together, jokes we haven't made, and memories we haven't created. I hope we get to write many more chapters, side by side. I love you, my lovee. ❤️"}
];

function makePetals(){
  const holder=document.querySelector(".petals");
  if(!holder)return;
  for(let i=0;i<18;i++){
    const petal=document.createElement("span");
    petal.className="petal";
    petal.textContent=i%2?"✿":"♥";
    petal.style.left=(Math.random()*100)+"%";
    petal.style.animationDuration=(12+Math.random()*15)+"s";
    petal.style.animationDelay=(-Math.random()*20)+"s";
    petal.style.fontSize=(10+Math.random()*12)+"px";
    holder.appendChild(petal);
  }
}

function setupMusic(){
  const audio=document.getElementById("siteMusic");
  const toggle=document.getElementById("musicToggle");
  if(!audio)return;
  const savedTime=sessionStorage.getItem("ourSongTime");
  const wanted=sessionStorage.getItem("ourSongPlaying")==="yes";
  if(savedTime){
    audio.addEventListener("loadedmetadata",()=>{audio.currentTime=Number(savedTime)||0;},{once:true});
  }
  const label=()=>{if(toggle)toggle.textContent=audio.paused?"♫ Play our song":"♫ Pause our song";};
  audio.addEventListener("timeupdate",()=>sessionStorage.setItem("ourSongTime",String(audio.currentTime)));
  audio.addEventListener("play",label);audio.addEventListener("pause",label);
  if(toggle){
    toggle.addEventListener("click",async()=>{
      if(audio.paused){
        try{await audio.play();sessionStorage.setItem("ourSongPlaying","yes");}
        catch(e){toggle.textContent="Tap to play our song ♫";}
      }else{audio.pause();sessionStorage.setItem("ourSongPlaying","no");}
      label();
    });
  }
  if(wanted){
    audio.play().then(label).catch(()=>{if(toggle)toggle.textContent="♫ Tap to play our song";});
  }
  const open=document.getElementById("openSurprise");
  if(open){
    open.addEventListener("click",async()=>{
      try{await audio.play();sessionStorage.setItem("ourSongPlaying","yes");}
      catch(e){sessionStorage.setItem("ourSongPlaying","no");}
      window.location.href="chapters.html";
    });
  }
}

function setupSurprises(){
  const grid=document.getElementById("surpriseGrid");
  const modal=document.getElementById("noteModal");
  if(!grid||!modal)return;
  const title=document.getElementById("noteTitle");
  const message=document.getElementById("noteMessage");
  const number=document.getElementById("noteNumber");
  const next=document.getElementById("nextNote");
  let current=0;
  surpriseNotes.forEach((note,index)=>{
    const card=document.createElement("button");
    card.className="surprise-card";
    card.type="button";
    card.innerHTML=`<span class="envelope">✉</span><strong>Little note ${index+1}</strong><small>Open me ♡</small>`;
    card.addEventListener("click",()=>openNote(index));
    grid.appendChild(card);
  });
  function openNote(index){
    current=index;
    number.textContent=`A little surprise · ${index+1} of 12`;
    title.textContent=surpriseNotes[index].title;
    message.textContent=surpriseNotes[index].message;
    next.textContent=index===11?"Read the first note again ♡":"Open another note ♡";
    modal.classList.add("open");modal.setAttribute("aria-hidden","false");
  }
  function close(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");}
  document.getElementById("closeModal").addEventListener("click",close);
  modal.addEventListener("click",e=>{if(e.target===modal)close();});
  next.addEventListener("click",()=>openNote((current+1)%surpriseNotes.length));
  document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
}

document.addEventListener("DOMContentLoaded",()=>{makePetals();setupMusic();setupSurprises();});
