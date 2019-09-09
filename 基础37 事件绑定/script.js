"use strict";

var choose={
	item1:"frame1",
	item2:"frame2",
	item3:"frame3",
};

var l={
	item1:"0%",
	item2:"-100%",
	item3:"-200%",
};

function refresh(ele){
	var items=document.querySelectorAll('.item-clicked');
	for(var i=0;i<items.length;++i){
		var item=items[i];
		document.getElementById(choose[item.id]).className="frame hide";
		if(ele===item) {continue;}
		item.className="item";
	}
}

function clicked(ele){
	refresh(ele);
	ele.className="item-clicked";
	var container=document.getElementById("container");
	container.style.transform="translate("+l[ele.id]+",0px)";
}
