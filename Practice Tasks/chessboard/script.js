const chessboard = document.getElementById('chessboard');
for(let r=0; r<8; r++){
  for(let c=0; c<8; c++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor=(r+c) %2===0? 'white': 'black';
    chessboard.appendChild(square);
  }
}