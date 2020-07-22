//clicks
for(let i=1 ; i<=7 ; i++)
{
  document.querySelector(".n"+[i]).addEventListener("click",init);
  function init()
  {
     var audio=new Audio();
     audio.src="note"+i+".wav";
     audio.play();
  }
}

//keypress
document.addEventListener('keydown',(event)=>
{
  if(event.key > 0 && event.key<8)
  {
  var audio1=new Audio();
  audio1.src="note"+event.key+".wav";
  audio1.play();
}
});

//TIME : 1 hour
