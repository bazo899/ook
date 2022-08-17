const toggleBtn = document.getElementById("toggle-btn");
//2
const toggleBtn2= document.getElementById("toggle-btn2");
//2
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  //2
  toggleBtn2.classList.remove("dark-mode-toggle");
  //2
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled")
 {
  toggleBtn.src="sun.png";
  toggleBtn2.src="sun.png";
  enableDarkMode(); // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled")
   {
    toggleBtn.src="sun.png";
    toggleBtn2.src="sun.png";
    enableDarkMode();
  } else
   {
    toggleBtn.src="moon.png";
    toggleBtn2.src="moon.png";
    disableDarkMode();
  }
});
//2


toggleBtn2.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled")
   {
    toggleBtn.src="sun.png";
    toggleBtn2.src="sun.png";
    enableDarkMode();
  } else {
    toggleBtn.src="moon.png";
    toggleBtn2.src="moon.png";
    disableDarkMode();
  }
});


//2






    
function w3_open()
{
document.getElementById("sidebar").style.width="170px";

document.getElementById("sidebar").style.height="100%";

}
function w3_close()
{
document.getElementById("sidebar").style.width="0px";

}


//<!-- imga  -->
             

//<!-- ok check check ✔️✔️✔️✔️-->




//<!-- ✔️✔️✔️✔️✔️✔️ -->

function age()
{
  var d=document.getElementById('day').value;
var m=document.getElementById('month').value;
var y=document.getElementById('year').value;

var date=new Date();
var roj=7+date.getDay();
var hayv=1+date.getMonth();
var sal=date.getFullYear();

var M=[31,28,31,30,31,30,31,31,30,31,30,31];
var e=hayv-1;

if(d>roj)
{
roj=roj+M[hayv-1];
hayv=hayv-1;
}
if(m>hayv)
{
hayv=hayv+12;
sal=sal-1;
}

var dod =roj-d;
var mo =hayv-m;
var so =sal-y;
//<!-- to de hnda rojen di bia jnda sal -->
var rojen=M[e]-dod;
var hayven=12-mo;
var salen=so+1;

var hev=(so*12)+mo;
//<!-- 7afti -->





//<!-- rojen gshti dbna -->
var rojan=(365.25*so)+dod+(mo*30.4375);
rojan=Math.floor(rojan)

//<!-- 7afti -->
var weak=rojan/7;
weak=Math.floor(weak);

var hour=rojan*24;
var minute=hour*60;
var second=minute*60;




document.getElementById('res').innerHTML
=" ژیێ تە "+so+"<span class='sal'> سال</span>"+" و "+mo+"<span class='hayv'>  هەیڤ</span> و "+dod+"<span class='roj'>  روژی</span> <br>  "+
"توو دێ "+hayven+"<span class='hayv'>  هەیڤ و </span>"+rojen+" <span class='roj'>  رۆژێن دی بیە </span>"+salen +"<span class='sal'>  ساڵ</span>"+"<br>"
+"یان ژیێ تە "+hev+"<span class='hayv'>  هەیڤ و </span>"+dod+"<span class='roj'>  رۆژە</span>"+"<br>"
+"یان ژی ژیێ تە "+weak+" حەفتی و "+dod+"<span class='roj'>  رۆژن</span>"+"<br>"+"یان ژیێ تە "+rojan+"<span class='roj'>  رۆژن </span><br>"
+"یان ژیێ تە "+hour+" دەمژمێرن <br>"+
"یان ژیێ تە "+minute+" خولەکن <br>"+
"یان ژیێ تە "+second+" چرکەنە ";


}




//  av coden l xare taybat b average va 2 d gredayna  okkk good luck....









