//constants
const closeBTN = document.querySelector('.close__button');
const formTAB = document.querySelector('.container__registration');
const regBTN = document.querySelector('.reg__button');
const addNewCard = document.querySelector('.add-card');
const paymentMethod = Array.from(document.querySelectorAll('.content-right--payment_card'));
const upgradeBTN = Array.from(document.querySelectorAll('.myPlan_packages_btn'));
const menuItem = Array.from(document.querySelectorAll('.menu-item'));
const profileIcons = Array.from(document.querySelectorAll('.profile--icons'));


//make active personal zone menu item
menuItem.forEach(item => item.addEventListener('click', (e) => {
    document.querySelector('.menu-item_active').classList.remove('menu-item_active');
    e.target.classList.add('menu-item_active');
}));

//choose package
upgradeBTN.forEach(item => item.addEventListener('click', (e) => {
    document.querySelector('.active-btn').children[0].textContent = 'Upgrade';
    e.target.textContent = 'Current Plan';
    document.querySelector('.active-btn').classList.remove('active-btn');
    document.querySelector('.active-packages').classList.remove('active-packages');
    e.target.parentElement.classList.add('active-btn');
    e.target.parentElement.parentElement.classList.add('active-packages');
}));

//choose payment method
paymentMethod.forEach(item => item.addEventListener('click', (e) => {
    document.querySelector('.active-payment').classList.remove('active-payment');
    e.target.classList.add('active-payment');
}));

//add new card window
addNewCard.addEventListener('click', () => {
    formTAB.classList.remove('disable', 'flipout');
    formTAB.style.display = 'flex';
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.querySelector('.container').style.maxHeight = '100vh';
});

//close button 
closeBTN.addEventListener('click', () => {
    formTAB.className += ' flipout';
    document.querySelector('.container').style.maxHeight = 'initial';
});

//card number format
card.addEventListener('keydown', (e) => {
    if(e.target.value.length == 4 || e.target.value.length == 9 || e.target.value.length == 14 ) {
        e.target.value += ' ';
    }
    //check if viza or mastercard
    visa.style.display = 'block';
});

// active or disable pay button by checking payment inputs
card.addEventListener("keydown", checkoutOnFocus);
MM.addEventListener("keydown", checkoutOnFocus);
YY.addEventListener("keydown", checkoutOnFocus);
cvv.addEventListener("keydown", checkoutOnFocus);

//burger menu listener
burger.addEventListener('change', () => {
    if(document.querySelector('#burger').checked == true) {
        document.querySelector('.content-left').classList.remove("flipout"); //remove hidden effect class
        document.querySelector('.content-left').className += " flipin"; //add display effect class
        document.querySelector('.content-left').style.display = "flex";
        document.querySelector('.content-right').style.display = "none";
    } else {
        document.querySelector('.content-left').classList.remove("flipin"); //remove display effect class
        document.querySelector('.content-left').className += " flipout"; //add hidden effect class
        document.querySelector('.content-right').style.display = "flex";
    }
});

//functions
function checkoutOnFocus() {
    //validation of visa and active or disable pay button
 if(card.value.length > 0 && MM.value.length > 0 && YY.value.length > 0 && cvv.value.length > 0) {

    regBTN.style.opacity = '1';
    regBTN.disabled = false;
 } else {
    regBTN.style.opacity = '0.5';
    regBTN.disabled = true;
 }
}
