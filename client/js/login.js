const url = 'https://beagle-mighty-terribly.ngrok-free.app';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitLogin').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        const data = { username, password };

        fetch( url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            alert('Login successful! Token: ' + data.token);

            localStorage.setItem('token', data.token);

            window.location.href = 'https://vc.ru/dev/660170-sposoby-sozdaniya-avtorizacii-na-saite-rukovodstvo-s-primerami-bezopasnost-v-brauzere'
        })
        .catch((error) => {

            alert(error.message);
        });
    });
});