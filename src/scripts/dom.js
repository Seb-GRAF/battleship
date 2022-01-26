import { initGame, p1, p2 } from "./game";
import { shipDrag } from "./drag-and-drop";
import { aiPlay, getWasHit, setWasHit, surroundingPos } from "./botAI";

// let isStartAllowed = false;
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
        if (!p1.turn.get() || !p1.board.isStartAllowed.get()) return;
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
//resets the boards
function resetBoards() {
  document.querySelector(".board-buttons").innerHTML = "";
  document.querySelector(".ships").innerHTML = "";
  document
    .querySelectorAll(".board")
    .forEach((board) => (board.innerHTML = ""));
  initGame();
}
//render buttons and add event listeners
function renderButtons(player) {
  const boardButtons = document.querySelector(".board-buttons");
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");

  boardButtons.innerHTML = `
    <button class="main-random">Random board</button>
    <button class="main-reset">Reset board</button>
 `;

  document.querySelector(".main-reset").addEventListener("click", () => {
    //prevents bug when reset during enemy's turn
    if (!player.turn.get()) return;

    //resets boards and sets blur
    resetBoards(player);
    board1.classList.remove("current-turn");
    if (player.turn.get() && player.board.hasStarted.get())
      board2.classList.add("current-turn");
  });

  // creates a random fleet for p1
  document.querySelector(".main-random").addEventListener("click", () => {
    resetBoards();
    p1.randomFleet();
    renderPlayerFleet(p1);
    p1.board.isStartAllowed.set(true);
    document.querySelector(".ships").innerHTML = "";
  });

  board1.innerHTML += `<button class="main-start">Start</button>`;
  document.querySelector(".main-start").addEventListener("click", (e) => {
    // prevent starting when not all ships are placed on the board
    if (player.board.isStartAllowed.get() === false) return;

    //blur toggles before and after start
    board1.classList.toggle("current-turn");
    // board2.classList.toggle("current-turn");
    player.board.hasStarted.set(true);

    //removes start button when game starts
    board1.removeChild(e.target);
    boardButtons.removeChild(document.querySelector(".main-random"));
  });
}
//renders p1 fleet on board
function renderPlayerFleet(player) {
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

    if (!player.board.board[pos1][pos2]) return;
    if (player.board.board[pos1][pos2] === "res") e.classList.add("res");
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
    return;
  }
  await delay(300);
  p2.isTurn(p1); // sets turn to P2

  //toggles blur for turns
  // document.getElementById("board2").classList.toggle("current-turn");
  // document.getElementById("board1").classList.toggle("current-turn");
  // await delay(700);

  // next player attack or stops game if areAllSunk()
  return p2.board.areAllSunk(p2.board.board) === true
    ? renderWin(p1)
    : aiPlay(p1, p2);
}
// renders attack for p2 (AI)
async function renderAttackP2(p1, p2, pos1, pos2) {
  let isSunk = false;
  let e = document.getElementById(`p2-row${pos1}-cell${pos2}`);
  let attack = p2.attack(p1, pos1, pos2);

  if (!attack) aiPlay(p1, p2);
  if (attack === "miss") {
    if (surroundingPos.length == 0 && getWasHit[3] == false) {
      setWasHit(false);
    }
    e.classList.add("miss");
  }
  if (attack === "hit") {
    setWasHit(true, pos1, pos2, true);
    e.classList.add("hit");
    p1.board.board[pos1][pos2].ship.domTargets.push(e);
    // if ship is sunk, add "sunk" class
    if (p1.board.board[pos1][pos2].ship.isSunk()) {
      p1.board.board[pos1][pos2].ship.domTargets.forEach((e) =>
        e.classList.add("sunk")
      );
      isSunk = true;
      if (p1.board.areAllSunk(p1.board.board) === true) return renderWin(p2);
    }
    await delay(1000);
    return aiPlay(p1, p2, isSunk);
  }

  await delay(400);
  // document.getElementById("board2").classList.toggle("current-turn");
  // document.getElementById("board1").classList.toggle("current-turn");

  p1.isTurn(p2); // gives turn to P1
}
// render win screen
function renderWin(player) {
  const winScreen = document.querySelector(".win-screen");
  const winText = document.querySelector(".win-text");
  const restartBtn = document.querySelector(".restart");
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");

  winScreen.style.display = "flex";
  winText.textContent = player.name + " won the game!";
  restartBtn.addEventListener("click", () => {
    winScreen.style.display = "none";
    resetBoards();
    board1.classList.remove("current-turn");
    if (player.turn.get() && player.board.hasStarted.get())
      board2.classList.add("current-turn");
  });
}
// renders how to play screen
function renderHowToPlay() {}
// creates a delay to be used in an async function
function delay(delayInMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInMs);
  });
}
// renders the draggable ships under the board
function createDragAndDropFleet(player) {
  renderShipSelection(1, 1);
  renderShipSelection(2, 2);
  renderShipSelection(3, 3);
  renderShipSelection(4, 4);

  function renderShipSelection(i, length) {
    const container = document.querySelector(".ships");
    const shipContainer = document.createElement("div");
    shipContainer.classList.add("ship-container");
    container.appendChild(shipContainer);

    const shipInfo = document.createElement("span");
    shipInfo.classList.add(`info-${i}`);
    shipInfo.textContent = "2x";
    shipContainer.appendChild(shipInfo);

    const ship = document.createElement("div");
    ship.classList.add("ship");
    ship.classList.add(`ship-${i}`);
    ship.setAttribute("draggable", "true");
    shipContainer.appendChild(ship);

    for (let i = 0; i < length; i++) {
      const cell = document.createElement("div");
      cell.classList.add("ship-cell");
      ship.appendChild(cell);
    }
  }

  for (let i = 1; i < 5; i++) shipDrag(player, `.ship-${i}`);
}

export {
  renderBoards,
  resetBoards,
  renderPlayerFleet,
  createDragAndDropFleet,
  renderButtons,
  renderAttackP2,
};
