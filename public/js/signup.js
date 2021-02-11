const signupFormHandler = async(event) => {
    event.preventDefault();

    const name = document.getElementById('name-signup').value.trim();
    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();
    const confirmPassword = document.getElementById('confirmPassword-signup').value.trim();
    
    if(password.length < 8) {
        alert("Please enter a password with at least 8 characters.")
        password.value("")
        confirmPassword.value("")
    }


    if(password !== confirmPassword) {
        alert("Your passwords did not match.")
        password.value("")
        confirmPassword.value("")
    }


    if (name && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({name, email, password}), 
            headers: {'Content-Type': 'application/json'}
        })

        if (response.ok) {
            document.location.replace('/profile')
            
        } else {
            alert(response.statusText)
        }
    }
};

document
    .getElementById('signup-btn')
    .addEventListener('click', signupFormHandler)