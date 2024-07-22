
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
    const formData = new FormData(registerForm);
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    }

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        console.log('User Registered');
    } else {
        console.log('User Not Registered');
    }

    console.log(data);
});

