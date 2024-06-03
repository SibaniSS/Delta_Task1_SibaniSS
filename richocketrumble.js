let isRedTurn = true; 
let selectedPiece = null; 
let redTime =20; 
let blueTime =20;
let timerInterval; 
let isGamePaused = false;

function updateTurnIndicator() {
    const turnIndicator = document.getElementById('tog');
    if (isRedTurn) {
        turnIndicator.textContent = "Red's Turn";
        turnIndicator.style.color = 'red';
        startTimer(redTime);
    } else {
        turnIndicator.textContent = "Blue's Turn";
        turnIndicator.style.color = 'blue';
        startTimer(blueTime);
    }
}

function startTimer(totalTime) {
    clearInterval(timerInterval);
    let time = totalTime; 
    if (isRedTurn) {
        time = redTime !== undefined ? redTime : totalTime; 
        time = blueTime !== undefined ? blueTime : totalTime; 
    }
    timerInterval = setInterval(() => {
        time--;
        if (time <= 0) {
            clearInterval(timerInterval);
            endGame(!isRedTurn);
        }
        updateTimerDisplay(time);
    }, 1000); 
}
// Function to update the timer display
function updateTimerDisplay(time) {
    const timerDisplay = document.getElementById('timer');
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to end the game
function endGame(isRedWinner) {
    clearInterval(timerInterval);
    alert(isRedWinner ? 'Red wins!' : 'Blue wins!');
    location.reload(); // Reload the game
}
function Timer() {
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timer';
    document.body.appendChild(timerDisplay);
}

// Call the function to create and add the timer display
Timer();

function pauseGame() {
    clearInterval(timerInterval); 
    isGamePaused = true;
    if (isRedTurn) {
        pausedRedTime = redTime;
    }
    else{
        pausedBlueTime=blueTime;
    }
}
function resumeGame() {
    if (isGamePaused) {
        updateTurnIndicator();
        isGamePaused = false;
        let remainingTime;
        if (isRedTurn) {
            remainingTime = 20 - pausedRedTime;
        } else {
            remainingTime =20 - pausedBlueTime;
        }
        startTimer(remainingTime);
    }
}
function resetGame() {
    clearInterval(timerInterval); 
    isGamePaused = false;
 
    redTime = 20;
    blueTime =20;
    location.reload(); 
    updateTurnIndicator(); 
}
document.getElementById('pauseBtn').addEventListener('click', pauseGame);
document.getElementById('resumeBtn').addEventListener('click', resumeGame);
document.getElementById('resetBtn').addEventListener('click', resetGame);



updateTurnIndicator();


document.getElementById('pauseBtn').addEventListener('click', pauseGame);
document.getElementById('resumeBtn').addEventListener('click', resumeGame);
document.getElementById('resetBtn').addEventListener('click', resetGame);

function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            image.innerHTML = `${image.innerText} <img class='allimg' src="${image.innerText}.png" alt="" data-rotation="0">`;
            image.style.cursor = 'pointer';
        }
    });
}
insertImage();

function coloring() {
    const color = document.querySelectorAll('.box');

    color.forEach(color => {
        let getId = color.id;
        let arr = Array.from(getId);
        arr.shift();
        let aside = parseInt(arr.pop());
        let aup = parseInt(arr.shift());
        let a = aside + aup;

        if (a % 2 === 0) {
            color.style.backgroundColor = 'black';
        } else {
            color.style.backgroundColor = 'white';
        }
    });
}
coloring();

function clearHighlights() {
    document.querySelectorAll('.box').forEach(box => {
        if (box.style.backgroundColor === 'green' || box.style.backgroundColor === 'pink') {
            box.style.backgroundColor = '';
        }
    });
}

updateTurnIndicator();

function rotateRedRichocketLeft() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('rRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation - 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateRedSemiRichocketLeft() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('rSRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation - 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateRedRichocketRight() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('rRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation + 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateRedSemiRichocketRight() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('rSRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation + 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}
function rotateBlueRichocketLeft() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('bRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation - 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateBlueSemiRichocketLeft() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('bSRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation - 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateBlueRichocketRight() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('bRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation + 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

function rotateBlueSemiRichocketRight() {
    document.querySelectorAll('.box').forEach(item => {
        let img = item.querySelector('.allimg');
        if (img && item.innerText.includes('bSRicochets')) {
            let currentRotation = img.dataset.rotation ? parseInt(img.dataset.rotation) : 0;
            let newRotation = (currentRotation + 90) % 360;
            img.dataset.rotation = newRotation;
            img.style.transform = `rotate(${newRotation}deg)`;
        }
    });
}

document.getElementById('rotateLeftBtn').addEventListener('click', function () {
    if (selectedPiece && selectedPiece.innerText.includes('rRicochets')) {
        rotateRedRichocketLeft();
    } else if (selectedPiece && selectedPiece.innerText.includes('rSRicochets')) {
        rotateRedSemiRichocketLeft();
        let rotateRedSemiRichocketElement;
        var interval=setInterval(() => {
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('rSRicochets')) {
                
                rotateRedSemiRichocketElement = item;
                
                return; 
            }
        });
        if (rotateRedSemiRichocketElement) {
            let row,col;
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('rSRicochets')) {
                const pos = item.id.substring(1);
                row = Math.floor(pos / 100);
                col = pos % 100;
            }
        });
        
 
            if (checkCollision(bullet,rotateRedSemiRichocketElement)) {
                col--;
            }
            function checkCollision(bullet,rotateRedSemiRichocketElement) {
                const bulletRect = bullet.getBoundingClientRect();
                const rRedSemirichocketRect = rotateRedSemiRichocketElement.getBoundingClientRect();
            
               
                if (
                    bulletRect.top < rRedSemirichocketRect.bottom &&
                    bulletRect.bottom >rRedSemirichocketRect.top &&
                    bulletRect.left < rRedSemirichocketRect.right &&
                    bulletRect.right > rRedSemirichocketRect.left
                ) {
                    return true;
                }
                else{
                    return false;
                }
            
              
            }
        }
        if (col<0) {
            clearInterval(interval);
            bullet.remove();
        }
      
    },400); 

        
    }
});

document.getElementById('rotateRightBtn').addEventListener('click', function () {
    if (selectedPiece && selectedPiece.innerText.includes('rRicochets')) {
        rotateRedRichocketRight();
    } else if (selectedPiece && selectedPiece.innerText.includes('rSRicochets')) {
        rotateRedSemiRichocketRight();
    }
});
document.getElementById('rotateLeftBtn').addEventListener('click', function () {
    if (selectedPiece && selectedPiece.innerText.includes('bRicochets')) {
        rotateBlueRichocketLeft();
    } else if (selectedPiece && selectedPiece.innerText.includes('bSRicochets')) {
        rotateBlueSemiRichocketLeft();
    }
});

document.getElementById('rotateRightBtn').addEventListener('click', function () {
    if (selectedPiece && selectedPiece.innerText.includes('bRicochets')) {
        rotateBlueRichocketRight();
    } else if (selectedPiece && selectedPiece.innerText.includes('bSRicochets')) {
        rotateBlueSemiRichocketRight();
    }
});


function movePiece(piece, target) {
    target.innerHTML = piece.innerHTML;
    if (target.innerText.includes("r"))
        {
            shootredCannon();
            piece.innerHTML = '';
            
        }
    else{
        shootblueCannon() ;
        piece.innerHTML = '';
    }
    
}

function endGame(isRedWinner) {
    clearInterval(timerInterval);
    alert(isRedWinner ? 'Red wins!' : 'Blue wins!');
    location.reload(); 
}
function shootredCannon() {

    let cannonRow, cannonCol;
    document.querySelectorAll('.box').forEach(item => {
        if (item.innerText.includes('rCannon')) {
            const cannonPos = item.id.substring(1);
            cannonRow = Math.floor(cannonPos / 100);
            cannonCol = cannonPos % 100;
        }
    });
    shootRedBullet(document.getElementById(`b${cannonRow * 100 + cannonCol}`));
    function shootRedBullet(cannon)
    {
    const cannonPos = cannon.id.substring(1);
    let row=3
    let col = cannonPos % 100;
    const bullet = document.createElement('div');
    bullet.className = 'bullet';
    bullet.style.position = 'absolute';
    bullet.style.width = '20px';
    bullet.style.height = '20px';
    bullet.style.borderRadius = '50%';
    bullet.style.backgroundColor = 'red';
    bullet.style.left = `${col * 75 + 20}px`;
    bullet.style.top = `${row * 75 + 10}px`; 
    document.body.appendChild(bullet);
    const interval = setInterval(() => {
        row++; 
        bullet.style.top = `${row * 75 +10}px`; 

        let blueTitanElement;
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('bTitan')) {
                blueTitanElement = item;
                return; 
            }
        });
        if (blueTitanElement) {
            
            if (checkCollision(bullet,blueTitanElement)) {
                clearInterval(interval);
                alert("Red won!! Game over");
                location.reload();
            }
        }

        
        function checkCollision(bullet,blueTitanElement) {
            const bulletRect = bullet.getBoundingClientRect();
            const btitanRect = blueTitanElement.getBoundingClientRect();
        
            // Check if the bounding boxes of the bullet and tank intersect
            if (
                bulletRect.top < btitanRect.bottom &&
                bulletRect.bottom > btitanRect.top &&
                bulletRect.left < btitanRect.right &&
                bulletRect.right > btitanRect.left
            ) {
                return true;
            }
            else{
                return false;
            }
        
          
        }
        let bluesemiElement;
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('bSRicochets')) {
                bluesemiElement= item;
                return; 
            }
        });
        if (bluesemiElement) {
            
            if (checkCollision(bullet,bluesemiElement)) {
                clearInterval(interval);
                bullet.remove()
                updateTurnIndicator();
                
            }
        }
     function checkCollision(bullet,bluesemiElement) {
    const bulletRect = bullet.getBoundingClientRect();
    const bSemiRect = bluesemiElement.getBoundingClientRect();
  
    
    if (
        bulletRect.top < bSemiRect.bottom &&
        bulletRect.bottom > bSemiRect.top &&
        bulletRect.left < bSemiRect.right &&
        bulletRect.right > bSemiRect.left
    ) {
        return true;
    }
}
      
        if (row >9) {
            clearInterval(interval);
            bullet.remove();
        }
    },400); 
}
    }
    function shootblueCannon() {
        
        let cannonRow, cannonCol;
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('bCannon')) {
                const cannonPos = item.id.substring(1);
                cannonRow = Math.floor(cannonPos / 100);
                cannonCol = cannonPos % 100;
            }
        });
        shootblueBullet(document.getElementById(`b${cannonRow * 100 + cannonCol}`));
        function shootblueBullet(cannon)
        {
        const cannonPos = cannon.id.substring(1);
      
        let row=8
        let col = cannonPos % 100;
        const bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.position = 'absolute';
        bullet.style.width = '20px';
        bullet.style.height = '20px';
        bullet.style.borderRadius = '50%';
        bullet.style.backgroundColor = 'blue';
    
        bullet.style.left = `${col * 75 + 20}px`;
        bullet.style.top = `${row * 75 + 10}px`; 
    
        document.body.appendChild(bullet);
    
        const interval = setInterval(() => {
            row--; 
    
            bullet.style.top = `${row * 75 +10}px`;
        let redTitanElement;
        document.querySelectorAll('.box').forEach(item => {
            if (item.innerText.includes('rTitan')) {
                redTitanElement = item;
                return; 
            }
        });
        if (redTitanElement) {
       
            if (checkCollision(bullet, redTitanElement)) {
                clearInterval(interval);
                alert("Blue won!! Game over");
                location.reload();
            }
        }
     function checkCollision(bullet,redtitan) {
     const bulletRect = bullet.getBoundingClientRect();
      const rtitanRect = redtitan.getBoundingClientRect();

    
      if (
        bulletRect.top < rtitanRect.bottom &&
        bulletRect.bottom > rtitanRect.top &&
        bulletRect.left < rtitanRect.right &&
        bulletRect.right > rtitanRect.left)
     {
        return true;
      }
      
      let redsemiElement;
      document.querySelectorAll('.box').forEach(item => {
          if (item.innerText.includes('rSRicochets')) {
              redsemiElement= item;
              return; // Exit the loop once the element is found
          }
      });
      if (redsemiElement) {
         
          if (checkCollision(bullet, redsemiElement)) {
              clearInterval(interval);
              bullet.remove()
              updateTurnIndicator();
              
          }
      }
   function checkCollision(bullet,redsemiElement) {
  const bulletRect = bullet.getBoundingClientRect();
  const rSemiRect = redsemiElement.getBoundingClientRect();


  if (
      bulletRect.top < rSemiRect.bottom &&
      bulletRect.bottom > rSemiRect.top &&
      bulletRect.left < rSemiRect.right &&
      bulletRect.right > rSemiRect.left
  ) {
      return true;
  }
  else{
      return false;
  }


}
    }
 
    
            // Remove the bullet iit goes out of the board
            if (row <3) {
                clearInterval(interval);
                bullet.remove();
            }
        },400); 
        }

   
  
}

function moveRedPiece(item, row, col) {
    
    clearHighlights();

  
    selectedPiece = item;

    if (item.innerText.includes('rCannon')) {
      
        const directions = [
            { row: 0,col: 1 }, 
            { row: 0,col: -1 }  
        ];

  
        directions.forEach(dir => {
            const newRow = row + dir.row;
            const newCol = col + dir.col;
            if (newRow >= 0 && newRow <= 8 && newCol >= 0 && newCol <= 8) {
                const newPosition = newRow * 100 + newCol;
                const targetBox = document.getElementById('b' + newPosition);
                if (targetBox && targetBox.innerText.length === 0) {
                    targetBox.style.backgroundColor = 'green';
                }
            }
        });
    } else {
        
        const directions = [
            { row: -1, col: 0 }, // Up
            { row: 1, col: 0 },  // Down
            { row: 0, col: 1 },  // Right
            { row: 0, col: -1 }, // Left
            { row: -1, col: -1 }, // Diagonal Up-Left
            { row: -1, col: 1 }, // Diagonal Up-Right
            { row: 1, col: -1 }, // Diagonal Down-Left
            {row: 1,col: 1} //Diagonal Down-Right
        ];

        directions.forEach(dir => {
            const newRow = row + dir.row;
            const newCol = col + dir.col;
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                const newPosition = newRow * 100 + newCol;
                const targetBox = document.getElementById('b' + newPosition);
                if (targetBox && targetBox.innerText.length === 0) {
                    targetBox.style.backgroundColor = 'green';
                }
            }
        });
    }
}

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        const piecePos = item.id.substring(1);
        const row = Math.floor(piecePos / 100);
        const col = piecePos % 100;
        if (item.innerText.includes('r') && isRedTurn) {
            moveRedPiece(item, row, col);
        } else if (item.innerText.includes('b') && !isRedTurn) {
            moveBluePiece(item, row, col);
        } else if (selectedPiece) {
         
            if ((isRedTurn && item.style.backgroundColor === 'green') || (!isRedTurn && item.style.backgroundColor === 'pink')) {
                movePiece(selectedPiece, item);
                selectedPiece = null;
                isRedTurn = !isRedTurn;
                updateTurnIndicator();
            } else {
                alert('Invalid move! You can only move to the highlighted boxes.');
            }
            clearHighlights(); 
        }
    });

});

function moveBluePiece(item, row, col) {
  
    clearHighlights();
    selectedPiece = item;

    if (item.innerText.includes('bCannon')) {
  
        const directions = [
            { row: 0, col: -1 }, // Left
            { row: 0, col: 1 }  // Right
        ];

        // Highlight valid moves for the cannon
        directions.forEach(dir => {
            const newRow = row + dir.row;
            const newCol = col + dir.col;
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                const newPosition = newRow * 100 + newCol;
                const targetBox = document.getElementById('b' + newPosition);
                if (targetBox && targetBox.innerText.length === 0) {
                    targetBox.style.backgroundColor = 'pink';
                }
            }
        });
    
    } else {
     
        const directions = [
            { row: -1, col: 0 }, // Up
            { row: 1, col: 0 },  // Down
            { row: 0, col: 1 },  // Right
            { row: 0, col: -1 }, // Left
            { row: -1, col: -1 }, // Diagonal Up-Left
            { row: -1, col: 1 }, // Diagonal Up-Right
            { row: 1, col: -1 }, // Diagonal Down-Left
            { row: 1, col: 1 } //Diagonal Down-Right
        ];

        directions.forEach(dir => {
            const newRow = row + dir.row;
            const newCol = col + dir.col;
            if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
                const newPosition = newRow * 100 + newCol;
                const targetBox = document.getElementById('b' + newPosition);
                if (targetBox&&targetBox.innerText.length === 0) {
                    targetBox.style.backgroundColor = 'pink';
                }
            }
        });
    }
}

document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', function () {
        const piecePos = item.id.substring(1);
        const row = Math.floor(piecePos / 100);
        const col = piecePos % 100;

        if (item.innerText.includes('r') && isRedTurn) {
            moveRedPiece(item, row, col);
           
        } else if (item.innerText.includes('b') && !isRedTurn) {
            moveBluePiece(item, row, col);
        } else if (selectedPiece) {
            
            if ((isRedTurn && item.style.backgroundColor === 'green') || (!isRedTurn && item.style.backgroundColor === 'pink')) {
                movePiece(selectedPiece, item);
                selectedPiece = null;
                isRedTurn = !isRedTurn;
                updateTurnIndicator();
            } else {
                alert('Invalid move! You can only move to the highlighted boxes.');
            }
            clearHighlights(); 
        }
    });
});
    