document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();  // Prevent the default form submission

        console.log('Logging In');

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        console.log(data);

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log('User Logged In');
                // Redirect or perform other actions after successful login
                window.location.href = '/home'; // Example of redirecting to home page
            } else {
                console.log('User Not Logged In');
                // Handle the error response
                const result = await response.json();
                alert(result.response); // Display error message to the user
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});