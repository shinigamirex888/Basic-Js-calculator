var show=document.getElementsByClassName("output")[0];
document.getElementById("nine").addEventListener('click',function(){
    show.innerText+=9;
});
document.getElementById("eight").addEventListener('click',function(){
    show.innerText+=8;
});
document.getElementById("seven").addEventListener('click',function(){
    show.innerText+=7;
});
document.getElementById("six").addEventListener('click',function(){
    show.innerText+=6;
});
document.getElementById("five").addEventListener('click',function(){
    show.innerText+=5;
});
document.getElementById("four").addEventListener('click',function(){
    show.innerText+=4;
});
document.getElementById("three").addEventListener('click',function(){
    show.innerText+=3;
});
document.getElementById("two").addEventListener('click',function(){
    show.innerText+=2;
});
document.getElementById("one").addEventListener('click',function(){
    show.innerText+=1;
});
document.getElementById("zero").addEventListener('click',function(){
    show.innerText+="0";
});
document.getElementById("Ac").addEventListener('click',function(){
    show.innerText="";
});
document.getElementById("c").addEventListener('click',function(){
    show.innerText=show.innerText.substring(0, show.innerText.length - 1);
});
document.getElementById("add").addEventListener('click',function(){
    show.innerText+="+";
});
document.getElementById("subtract").addEventListener('click',function(){
    show.innerText+="-"
});
document.getElementById("multiply").addEventListener('click',function(){
    show.innerText+="*"
});
document.getElementById("divide").addEventListener('click',function(){
    show.innerText+="/"
});
document.getElementById("decimal").addEventListener('click',function(){
    show.innerText+=".";
});
document.getElementById("per").addEventListener('click',function(){
    show.innerText+="%";
});

document.getElementById("equal").addEventListener('click',function(){
    show.innerText=eval(show.innerText);
});



