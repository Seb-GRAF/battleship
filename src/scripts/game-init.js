import { Player } from "./player";

let p1 = Player("Player1");
let p2 = Player("Player2");

function populatePlayerFleet() {
  // predetermined fleet for now
  (function populateP1() {
    p1.board.placeShip(11, 2, "h");
    p1.board.placeShip(17, 2, "h");
    p1.board.placeShip(32, 3, "v");
    p1.board.placeShip(34, 1, "h");
    p1.board.placeShip(46, 2, "v");
    p1.board.placeShip(58, 1, "h");
    p1.board.placeShip(74, 1, "h");
    p1.board.placeShip(78, 1, "h");
    p1.board.placeShip(90, 3, "h");
    p1.board.placeShip(95, 4, "h");
  })();

  // predetermined fleet for now
  (function populateP2() {
    p2.board.placeShip(7, 1, "h");
    p2.board.placeShip(9, 3, "v");
    p2.board.placeShip(14, 2, "v");
    p2.board.placeShip(21, 1, "h");
    p2.board.placeShip(41, 2, "h");
    p2.board.placeShip(55, 2, "v");
    p2.board.placeShip(57, 4, "v");
    p2.board.placeShip(70, 3, "v");
    p2.board.placeShip(94, 1, "h");
    p2.board.placeShip(99, 1, "h");
  })();
}

export { populatePlayerFleet, p1, p2 };
