const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'admin123';

const loginScreen = document.getElementById('adminLoginScreen');
const dashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('adminLoginForm');
const errorMsg = document.getElementById('adminErrorMsg');
const successMsg = document.getElementById('adminSuccessMsg');

// Admin login is stored only for the current browser tab/session.
// This prevents the admin page from staying logged in after the website is closed.
// Remove the old localStorage flag used by the previous version.
localStorage.removeItem('rf_adminLoggedIn');

function isAdminLoggedIn() {
  return sessionStorage.getItem('rf_adminLoggedIn') === 'true';
}

function showDashboard() {
  loginScreen.style.display = 'none';
  dashboard.style.display = 'block';
  renderStats();
  renderUsers();
  renderActivity();
  renderRecipes();
}

function showLogin() {
  loginScreen.style.display = 'flex';
  dashboard.style.display = 'none';
}

if (isAdminLoggedIn()) {
  showDashboard();
} else {
  showLogin();
}

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('adminUsername').value.trim();
  const password = document.getElementById('adminPassword').value;
  errorMsg.style.display = 'none';
  successMsg.style.display = 'none';

  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    sessionStorage.setItem('rf_adminLoggedIn', 'true');
    successMsg.textContent = 'Login successful! Opening dashboard...';
    successMsg.style.display = 'block';
    setTimeout(showDashboard, 350);
  } else {
    errorMsg.textContent = 'Invalid admin username or password.';
    errorMsg.style.display = 'block';
  }
});

function getUsers() { return JSON.parse(localStorage.getItem('rf_users') || '[]'); }
function getActivity() { return JSON.parse(localStorage.getItem('rf_searchHistory') || '[]'); }
function getFavoritesCount() {
  return getUsers().reduce((total, user) => total + JSON.parse(localStorage.getItem('rf_favorites_' + user.username) || '[]').length, 0);
}

function renderStats() {
  document.getElementById('totalUsers').textContent = getUsers().length;
  document.getElementById('totalSearches').textContent = getActivity().length;
  document.getElementById('totalFavorites').textContent = getFavoritesCount();
  document.getElementById('totalRecipes').textContent = recipes.length;
}

function renderUsers(filter = '') {
  const users = getUsers().filter(u =>
    u.username.toLowerCase().includes(filter.toLowerCase()) || u.email.toLowerCase().includes(filter.toLowerCase())
  );
  const tbody = document.getElementById('usersTable');
  tbody.innerHTML = users.length ? users.map((u, i) => `
    <tr><td>${i + 1}</td><td><i class="fa-solid fa-circle-user"></i> ${u.username}</td><td>${u.email}</td>
    <td><button class="delete-btn" data-user="${u.username}"><i class="fa-solid fa-trash"></i> Delete</button></td></tr>`).join('')
    : '<tr><td colspan="4" class="empty-table">No users found.</td></tr>';
  tbody.querySelectorAll('.delete-btn').forEach(btn => btn.addEventListener('click', () => deleteUser(btn.dataset.user)));
}

function deleteUser(username) {
  if (!confirm(`Delete user "${username}"?`)) return;
  const users = getUsers().filter(u => u.username !== username);
  localStorage.setItem('rf_users', JSON.stringify(users));
  localStorage.removeItem('rf_favorites_' + username);
  renderStats(); renderUsers(document.getElementById('userSearch').value); renderActivity();
}

function renderActivity() {
  const activity = getActivity().slice().reverse();
  const tbody = document.getElementById('activityTable');
  tbody.innerHTML = activity.length ? activity.slice(0, 30).map(a => `
    <tr><td><i class="fa-solid fa-user"></i> ${a.username}</td><td>${a.ingredients.join(', ')}</td><td>${new Date(a.time).toLocaleString()}</td></tr>`).join('')
    : '<tr><td colspan="3" class="empty-table">No search activity yet.</td></tr>';
}

function renderRecipes() {
  document.getElementById('recipeAdminGrid').innerHTML = recipes.map((r, i) => `
    <div class="recipe-admin-card"><div class="recipe-admin-icon" style="background:${r.color}"><i class="fa-solid ${r.icon}"></i></div>
    <div><strong>${i + 1}. ${r.name}</strong><small>${r.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} • ${r.ingredients.length} ingredients</small></div></div>`).join('');
}

document.getElementById('userSearch').addEventListener('input', e => renderUsers(e.target.value));
document.getElementById('clearActivity').addEventListener('click', () => {
  if (confirm('Clear all search activity?')) { localStorage.removeItem('rf_searchHistory'); renderStats(); renderActivity(); }
});
document.getElementById('adminLogout').addEventListener('click', () => {
  sessionStorage.removeItem('rf_adminLoggedIn');
  window.location.href = 'index.html';
});
