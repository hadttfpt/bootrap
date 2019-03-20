var btnSubmit = document.forms['login']['btnSubmit'];
btnSubmit.onclick=function(){
   alert("Login Success!");
};

var btnsubmit = document.forms['register']['btnsubmit'];
btnsubmit.onclick=function(){
    alert("Register success with email:  "+document.forms['register']['mail'].value +" and password: "+document.forms['register']['password'].value);
};