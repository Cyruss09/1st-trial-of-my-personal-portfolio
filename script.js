function openModal (modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal (modalId) {
    document.getElementById(modalId).style.display = "none";
}


window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
}