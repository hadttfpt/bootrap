var btnSubmit=document.forms['resetPass']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateData()) {
       alert("Success! Pass: "+document.forms['resetPass']['password'].value);
    }
};


validateData();

function validateData() {
    var resetemail = document.forms['resetPass']['email'].value;
    var resetPass = document.forms['resetPass']['password'].value;

    var isValidate = true;
    var isValidresetEmail = true;
    var isValidresetPass = true;

    if(resetemail==null||resetemail.length==0){
        isValidresetEmail = false;
    }

    if (resetPass == null || resetPass.length == 0) {
        isValidresetPass = false;
    }
    isValidate=isValidresetEmail&&isValidresetPass;
    return isValidresetPass;
}