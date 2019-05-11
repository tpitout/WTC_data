function openModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.style.display = "block";
}

function closeModal(modalID) {
    var modal = document.getElementById(modalID);
    modal.style.display = "none";
}

function setModalSingle() {
    document.getElementById("inputField_1").style.display = "block";
    document.getElementById("inputField_2").style.display = "none";
    document.getElementById("inputField_3").style.display = "none";
    document.getElementById("chooseGraph1").style.border = "2px solid blue";
    document.getElementById("chooseGraph2").style.border = "none";
}

function setModalCompare() {
    document.getElementById("inputField_3").style.display = "none";
    document.getElementById("inputField_2").style.display = "block";
    document.getElementById("inputField_1").style.display = "none";
    document.getElementById("chooseGraph2").style.border = "2px solid blue";
    document.getElementById("chooseGraph1").style.border = "none";
}

function setTime() {
    document.getElementById("inputField_3").style.display = "block";
    document.getElementById("inputField_2").style.display = "none";
    document.getElementById("inputField_1").style.display = "none";
    document.getElementById("chooseGraph2").style.border = "none";
    document.getElementById("chooseGraph1").style.border = "none";
}