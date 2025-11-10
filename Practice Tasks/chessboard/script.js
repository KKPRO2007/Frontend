const chessboard = document.getElementById('chessboard');

for (let i = 0; i < 64; i++) {
  const div = document.createElement('div');
  div.className = 'square';
  div.style.backgroundColor = (Math.floor(i / 8) + i) % 2 === 0 ? '#f0d9b5' : '#593f2aff';
  chessboard.appendChild(div);
}
