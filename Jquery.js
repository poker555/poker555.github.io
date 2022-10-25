var trun1 = false
var trun2 = false
var trun3 = false
$(document).ready
(
  function()
  {
    $("p").click(function(){
      $(this).hide();
    });
  }
)
function Change1() {
  if(trun1==false)
  {
    document.getElementById("imgButton1").style.backgroundImage = "url(poker0-1.jpg)";
    trun1=true;
  }
  else if(trun1==true)
  {
    document.getElementById("imgButton1").style.backgroundImage = "url(塔羅牌-3.png)";
    trun1=false;
  }
  
}
function Change2()
{
  if(trun2==false)
  {
    document.getElementById("imgButton2").style.backgroundImage = "url(poker1.jpg)";
    trun2=true;
  }
  else if(trun2==true)
  {
    document.getElementById("imgButton2").style.backgroundImage = "url(塔羅牌-3.png)";
    trun2=false;
  }
}
function Change3()
{
  if(trun3==false)
  {
    document.getElementById("imgButton3").style.backgroundImage = "url(poker2.jpg)";
    trun3=true;
  }
  else if(trun3==true)
  {
    document.getElementById("imgButton3").style.backgroundImage = "url(塔羅牌-3.png)";
    trun3=false;
  }

}


