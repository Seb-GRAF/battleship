import { Player } from "./player";
import { renderBoards, renderPlayerFleet } from "./dom";

function initGame() {
  let p1 = Player("Player1");
  let p2 = Player("Player2");
  p1.isTurn(p2); // gives turn to P1

  p1.populateFleet(11, 2, "h");
  p1.populateFleet(17, 2, "h");
  p1.populateFleet(32, 3, "v");
  p1.populateFleet(34, 1, "h");
  p1.populateFleet(46, 2, "v");
  p1.populateFleet(58, 1, "h");
  p1.populateFleet(74, 1, "h");
  p1.populateFleet(78, 1, "h");
  p1.populateFleet(90, 3, "h");
  p1.populateFleet(95, 4, "h");

  // p2.populateFleet(7, 1, "h");
  p2.populateFleet(9, 3, "v");
  // p2.populateFleet(14, 2, "v");
  // p2.populateFleet(21, 1, "h");
  // p2.populateFleet(41, 2, "h");
  // p2.populateFleet(55, 2, "v");
  // p2.populateFleet(57, 4, "v");
  // p2.populateFleet(70, 3, "v");
  // p2.populateFleet(94, 1, "h");
  // p2.populateFleet(99, 1, "h");

  renderBoards(p1, p2);
  renderPlayerFleet(p1);
}
export { initGame };
