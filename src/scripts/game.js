import { Player } from "./player";
import { renderBoards, renderPlayerFleet } from "./dom";

function initGame() {
  let p1 = Player("Player1");
  let p2 = Player("Player2");
  p1.isTurn(p2); // gives turn to P1

  p1.randomFleet();
  p2.randomFleet();
  console.log(p1.board.board);
  console.log(p2.board.board);

  renderBoards(p1, p2);
  renderPlayerFleet(p1);
}
export { initGame };
