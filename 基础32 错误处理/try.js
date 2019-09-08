var sen=prompt("你好！请输入算术式：",""); 
var b;
try{
    var b=eval(sen);
    console.log(b);
}catch(err){
    console.log(err);
}