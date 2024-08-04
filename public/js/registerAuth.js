

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', async (e) => {
        const formData = new FormData(registerForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }


        console.log(data);

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

    });
});
