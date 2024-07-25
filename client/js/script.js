document.addEventListener("DOMContentLoaded", function() {
    // Переключение на окно регистрации
    document.getElementById("toggleSignup").addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        document.querySelector(".window_login").classList.remove("active");
        document.querySelector(".window_signup").classList.add("active");
    });

    // Переключение на окно входа
    document.getElementById("toggleLogin").addEventListener("click", function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        document.querySelector(".window_signup").classList.remove("active");
        document.querySelector(".window_login").classList.add("active");
    });
});

