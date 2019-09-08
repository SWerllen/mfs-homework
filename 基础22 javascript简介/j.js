function f(){
    console.info("aeqweqwiejqwie");
}

function read(a) {
    var a='http://bbs.static.mafengshe.com/FnZKsBjA92iA42Tafhjm2SnE3_c3?imageMogr2/quality/40.png';
    a=String(a);
    var parts = a.split('.');
    alert(parts[parts.length-1]);
}

function toFirstCharUpperCase(sentence){
    var e= sentence.replace(/\b\w+\b/g,function(word){return word[0].toUpperCase()+word.slice(1);})
    return e;
}

function aa(a,b){
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
}

var a=new Array(10,11,7,8,9);
a.sort(aa);
console.info(a);