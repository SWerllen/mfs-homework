var can=document.getElementById("can");
function f(el){
	alert(el);
}
var ctx=can.getContext("2d");


ctx.lineCap="round";
ctx.translate(100,100);
ctx.beginPath();
ctx.strokeStyle="#325fa2";
ctx.lineWidth=8;
var biao=new Path2D();
biao.arc(0,0,80,0,2*Math.PI,true);
ctx.stroke(biao);

ctx.lineWidth=4;
var fen=2*Math.PI/60;
var rad=70;
ctx.strokeStyle="black";
for(var i=0;i<60;++i){
	if(i%5){
		ctx.beginPath();
		var x=Math.sin(i*fen)*rad;
		var y=Math.cos(i*fen)*rad;
		ctx.moveTo(x,y);
		ctx.lineTo(0.97*x,0.97*y);
		ctx.stroke();
	}else{
		ctx.beginPath();
		var x=Math.sin(i*fen)*rad;
		var y=Math.cos(i*fen)*rad;
		ctx.moveTo(x,y);
		ctx.lineTo(0.85*x,0.85*y);
		ctx.stroke();
	}
}

var du=Math.PI/180;
ctx.strokeStyle="red";
ctx.beginPath();
ctx.lineWidth=4;
var x=Math.sin(168*du)*rad;
var y=Math.cos(168*du)*rad;
ctx.moveTo(0.7*x,0.7*y);
ctx.lineTo(-0.24*x,-0.24*y);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=4;
ctx.arc(0.8*x,0.8*y,5,0,2*Math.PI,true);
ctx.stroke();

ctx.strokeStyle="black";
ctx.beginPath();
ctx.lineWidth=6;
x=Math.sin(-96*du)*rad;
y=Math.cos(-96*du)*rad;
ctx.moveTo(0.93*x,0.93*y);
ctx.lineTo(-0.3*x,-0.3*y);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth=8;
x=Math.sin(-114*du)*rad;
y=Math.cos(-114*du)*rad;
ctx.moveTo(0.7*x,0.7*y);
ctx.lineTo(-0.24*x,-0.24*y);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=4;
ctx.arc(0,0,3.5,0,2*Math.PI,true);
ctx.stroke();