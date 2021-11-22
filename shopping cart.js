

var total=0;

function grandTotal() {
    var disp1 = parseInt(document.getElementById('r1').innerText)
   // console.log(typeof(disp1))
    var disp2 = parseInt(document.getElementById('r2').innerText);
   // console.log(disp2)
    var disp3 = parseInt(document.getElementById('r3').innerText);
    var disp4 = parseInt(document.getElementById('r4').innerText);
    total=Number(disp1)+Number(disp2)+Number(disp3)+Number(disp4);
    document.getElementById('gtotal').innerText =total;
}
function grandTotalMinus(price) {
   total=total-price;
   document.getElementById('gtotal').innerText =total;
}

function angryFun(){
    var angryh3=document.getElementById('ratingTxt');
    var angrybtn1=document.getElementById('angry');
    var angrybtn2=document.getElementById('sad');
    var angrybtn3=document.getElementById('neutral');
    var angrybtn4=document.getElementById('smile');
    var angrybtn5=document.getElementById('heart');
    angrybtn1.style.fontSize="90px";
    angrybtn2.style.display="none";
    angrybtn3.style.display="none";
    angrybtn4.style.display="none";
    angrybtn5.style.display="none";
    angryh3.textContent="Thank You for Your Rating";
}
function sadFun(){
    var sadh3=document.getElementById('ratingTxt');
    var sadbtn1=document.getElementById('angry');
    var sadbtn2=document.getElementById('sad');
    var sadbtn3=document.getElementById('neutral');
    var sadbtn4=document.getElementById('smile');
    var sadbtn5=document.getElementById('heart');
    sadbtn1.style.display="none";
    sadbtn2.style.fontSize="90px";
    sadbtn3.style.display="none";
    sadbtn4.style.display="none";
    sadbtn5.style.display="none";
    sadh3.textContent="Thank You for Your Rating";
}
function neutralFun(){
    var neuh3=document.getElementById('ratingTxt');
    var neubtn1=document.getElementById('angry');
    var neubtn2=document.getElementById('sad');
    var neubtn3=document.getElementById('neutral');
    var neubtn4=document.getElementById('smile');
    var neubtn5=document.getElementById('heart');
    neubtn1.style.display="none";
    neubtn2.style.display="none";
    neubtn3.style.fontSize="90px";
    neubtn4.style.display="none";
    neubtn5.style.display="none";
    neuh3.textContent="Thank You for Your Rating";
}
function smileFun(){
    var smileh3=document.getElementById('ratingTxt');
    var smilebtn1=document.getElementById('angry');
    var smilebtn2=document.getElementById('sad');
    var smilebtn3=document.getElementById('neutral');
    var smilebtn4=document.getElementById('smile');
    var smilebtn5=document.getElementById('heart');
    smilebtn1.style.display="none";
    smilebtn2.style.display="none";
    smilebtn3.style.display="none";
    smilebtn4.style.fontSize="90px";
    smilebtn5.style.display="none";
    smileh3.textContent="Thank You for Your Rating";
}
function heartFun(){
    var hearth3=document.getElementById('ratingTxt');
    var heartbtn1=document.getElementById('angry');
    var heartbtn2=document.getElementById('sad');
    var heartbtn3=document.getElementById('neutral');
    var heartbtn4=document.getElementById('smile');
    var heartbtn5=document.getElementById('heart');
    heartbtn1.style.display="none";
    heartbtn2.style.display="none";
    heartbtn3.style.display="none";
    heartbtn4.style.display="none";
    heartbtn5.style.fontSize="90px";
    hearth3.textContent="Thank You for Your Rating";
}
