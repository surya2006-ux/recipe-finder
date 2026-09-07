const ADMIN_USER = 'admin';
const ADMIN_PASSWORD = 'admin123';

function getUsers() { return JSON.parse(localStorage.getItem('rf_users') || '[]'); }
function getActivity() { return JSON.parse(localStorage.getItem('rf_searchHistory') || '[]'); }
function getFavoritesCount() {
  return getUsers().reduce((total, user) => {
    try { return total + JSON.parse(localStorage.getItem('rf_favorites_' + user.username) || '[]').length; }
    catch { return total; }
  }, 0);
}

function showDashboard() {
  document.getElementById('adminLoginScreen').style.display = 'none';
  document.getElementById('adminDashboard').style.display = 'block';
  renderStats(); renderUsers(); renderActivity(); renderRecipes();
}

function showLogin() {
  document.getElementById('adminLoginScreen').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
}

function renderStats() {
  document.getElementById('totalUsers').textContent = getUsers().length;
  document.getElementById('totalSearches').textContent = getActivity().length;
  document.getElementById('totalFavorites').textContent = getFavoritesCount();
  document.getElementById('totalRecipes').textContent = Array.isArray(window.recipes) ? recipes.length : 0;
}

function renderUsers(filter = '') {
  const query = filter.toLowerCase();
  const users = getUsers().filter(u =>
    String(u.username || '').toLowerCase().includes(query) || String(u.email || '').toLowerCase().includes(query)
  );
  const tbody = document.getElementById('usersTable');
  tbody.innerHTML = users.length ? users.map((u, i) => `
    <tr><td>${i + 1}</td><td><i class="fa-solid fa-circle-user"></i> ${escapeHtml(u.username)}</td><td>${escapeHtml(u.email)}</td>
    <td><button class="delete-btn" data-user="${escapeHtml(u.username)}"><i class="fa-solid fa-trash"></i> Delete</button></td></tr>`).join('')
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
  tbody.innerHTML = activity.length ? activity.slice(0, 30).map(a => {
    const ingredients = Array.isArray(a.ingredients) ? a.ingredients.join(', ') : String(a.ingredients || '');
    const time = a.time ? new Date(a.time).toLocaleString() : '—';
    return `<tr><td><i class="fa-solid fa-user"></i> ${escapeHtml(a.username || 'Guest')}</td><td>${escapeHtml(ingredients)}</td><td>${escapeHtml(time)}</td></tr>`;
  }).join('') : '<tr><td colspan="3" class="empty-table">No search activity yet.</td></tr>';
}

function renderRecipes() {
  const list = Array.isArray(window.recipes) ? recipes : [];
  document.getElementById('recipeAdminGrid').innerHTML = list.map((r, i) => `
    <div class="recipe-admin-card"><div class="recipe-admin-icon" style="background:${escapeHtml(r.color || '#7c3aed')}"><i class="fa-solid ${escapeHtml(r.icon || 'fa-utensils')}"></i></div>
    <div><strong>${i + 1}. ${escapeHtml(r.name)}</strong><small>${r.diet === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'} • ${(r.ingredients || []).length} ingredients</small></div></div>`).join('');
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

const adminLoginForm = document.getElementById('adminLoginForm');
adminLoginForm.addEventListener('submit', e => {
  e.preventDefault();
  const username = document.getElementById('adminUsername').value.trim();
  const password = document.getElementById('adminPassword').value;
  const error = document.getElementById('adminLoginError');
  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    localStorage.setItem('rf_adminLoggedIn', 'true');
    error.style.display = 'none';
    showDashboard();
  } else {
    error.textContent = 'Invalid admin username or password.';
    error.style.display = 'block';
  }
});

document.getElementById('userSearch').addEventListener('input', e => renderUsers(e.target.value));
document.getElementById('clearActivity').addEventListener('click', () => {
  if (confirm('Clear all search activity?')) { localStorage.removeItem('rf_searchHistory'); renderStats(); renderActivity(); }
});
document.getElementById('adminLogout').addEventListener('click', () => {
  localStorage.removeItem('rf_adminLoggedIn');
  showLogin();
});

document.getElementById('backToUserPage').addEventListener('click', () => {
  window.location.href = 'index.html';
});

if (localStorage.getItem('rf_adminLoggedIn') === 'true') showDashboard();
else showLogin();
