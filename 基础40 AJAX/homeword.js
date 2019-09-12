"use strict";

var pagesNum=8;
var maxItemsNum=90;
var pagesNode=[null];

function card(){
	this.ee=new XMLHttpRequest();
	this.ee.onreadystatechange
}


function containerFresh(curpage){
	var container=document.getElementById('container');
	for(var i=1;i<=pagesNum;++i)
		pagesNode[i].style.background="transparent";
	pagesNode[curpage].style.background="#ee6e73";
	container.innerHTML='';
	var min = curpage*12-12+1;
	var max = Math.min(min+11,maxItemsNum);
	for(var i=min;i<=max;++i){
		var newNode=document.createElement("div");
		newNode.className="item";
		newNode.innerHTML='<div class="title">'+i.toString()+'</div><div class="info"> <img src="https://work.mafengshe.com/static/imgs/view2.svg" width="18px"> 333 <img src="https://work.mafengshe.com/static/imgs/huida.svg" width="13px"> 23 </div> <img src="https://work.mafengshe.com/static/imgs/平静.svg" width="60" height="60"> <div class="bot-title">作业'+i.toString()+'</div>';
		container.appendChild(newNode);
	}
}

var curpage=1;
function pre(event){
	curpage=Math.max(1,curpage-1);
	console.log(curpage);
	containerFresh(curpage);
}

function next(event){
	console.log(curpage,pagesNum);
	curpage=Math.min(curpage+1,pagesNum);
	console.log(curpage);
	containerFresh(curpage);
}

function toPage(event){
	var ele=event.target;
	var id=ele.id;
	curpage=id.split('_')[1];
	containerFresh(curpage);
}

var pagination=document.getElementById("pagination");
var preNode=document.createElement("span");
preNode.id="page_pre";
preNode.innerHTML=" < ";
preNode.addEventListener("click",pre);
pagination.appendChild(preNode);
for(var i=1;i<=pagesNum;++i){
	console.log(i);
	var newNode=document.createElement("span");
	newNode.id="page_"+i.toString();
	newNode.addEventListener("click",toPage);
	newNode.innerHTML=" "+i+" ";
	pagination.appendChild(newNode);
	pagesNode.push(newNode);
}

var nextNode=document.createElement("span");
nextNode.id="page_next";
nextNode.innerHTML=" > ";
nextNode.addEventListener("click",next);
pagination.appendChild(nextNode);

containerFresh(curpage);
