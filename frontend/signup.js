document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate the form
    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect to login page after successful registration
            window.location.href = '/login.html';
        } else {
            // Show error message
            alert(data.message || "Signup failed!");
        }
    } catch (error) {
        console.error('Error:', error);
        alert("Something went wrong.");
    }
});
