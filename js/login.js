function login() {
    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
     // Storing username & password in localStorage, overriding them if they exist
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);
    // Will be an API call in production
    if(username === 'username' && password === 'password') {
        window.location = 'resume.html';
    } else {
        document.getElementById('invalid-login').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}