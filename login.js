let content1=document.getElementById("login1");
let content2=document.getElementById("login2");
let input1=document.getElementById("inputs1");
let input2=document.getElementById("inputs2");
let btn=document.getElementById("btn");
let txt=document.getElementById("log");
let txt2=document.getElementById("log2");
let bubble1=document.getElementById("bubble1");
let bubble2=document.getElementById("bubble2");


function change2(){
   content2.className="register2"
   content1.className="login"
   content1.style.backgroundColor="rgb(255, 255, 255,0.3)";
    content2.style.zIndex="2";
    content1.style.width="30rem";
    content1.style.height="40rem";
    content1.style.zIndex="1";
    
    content1.style.transition="1s";
    content2.style.transition="1s";
    btn.style.background="rgb(118 118 118)";
    input1.style.transition="2s"
    input2.style.transition="2s"
    txt.style.marginTop="110%";
    txt.style.marginRight="50%";
    txt.style.transition="1s";
    
    txt2.style.marginTop="0";
    txt2.style.marginLeft="0";
    bubble1.style.top="-10%";
    bubble1.style.left="93%";
    bubble2.style.top="35%";
    bubble2.style.left="-8%";
    bubble1.style.transition="3s"
    bubble2.style.transition="3s"
    bubble1.style.transform="scale(5)"
    bubble2.style.transform="scale(5)"
    bubble1.style.animation="floater 3s linear"
    bubble2.style.animation="floater 3s linear"
    
    
    
}
function change(){
   content2.className="register";
    content1.className="login2";
    content1.style.backgroundColor="rgb(255 255 255)";
    content2.style.zIndex="1";
    content1.style.width="35rem";
    content1.style.height="45rem";
    content1.style.zIndex="2";
    content1.style.transition="1s";
    content2.style.transition="1s";
    btn.style.background="linear-gradient(to right,#49c3fc 15%,rgb(87, 188, 255),rgb(210, 13, 254) ,rgb(238, 4, 250) )";
    input1.style.transition="1s"
    input2.style.transition="1s"
    txt.style.marginTop="";
    txt.style.marginRight="";
   
    txt2.style.marginTop="110%";
    txt2.style.marginLeft="50%";
    txt2.style.transition="1s";


    bubble1.style.top="";
    bubble1.style.left="";
    bubble2.style.top="";
    bubble2.style.left="";
    bubble1.style.transform="Scale(1)"
    bubble2.style.transform="Scale(1)"
    bubble1.style.animation="floater2 3s linear"
    bubble2.style.animation="floater2 3s linear"
    bubble1.style.transition="3s"
    bubble2.style.transition="3s"

   
}