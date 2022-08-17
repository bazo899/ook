function cal()
{

 var a=n1.value;
 var b=n2.value;
 var c=n3.value;
 var d=n4.value;
 var e=n5.value;
 var f=n6.value;

let sum=0,count=0;


// boksa a 

if(a=="A+" || a=="a+" || a=="+A" || a=="+a" )
{ sum+=95;count++; }
if(a=="A" || a=="a" )                  
{ sum+=90;count++; }
if(a=="A-" || a=="a-" || a=="-A" || a=="-a")
{ sum+=85;count++; }
if(a=="B+"|| a=="b+" || a=="+B"|| a=="+b")
{ sum+=80;count++; }
if(a=="B"|| a=="b")
{ sum+=75;count++; }
if(a=="B-" || a=="b-" || a=="-B"|| a=="-b")
{ sum+=70;count++; }
if(a=="C+"  || a=="c+" || a=="+C"  || a=="+c")
{ sum+=65;count++; }
if(a=="C"  || a=="c")
{ sum+=60;count++; }
if(a=="C-"  || a=="c-"  ||  a=="-C"  || a=="-c")
{ sum+=55;count++; }
if(a=="D"  || a=="d")
{ sum+=50;count++; }

//boksa b

if(b=="A+" || b=="a+" || b=="+A" || b=="+a" )
{ sum+=95;count++; }
if(b=="A" || b=="a" )
{ sum+=90;count++; }
if(b=="A-" || b=="a-" || b=="-A" || b=="-a")
{ sum+=85;count++; }
if(b=="B+"|| b=="b+" || b=="+B"|| b=="+b")
{ sum+=80;count++; }
if(b=="B"|| b=="b")
{ sum+=75;count++; }
if(b=="B-" || b=="b-" || b=="-B"|| b=="-b")
{ sum+=70;count++; }
if(b=="C+"  || b=="c+" || b=="+C"  || b=="+c")
{ sum+=65;count++; }
if(b=="C"  || b=="c")
{ sum+=60;count++; }
if(b=="C-"  || b=="c-"  ||  b=="-C"  || b=="-c")
{ sum+=55;count++; }
if(b=="D"  || b=="d")
{ sum+=50;count++; }

//boksa c

if(c=="A+" || c=="a+" || c=="+A" || c=="+a" )
{ sum+=95;count++; }
if(c=="A" || c=="a" )
{ sum+=90;count++; }
if(c=="A-" || c=="a-" || c=="-A" || c=="-a")
{ sum+=85;count++; }
if(c=="B+"|| c=="b+" || c=="+B"|| c=="+b")
{ sum+=80;count++; }
if(c=="B"|| c=="b")
{ sum+=75;count++; }
if(c=="B-" || c=="b-" || c=="-B"|| c=="-b")
{ sum+=70;count++; }
if(c=="C+"  || c=="c+" || c=="+C"  || c=="+c")
{ sum+=65;count++; }
if(c=="C"  || c=="c")
{ sum+=60;count++; }
if(c=="C-"  || c=="c-"  ||  c=="-C"  || c=="-c")
{ sum+=55;count++; }
if(c=="D"  || c=="d")
{ sum+=50;count++; }

//boksa d 

if(d=="A+" || d=="a+" || d=="+A" || d=="+a" )
{ sum+=95;count++; }
if(d=="A" || d=="a" )
{ sum+=90;count++; }
if(d=="A-" || d=="a-" || d=="-A" || d=="-a")
{ sum+=85;count++; }
if(d=="B+"|| d=="b+" || d=="+B"|| d=="+b")
{ sum+=80;count++; }
if(d=="B"|| d=="b")
{ sum+=75;count++; }
if(d=="B-" || d=="b-" || d=="-B"|| d=="-b")
{ sum+=70;count++; }
if(d=="C+"  || d=="c+" || d=="+C"  || d=="+c")
{ sum+=65;count++; }
if(d=="C"  || d=="c")
{ sum+=60;count++; }
if(d=="C-"  || d=="c-"  ||  d=="-C"  || d=="-c")
{ sum+=55;count++; }
if(d=="D"  || d=="d")
{ sum+=50;count++; }

// boksa e-resize

if(e=="A+" || e=="a+" || e=="+A" || e=="+a" )
{ sum+=95;count++; }
if(e=="A" || e=="a" )
{ sum+=90;count++; }
if(e=="A-" || e=="a-" || e=="-A" || e=="-a")
{ sum+=85;count++; }
if(e=="B+"|| e=="b+" || e=="+B"|| e=="+b")
{ sum+=80;count++; }
if(e=="B"|| e=="b")
{ sum+=75;count++; }
if(e=="B-" || e=="b-" || e=="-B"|| e=="-b")
{ sum+=70;count++; }
if(e=="C+"  || e=="c+" || e=="+C"  || e=="+c")
{ sum+=65;count++; }
if(e=="C"  || e=="c")
{ sum+=60;count++; }
if(e=="C-"  || e=="c-"  ||  e=="-C"  || e=="-c")
{ sum+=55;count++; }
if(e=="D"  || e=="d")
{ sum+=50;count++; }


// boksa f


if(f=="A+" || f=="a+" || f=="+A" || f=="+a" )
{ sum+=95;count++; }
if(f=="A" || f=="a" )
{ sum+=90;count++; }
if(f=="A-" || f=="a-" || f=="-A" || f=="-a")
{ sum+=85;count++; }
if(f=="B+"|| f=="b+" || f=="+B"|| f=="+b")
{ sum+=80;count++; }
if(f=="B"|| f=="b")
{ sum+=75;count++; }
if(f=="B-" || f=="b-" || f=="-B"|| f=="-b")
{ sum+=70;count++; }
if(f=="C+"  || f=="c+" || f=="+C"  || f=="+c")
{ sum+=65;count++; }
if(f=="C"  || f=="c")
{ sum+=60;count++; }
if(f=="C-"  || f=="c-"  ||  f=="-C"  || f=="-c")
{ sum+=55;count++; }
if(f=="D"  || f=="d")
{ sum+=50;count++; }




let avg1=sum/count;
 //let y=0;

/*<!--if(  a=="f" || a=="F" b=="f" || b=="F"  c=="f" || c=="F" d=="f" || d=="F" e=="f" || e=="F" f=="f" || f=="F" ) -->  */


document.getElementById('result').innerHTML="sum="+sum+"&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;avaerage= "+avg1;//error
//document.write("sum=", sum , " average=",avg1);

}