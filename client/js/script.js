document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("toggleSignup").addEventListener("click", function(event) {
        event.preventDefault(); 
        document.querySelector(".window_login").classList.remove("active");
        document.querySelector(".window_signup").classList.add("active");
    });

    document.getElementById("toggleLogin").addEventListener("click", function(event) {
        event.preventDefault(); 
        document.querySelector(".window_signup").classList.remove("active");
        document.querySelector(".window_login").classList.add("active");
    });
});

