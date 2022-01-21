import { Ship } from "./ship";

let Gameboard = () => {
  let board = [];
  //initialize a board (which would be displayed as 10x10)
  let init = (() => {
    for (let i = 0; i < 100; i++) board.push(false);
  })();
  // place a ship on specific POS and checks that it doesn't overflow
  let placeShip = (pos, length, dir) => {
    if (board[pos]) return false;
    let ship = Ship(length);
    let shipPos = 0;

    if (dir === "h") {
      if ((pos % 10) + ship.length > 10) return false;
      for (let i = pos; i < pos + ship.length; i++) {
        board.splice(i, 1, { ship, shipPos });
        shipPos++;
      }
    }
    if (dir === "v") {
      if (pos + ship.length * 10 >= 110) return false;
      for (let i = pos; i < pos + ship.length * 10; i += 10) {
        board.splice(i, 1, { ship, shipPos });
        shipPos++;
      }
    }
  };
  // calls ship.hit() on specific POS, returns POS if ship missed
  let receiveAttack = (pos) => {
    if (!board[pos]) return pos;
    else {
      board[pos].ship.hit(board[pos].shipPos);
      return board[pos].ship.tiles[board[pos].shipPos];
    }
  };
  // calls Ship.isSunk to return if ship at pos is sunk
  let isSunk = (pos) => {
    return board[pos].ship.isSunk() === true ? true : false;
  };
  // returns true if all ships on the board sunk
  let areAllSunk = () => {
    let notSunk = false;
    board.forEach((e) => {
      if (!e) return;
      if (e.ship.isSunk() === false) notSunk = true;
    });
    return notSunk === true ? false : true;
  };
  return { board, placeShip, receiveAttack, isSunk, areAllSunk };
};

export { Gameboard };
