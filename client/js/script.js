document.getElementById('toggleLogin').addEventListener('click', function() {
    const loginWindow = document.querySelector('.window_login');
    const signupWindow = document.querySelector('.window_singup');
    loginWindow.classList.add('active'); // Показать окно входа
    signupWindow.classList.remove('active'); // Скрыть окно регистрации
});

document.getElementById('toggleSignup').addEventListener('click', function() {
    const loginWindow = document.querySelector('.window_login');
    const signupWindow = document.querySelector('.window_singup');
    signupWindow.classList.add('active'); // Показать окно регистрации
    loginWindow.classList.remove('active'); // Скрыть окно входа
});


document.getElementById('a').addEventListener('submit', function(event) {
    event.preventDefault()
});