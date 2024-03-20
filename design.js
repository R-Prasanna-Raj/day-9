function add(){

    var a=parseFloat(document.getElementById("num1").value );
    var b=parseFloat(document.getElementById("num2").value);
    var ans=document.getElementById("ans");
    ans.textContent=a+b;
    
}
function sub(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var ans=document.getElementById("ans");
    ans.textContent=a-b;
}
function mul(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var ans=document.getElementById("ans");
    ans.textContent=a*b;
}
function div(){
    var a=parseFloat(document.getElementById("num1").value);
    var b=parseFloat(document.getElementById("num2").value);
    var ans=document.getElementById("ans");
    
    if(b!== 0 ){
        ans.textContent=a/b;
    }
    else{
        ans.textContent="CANNOT DIVIDE BY ZERO"
    }
}