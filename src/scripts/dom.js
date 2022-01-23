import { initGame } from "./game";

function renderBoards(p1, p2) {
  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p1");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    p1.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);

      // event listener for p1 clicks on p2 board
      cell.addEventListener("click", (e) => {
        if (!p1.turn.get()) return;
        renderAttackP1(e, i, j, p1, p2);
      });
    });
  }

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.classList.add("row-p2");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("board2").appendChild(row);

    p2.board.board[i].forEach((e, j) => {
      let cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }
}

function resetBoards() {
  document.querySelectorAll(".board").forEach((board) => {
    board.innerHTML = "";
  });
  initGame();
}
//renders p1 fleet on board
function renderPlayerFleet(p1) {
  document.querySelectorAll(".cell-p2").forEach((e, i) => {
    let pos1, pos2;
    let pos = "" + i;

    // transform index string to array of pos1 and pos2
    if (i < 10) {
      pos1 = 0;
      pos2 = i;
    } else {
      pos = pos.split("");
      pos1 = pos[0];
      pos2 = pos[1];
    }

    if (!p1.board.board[pos1][pos2]) return;
    if (p1.board.board[pos1][pos2] === "res") e.classList.add("res");
    else e.classList.add("fleet");
  });
}
// renders attacks for p1
async function renderAttackP1(e, pos1, pos2, p1, p2) {
  let attack = p1.attack(p2, pos1, pos2);
  if (!attack) return; //attacking the same tile doesn't pass turn
  if (attack === "miss") e.target.classList.add("miss");
  if (attack === "hit") {
    e.target.classList.add("hit");
    p2.board.board[pos1][pos2].ship.domTargets.push(e.target);

    //adds "sunk" class to all tiles of sunk ship
    if (p2.board.board[pos1][pos2].ship.isSunk())
      p2.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
  }
  p2.isTurn(p1); // sets turn to P2

  await delay(500); //delay of 500ms for better ux

  // next player attack or stops game if areAllSunk()
  return p2.board.areAllSunk(p2.board.board) === true
    ? renderWin(p1)
    : renderAttackP2(p1, p2);
}
// renders attack for p2 (AI)
function renderAttackP2(p1, p2) {
  let pos = p2.randomPos();
  let pos1 = pos[0];
  let pos2 = pos[1];
  let e = document.getElementById(`p2-row${pos1}-cell${pos2}`);
  let attack = p2.attack(p1, pos1, pos2);

  if (!attack) renderAttackP2(p1, p2);
  if (attack === "miss") e.classList.add("miss");
  if (attack === "hit") {
    e.classList.add("hit");
    p1.board.board[pos1][pos2].ship.domTargets.push(e);

    if (p1.board.board[pos1][pos2].ship.isSunk())
      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
  }
  p1.isTurn(p2); // gives turn to P1
}
// render win screen
function renderWin(player) {
  let winScreen = document.querySelector(".win-screen");
  let winText = document.querySelector(".win-text");
  let restartBtn = document.querySelector(".restart");

  winScreen.style.display = "flex";
  winText.textContent = player.name + " won the game!";
  restartBtn.addEventListener("click", () => {
    winScreen.style.display = "none";
    resetBoards();
  });
}
// creates a delay to be used in an async function
function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}

export { renderBoards, resetBoards, renderPlayerFleet };
