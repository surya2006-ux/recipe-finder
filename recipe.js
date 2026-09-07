// ---------- Protect this page: must be logged in ----------
const currentUser = localStorage.getItem('rf_currentUser');
if (!currentUser) {
  window.location.href = 'index.html';
}

// ---------- Recipe Database ----------
// The 100-recipe list now lives in recipes-data.js (loaded before this file
// in recipe.html), which creates the global `recipes` array used below.

const resultsDiv = document.getElementById('results');
const favResultsDiv = document.getElementById('favResults');
const favSection = document.getElementById('favSection');
const modalOverlay = document.getElementById('modalOverlay');
const modalBox = document.getElementById('modalBox');

let savedFavorites = JSON.parse(localStorage.getItem('rf_favorites_' + currentUser) || '[]');
let currentDiet = 'all';

// Remembers the last search so we can redraw the grid (e.g. after saving
// a favorite) without the user having to search again.
let lastMatched = [];
let lastUserIngredients = [];

// ---------- Page setup ----------
document.addEventListener('DOMContentLoaded', () => {
  const usernameLabel = document.getElementById('usernameLabel');
  if (usernameLabel) usernameLabel.textContent = currentUser;

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('rf_currentUser');
      window.location.href = 'index.html';
    });
  }

  // Pill filter buttons (All / Veg / Non-Veg)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiet = btn.dataset.diet;
      if (lastUserIngredients.length > 0) findRecipes(); // re-run search with new filter
    });
  });

  // Close modal when clicking the dark background
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
});

// ---------- Helper functions ----------
function normalizeList(str) {
  return str.split(',').map(i => i.trim().toLowerCase()).filter(i => i.length > 0);
}

function scoreRecipe(recipe, userIngredients) {
  return recipe.ingredients.filter(ing => userIngredients.includes(ing)).length;
}

// Splits "1. Do this. 2. Do that." into ["Do this.", "Do that."]
function parseSteps(stepsText) {
  return stepsText.split(/\d+\.\s*/).map(s => s.trim()).filter(s => s.length > 0);
}

// ---------- Rendering the grid ----------
function renderGrid(matched, userIngredients, container) {
  container.innerHTML = '';

  if (matched.length === 0) {
    container.innerHTML = '<div class="empty-msg">No recipes found. Try adding common items like onion, salt, or oil.</div>';
    return;
  }

  matched.forEach(recipe => {
    const haveCount = scoreRecipe(recipe, userIngredients);
    const totalCount = recipe.ingredients.length;
    const percent = userIngredients.length > 0 ? Math.round((haveCount / totalCount) * 100) : 0;
    const saved = savedFavorites.includes(recipe.name);

    const tile = document.createElement('div');
    tile.className = 'recipe-tile';
    tile.innerHTML = `
      <div class="tile-header" style="background:${recipe.color}">
        <span class="diet-chip">${recipe.diet === 'veg' ? 'VEG' : 'NON-VEG'}</span>
        <button class="tile-fav-btn ${saved ? 'saved' : ''}" data-name="${recipe.name}">
          <i class="fa-${saved ? 'solid' : 'regular'} fa-star"></i>
        </button>
        <i class="fa-solid ${recipe.icon}"></i>
      </div>
      <div class="tile-body">
        <h3>${recipe.name}</h3>
        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${percent}%; background:${recipe.color}"></div></div>
        <div class="match-text">${haveCount}/${totalCount} ingredients • ${percent}% match</div>
        <div class="tap-hint"><i class="fa-solid fa-hand-pointer"></i> Tap to explore recipe</div>
      </div>
    `;

    // Clicking anywhere on the tile opens the detail modal ("explore")
    tile.addEventListener('click', () => openModal(recipe, userIngredients));

    // Clicking the star toggles favorite WITHOUT opening the modal
    const favBtn = tile.querySelector('.tile-fav-btn');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(recipe.name);
    });

    container.appendChild(tile);
  });
}

// ---------- Modal (recipe detail / "explore" view) ----------
function openModal(recipe, userIngredients) {
  const stepsArr = parseSteps(recipe.steps);
  const haveCount = scoreRecipe(recipe, userIngredients);
  const totalCount = recipe.ingredients.length;
  const percent = userIngredients.length > 0 ? Math.round((haveCount / totalCount) * 100) : 0;
  const saved = savedFavorites.includes(recipe.name);

  const ingredientsHtml = recipe.ingredients.map(ing => {
    const has = userIngredients.includes(ing);
    return `<span class="${has ? 'ing-have' : 'ing-missing'}"><i class="fa-solid fa-${has ? 'check' : 'xmark'}"></i> ${ing}</span>`;
  }).join('');

  const stepsHtml = stepsArr.map((step, i) => `
    <li>
      <span class="step-num" style="background:${recipe.color}">${i + 1}</span>
      <span class="step-text">${step}</span>
    </li>
  `).join('');

  modalBox.innerHTML = `
    <div class="modal-header" style="background:${recipe.color}">
      <button class="close-btn" id="closeModalBtn"><i class="fa-solid fa-xmark"></i></button>
      <i class="fa-solid ${recipe.icon} modal-icon"></i>
      <h2>${recipe.name}</h2>
      <span class="diet-chip-modal">${recipe.diet === 'veg' ? 'VEG' : 'NON-VEG'}</span>
    </div>
    <div class="modal-body">
      ${userIngredients.length > 0 ? `<div class="match-text">${haveCount}/${totalCount} ingredients you have (${percent}% match)</div>` : ''}
      <h4><i class="fa-solid fa-list-check"></i> Ingredients</h4>
      <div class="ingredient-list">${ingredientsHtml}</div>
      <h4><i class="fa-solid fa-shoe-prints"></i> Steps</h4>
      <ol class="steps-list">${stepsHtml}</ol>
      <button class="modal-fav-btn ${saved ? 'saved' : ''}" id="modalFavBtn">
        <i class="fa-${saved ? 'solid' : 'regular'} fa-star"></i> ${saved ? 'Saved' : 'Save Recipe'}
      </button>
    </div>
  `;

  modalOverlay.style.display = 'flex';

  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  document.getElementById('modalFavBtn').addEventListener('click', () => {
    toggleFavorite(recipe.name);
    openModal(recipe, userIngredients); // refresh modal to show updated saved state
  });
}

function closeModal() {
  modalOverlay.style.display = 'none';
}

// ---------- Favorites ----------
function toggleFavorite(name) {
  if (savedFavorites.includes(name)) {
    savedFavorites = savedFavorites.filter(n => n !== name);
  } else {
    savedFavorites.push(name);
  }
  localStorage.setItem('rf_favorites_' + currentUser, JSON.stringify(savedFavorites));
  renderFavorites();
  renderGrid(lastMatched, lastUserIngredients, resultsDiv); // refresh stars on tiles
}

function renderFavorites() {
  if (savedFavorites.length === 0) {
    favSection.style.display = 'none';
    return;
  }
  favSection.style.display = 'block';
  const favRecipes = recipes.filter(r => savedFavorites.includes(r.name));
  renderGrid(favRecipes, [], favResultsDiv);
}

// ---------- Search actions ----------
function findRecipes() {
  const rawInput = document.getElementById('ingredientInput').value;
  const userIngredients = normalizeList(rawInput);

  if (userIngredients.length === 0) {
    resultsDiv.innerHTML = '<div class="empty-msg">Please enter at least one ingredient.</div>';
    return;
  }

  let matched = recipes.filter(recipe =>
    recipe.ingredients.some(ing => userIngredients.includes(ing))
  );

  if (currentDiet !== 'all') {
    matched = matched.filter(r => r.diet === currentDiet);
  }

  matched.sort((a, b) => scoreRecipe(b, userIngredients) - scoreRecipe(a, userIngredients));

  lastMatched = matched;
  lastUserIngredients = userIngredients;

  const history = JSON.parse(localStorage.getItem('rf_searchHistory') || '[]');
  history.push({ username: currentUser, ingredients: userIngredients, time: new Date().toISOString() });
  localStorage.setItem('rf_searchHistory', JSON.stringify(history));
  renderGrid(matched, userIngredients, resultsDiv);
}

function surpriseMe() {
  const pool = currentDiet === 'all' ? recipes : recipes.filter(r => r.diet === currentDiet);
  const random = pool[Math.floor(Math.random() * pool.length)];
  lastMatched = [random];
  lastUserIngredients = [];
  renderGrid([random], [], resultsDiv);
}

document.getElementById('searchBtn').addEventListener('click', findRecipes);
document.getElementById('surpriseBtn').addEventListener('click', surpriseMe);
document.getElementById('ingredientInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') findRecipes();
});
