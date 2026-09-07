// ---------- Shared helper functions ----------
function getUsers() {
  return JSON.parse(localStorage.getItem('rf_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('rf_users', JSON.stringify(users));
}
function setCurrentUser(username) {
  localStorage.setItem('rf_currentUser', username);
}

// ---------- Registration page logic ----------
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');
    errorMsg.style.display = 'none';
    successMsg.style.display = 'none';

    if (password !== confirmPassword) {
      errorMsg.textContent = 'Passwords do not match.';
      errorMsg.style.display = 'block';
      return;
    }
    if (password.length < 4) {
      errorMsg.textContent = 'Password must be at least 4 characters.';
      errorMsg.style.display = 'block';
      return;
    }

    const users = getUsers();
    if (users.some(u => u.username.toLowerCase() === username.toLowerCase())) {
      errorMsg.textContent = 'That username is already taken.';
      errorMsg.style.display = 'block';
      return;
    }

    users.push({ username, email, password });
    saveUsers(users);

    successMsg.textContent = 'Account created! Redirecting to login...';
    successMsg.style.display = 'block';
    setTimeout(() => { window.location.href = 'index.html'; }, 1200);
  });
}

// ---------- Login page logic ----------
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorMsg = document.getElementById('errorMsg');
    errorMsg.style.display = 'none';

    const users = getUsers();
    const match = users.find(u =>
      u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );

    if (!match) {
      errorMsg.textContent = 'Invalid username or password.';
      errorMsg.style.display = 'block';
      return;
    }

    setCurrentUser(match.username);
    window.location.href = 'recipe.html';
  });
}
