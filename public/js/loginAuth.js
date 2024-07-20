const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
    console.log('Logging In');

    const formData = new FormData(loginForm);
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    console.log(data);

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        console.log('User Logged In');
    } else {
        console.log('User Not Logged In');
    }

});
