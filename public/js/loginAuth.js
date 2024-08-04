// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');

//     loginForm.addEventListener('submit', async (e) => {

//         console.log('Logging In');

//         const formData = new FormData(loginForm);
//         const data = {
//             username: formData.get('username'),
//             password: formData.get('password')
//         }


//         console.log(data);

//         try {
//             const response = await fetch('/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (response.ok) {
//                 console.log('User Logged In');
//                 window.location.href = '/home';
//                 // Redirect or perform other actions after successful login
//             } else {
//                 console.log('User Not Logged In');
//                 // Handle the error response
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('An error occurred. Please try again.');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    let isSubmitting = false;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (isSubmitting) return;
        isSubmitting = true;

        console.log('Logging In');

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                console.log('User Logged In');
                window.location.href = result.redirect;
            } else {
                console.log('Login failed:', result.message);
                // Handle the error, maybe show a message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            isSubmitting = false;
        }
    });
});