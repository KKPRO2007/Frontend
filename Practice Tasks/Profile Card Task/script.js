const card = document.getElementById('profile-card');
const nameEl = document.getElementById('user-name');
const roleEl = document.getElementById('user-role');
const bioEl = document.getElementById('user-bio');
const imgEl = document.getElementById('avatar');
const skillsBox = document.getElementById('skills');
const detailsEl = document.getElementById('details');
const allThemeBtns = document.querySelectorAll('.theme-btn');
const imgError = document.getElementById('img-error');

document.getElementById('input-name').addEventListener('input', e =>
  nameEl.textContent = e.target.value);
document.getElementById('input-role').addEventListener('input', e =>
  roleEl.textContent = e.target.value);
document.getElementById('input-bio').addEventListener('input', e =>
  bioEl.textContent = e.target.value);

document.getElementById('btn-img').onclick = function () {
  let url = document.getElementById('input-img').value.trim();
  setProfileImage(url);
};
document.getElementById('btn-anime').onclick = function () {
  const animeImages = [
    "https://wallpapers.com/images/hd/spy-x-family-anya-forger-anime-profile-picture-6efquhtp0hqj0d7k.jpg",
    "https://wallpapers.com/images/hd/sweet-anime-girl-blue-eyes-pink-cute-smile-j5g9bqne7lvv18ut.jpg",
    "https://wallpapers.com/images/hd/cute-anime-girl-closeup-0gzsr8yz9bacc0m8.jpg"
  ];
  let imgUrl = animeImages[Math.floor(Math.random() * animeImages.length)];
  setProfileImage(imgUrl);
};
function setProfileImage(url) {
  if (!url) url = "https://placehold.co/80x80/222/fff?text=IMG";
  imgEl.onerror = function () {
    imgEl.src = "https://placehold.co/80x80/222/fff?text=IMG";
    imgError.style.display = "";
  };
  imgEl.onload = function () {
    imgError.style.display = "none";
  };
  imgEl.src = url;
}
allThemeBtns.forEach(btn => btn.onclick = function () {
  card.style.background = btn.dataset.color;
  allThemeBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
});
document.getElementById('btn-add-skill').onclick = function () {
  let skill = document.getElementById('input-skill').value.trim();
  if (!skill) return;
  let chip = document.createElement('div');
  chip.className = 'skill';
  chip.textContent = skill;
  let x = document.createElement('button');
  x.className = 'remove-x';
  x.textContent = '×';
  chip.appendChild(x);
  skillsBox.appendChild(chip);
};
document.getElementById('btn-remove-skill').onclick = function () {
  if (skillsBox.lastChild) skillsBox.removeChild(skillsBox.lastChild);
};
skillsBox.onclick = function (e) {
  if (e.target.classList.contains('remove-x')) {
    e.target.parentElement.remove();
  }
};
document.getElementById('btn-toggle-details').onclick = function () {
  detailsEl.classList.toggle('hidden');
};
