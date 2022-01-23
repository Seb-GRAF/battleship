import { Player } from "./player";
import { totalAmountShips } from "./drag-and-drop";
import {
  renderBoards,
  resetBoards,
  renderPlayerFleet,
  createDragAndDropFleet,
} from "./dom";

function initGame() {
  let areShipsRandom = false;
  let p1 = Player("Player1");
  let p2 = Player("Player2");
  p1.isTurn(p2); // gives turn to P1
  //   p1.randomFleet();
  p2.randomFleet();

  renderBoards(p1, p2);
  renderPlayerFleet(p1);

  document.querySelector(".main-reset").addEventListener("click", () => {
    resetBoards();
    p1 = Player("Player1");
    renderBoards(p1, p2);
    createDragAndDropFleet(p1);
  });
  document.querySelector(".main-random").addEventListener("click", () => {
    resetBoards();
    p1 = Player("Player1");
    renderBoards(p1, p2);
    p1.randomFleet();
    renderPlayerFleet(p1);
    areShipsRandom = true;
    console.log(areShipsRandom);
  });
  document.querySelector(".main-start").addEventListener("click", (e) => {
    console.log(areShipsRandom);
    if (totalAmountShips !== 8 && areShipsRandom !== true) return;
    const board = document.getElementById("board1");
    board.classList.toggle("started");
    board.removeChild(e.target);
  });

  //creates drag and drop fleet
  createDragAndDropFleet(p1);
}
export { initGame };
