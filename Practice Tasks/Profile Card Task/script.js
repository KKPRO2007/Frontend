const form = document.getElementById('profileForm');
const cardContainer = document.getElementById('cardContainer');
form.addEventListener('submit', (e) => {
e.preventDefault();

const company = document.getElementById('company').value.trim();
const role = document.getElementById('role').value.trim();
const bio = document.getElementById('bio').value.trim();
const image = document.getElementById('image').value.trim();
const card = document.createElement('div');

card.className = 'profile-card';
card.innerHTML = `
<img src="${image}" alt="Profile Image">
<h3>${company}</h3>
<h4>${role}</h4>
<p>${bio}</p> `;

cardContainer.innerHTML = '';
cardContainer.appendChild(card);
});