//clicks
for(let i=1;i<=7;i++)
{
$(".n"+[i]).click(function()
{
var audio=new Audio();
audio.src="note"+i+".wav";
audio.play();
});
}

//keypress
$(document).on('keydown',function(e)
{
  if(e.key >0 && e.key<8)
  {
    var audio1=new Audio();
    audio1.src="note"+e.key+".wav";
    audio1.play();
  }
});

//TIME : 1 hour
