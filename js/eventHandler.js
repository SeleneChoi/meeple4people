const reservationForm = document.getElementById("reservation");
const overlay1 = document.querySelector(".overlay1");
const overlay2 = document.querySelector(".overlay2");
const detail = document.getElementById("detail");
const confirm = document.getElementById('confirm');


function showForm() {
    reservationForm.style.display = 'flex'
    detail.style.display='none'
    overlay1.style.opacity = '0.5'
    overlay2.style.opacity = '0.5'

}

function closeForm() {
    reservationForm.style.display = 'none'
    detail.style.display='none'
    confirm.style.display='none'
    overlay1.style.opacity = '1'
    overlay2.style.opacity = '1'
}

function showDetail() {
    reservationForm.style.display = 'none'
    detail.style.display = 'flex'

    const date = document.getElementById('dateInput').value;
    const time = document.getElementById('timeInput').value;
    const guests = document.getElementById('guestsInput').value;
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const phone = document.getElementById('phoneInput').value;
    const request = document.getElementById('requestInput').value;

    const dateOutput = document.getElementById('dateDisplay');
    const timeOutput = document.getElementById('timeDisplay');
    const guestsOutput = document.getElementById('guestsDisplay');
    const nameOutput = document.getElementById('nameDisplay');
    const emailOutput = document.getElementById('emailDisplay');
    const phoneOutput = document.getElementById('phoneDisplay');
    const requestOutput = document.getElementById('requestDisplay');

    dateOutput.innerHTML = date;
    timeOutput.innerHTML = time;
    guestsOutput.innerHTML = guests;
    nameOutput.innerHTML = name;
    emailOutput.innerHTML = email;
    phoneOutput.innerHTML = phone;
    requestOutput.innerHTML = request;
}

function showConfirm() {
    reservationForm.style.display = 'none'
    detail.style.display='none'
    confirm.style.display ='flex'
}

// Dropdown menu
const dropdown = document.getElementById('dropdown');
const menu = document.getElementById('bar');

function handleOutsideClick(e){
    if(e.target !== dropdown && e.target !== menu) {
        menu.style.display = 'none';
    }
}

function toggleOutsideClickListener() {
    if(window.innerWidth <= 780) {
        document.addEventListener("click", handleOutsideClick);
    } else {
        document.removeEventListener("click",handleOutsideClick);
    }
}

dropdown.addEventListener("click", ()=>{
    menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
});

toggleOutsideClickListener();

window.addEventListener("resize", toggleOutsideClickListener);