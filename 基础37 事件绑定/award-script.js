"use strict";

var start = document.getElementById('start');
var stop  = document.getElementById('stop');
var award = document.getElementById('award');

var gailv=[0.01,0.11,0.41,0.81,1];
var awards=["特等奖","一等奖","二等奖","三等奖","鼓励奖"];
var session;

function changeaward(){
	var score=Math.random();
	console.log(score);
	for(var i in gailv){
		if(score<=gailv[i]){
			award.innerHTML=awards[i];
			break;
		}
	}
}

function startClick(){
	session=setInterval(changeaward,20);
	console.log("kaishi");
}

function stopClick(){
	clearInterval(session);
}

start.addEventListener("click",startClick);
stop.addEventListener("click",stopClick);
