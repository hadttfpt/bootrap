var btnSubmit=document.forms['add-box']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateData()) {
        document.forms['add-box'].style.display = 'none';
        var content = '';
        content += '<div class="col-lg-3 col-sm-3">';
        content += '<div class="card">';
        content += '<img src=" ' + document.forms['add-box']['thumbnail'].value + '" alt="card img" style="width: 100%">';
        content += '<div class="card-body">';
        content += '<h3 class="card-text text-center">' + document.forms['add-box']['name'].value + '</h3>';
        content += '<div class="card-img-top">';
        content += '</div>';
        content += '</div>';
        content += '</div>';
    }
    document.getElementById('new-content').innerHTML += content;
};


validateData();

function validateData() {
    var thumbnail = document.forms['add-box']['thumbnail'].value;
    var name = document.forms['add-box']['name'].value;

    var isValid = true;
    var isValidName = true;
    var isValidthumbnail = true;

    if (thumbnail == null || thumbnail.length == 0) {
        isValidthumbnail = false;
    }

    if (name == null || name.length == 0) {
        isValidName = false;
    }
    isValid = isValidthumbnail && isValidName;
    return isValid;
}