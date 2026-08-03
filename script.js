const noBtn=document.getElementById("no");
const yesBtn=document.getElementById("yes");

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("click",moveButton);

function moveButton(){

const x=Math.random()*500-250;
const y=Math.random()*300-150;

noBtn.style.transform=`translate(${x}px,${y}px)`;

}

yesBtn.addEventListener("click",()=>{

page1.classList.add("hidden");
page2.classList.remove("hidden");

});