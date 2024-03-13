document.querySelector(".show-form-one").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".show-form-two").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".show-form-three").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".input .contact-button").addEventListener("click", function(){
    document.querySelector(".load-row").classList.add("show");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});