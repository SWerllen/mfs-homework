"use strict";

function Commodity(name, price, imgUrl, num) {
	this.name = name;
	this.price = price;
	this.imgUrl = imgUrl;
	this.num = Number(num);
	this.getCommodity = function (id) {
		var commodity = document.createElement("div");
		commodity.className = "item";
		commodity.id = "commodity_" + id.toString();
		commodity.innerHTML = '<div class="img" style="background-image: url(' + this.imgUrl.toString() + ')"></div><div class="description"><div class="title"><h3>' + this.name.toString() + '</h3></div><div class="price">' + this.price.toString() + ' 万元/平米</div></div><div class="operation"><button type="button" onclick="sub(this)" class="subtract">-</button><span class="num">' + this.num.toString() + '</span><button type="button" onclick="add(this)" class="add">+</button></div>';
		return commodity;
	};
}

var commodities = [
	new Commodity('温馨小别墅', 4, 'http://moneyaaa.com/file//n9091/t.jpg', 0),
	new Commodity('豪华花园别墅', 16, 'http://www.buildhomeinusa.com/uploads/allimg/18/img180720_a1.jpg', 0),
	new Commodity('自然风景独栋宅', 2, 'https://startuplatte.com/wp-content/uploads/2017/08/muji-hut-designboom-180031-1080x643.jpg', 0),
	new Commodity('传统田园平房', 0.1, 'https://p1-news.hfcdn.com/p1-news/MTg2MTkxM25ld3M,/3745b528e6ee97cd_656x492.jpg/qs/w=600&h=600&r=16888', 0),
	new Commodity('现代舒适蜗居房', 3, 'http://www.91exiu.com//images/upload/Image/jz56.jpg', 0)
];


var content = document.querySelector(".content");

var oldCommodites = [];
for (var i in commodities) {
	commodities[i].num = localStorage.getItem(commodities[i].name);
	if (!commodities[i].num) {
		localStorage.setItem(commodities[i].name, 0);
		commodities[i].num = 0;
	}
	var newComm = commodities[i].getCommodity(i);
	oldCommodites.push(newComm);
	content.appendChild(newComm);
}

function change(index, diff) {
	console.log(index);
	commodities[index].num = Math.max(0, Number(commodities[index].num) + diff)
	localStorage.setItem(commodities[index].name, commodities[index].num);
	var newComm = commodities[index].getCommodity(index);
	content.replaceChild(newComm, oldCommodites[index]);
	oldCommodites[index] = newComm;
}

function add(ele) {
	var commodity = ele.parentNode.parentNode;
	var index = commodity.id.split('_')[1];
	change(index, 1);
}

function sub(ele) {
	var commodity = ele.parentNode.parentNode;
	var index = commodity.id.split('_')[1];
	change(index, -1);
}