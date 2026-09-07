const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'admin123';

if (localStorage.getItem('rf_adminLoggedIn') !== 'true') {
  const username = prompt('Admin username:');
  const password = prompt('Admin password:');
  if (username !== ADMIN_USER || password !== ADMIN_PASSWORD) {
    alert('Invalid admin credentials.');
    window.location.href = 'index.html';
  } else {
    localStorage.setItem('rf_adminLoggedIn', 'true');
  }
}

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
document.getElementById('adminLogout').addEventListener('click', () => { localStorage.removeItem('rf_adminLoggedIn'); window.location.href = 'index.html'; });

renderStats(); renderUsers(); renderActivity(); renderRecipes();
