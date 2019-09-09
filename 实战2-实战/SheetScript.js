"use strict"
var error=document.getElementById("sign-error");
var username=document.getElementById("username");
var password=document.getElementById("password");
var password2=document.getElementById("password-2");

function onSignUpFormSubmit(){
	error.innerHTML="";
	var reg=/^[A-z][a-zA-Z0-9_]{5,15}$/;
	if(username.value.length>16||username.value.length<6||!reg.test(username.value)){
		error.innerHTML="用户名必须以字母开头，6-16个英文字符，数字或下划线！";
		return false;
	}
	if(password.value.length>20||password.value.length<8){
		error.innerHTML="口令必须8-20个字符，英文字符，数字，下划线或特殊符号！";
		return false;
	}
	if(password.value!==password2.value){
		error.innerHTML="重复口令：必须和口令一致！";
		return false;
	}
	return false;
}