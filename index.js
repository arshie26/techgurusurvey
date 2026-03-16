function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const scaleFactor = 1/20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y);

    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd? -1:1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    emailjs.
        sendForm(
            'service_r78ahpj',
            'template_evl4y6q',
            event.target,
            'F4u2ld_osdrpQCHYu'
    ).then(() => {
        console.log("this worked");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch((error) => {
        loading.classList.remove("modal__overlay--visible");
        alert(error);
    })

    console.log('it worked');
    loading.classList += " modal__overlay--visible";
}

let isModalOpen = false;
function toggleModal(){
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}


let contrastToggle = false;
function toggleTheme(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        return document.body.classList += "dark-theme";    
    }    
    document.body.classList.remove("dark-theme");
}

function closeMenu(){
    console.log("closemenu");
    const success = document.querySelector(".modal__overlay--success");
    success.classList.remove("modal__overlay--visible");
    const modal = document.querySelector(".modal");
    modal.classList += " modal__close";
}