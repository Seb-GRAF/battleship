import { Gameboard } from "./gameboard";

const Player = (n) => {
  const name = n;
  let board = Gameboard();
  let turn = false;

  // sets player turn and removes enemy's turn
  let isTurn = (enemy) => {
    turn = true;
    enemy.turn.set(false);
  };
  // calls an attack on target
  let attack = (player, pos1, pos2) => {
    return player.board.receiveAttack(pos1, pos2);
  };
  // calls an random attack on target
  let randomPos = () => {
    let pos1 = Math.floor(Math.random() * 10);
    let pos2 = Math.floor(Math.random() * 10);
    return [pos1, pos2];
  };
  // creates a ship with random pos and orientation
  let randomShip = (length) => {
    let pos1 = Math.floor(Math.random() * 10);
    let pos2 = Math.floor(Math.random() * 10);
    let dir = Math.round(Math.random());

    if (dir === 0) {
      dir = "h";
      if (board.placeShip(pos1, pos2, length, dir) == false) return false;
    }

    if (dir === 1) {
      dir = "v";
      if (board.placeShip(pos1, pos2, length, dir) == false) return false;
    }
  };
  //creates a random fleet of 8 ships
  let randomFleet = () => {
    // create 2 ships of length 1
    for (let i = 0; i < 2; ) {
      if (randomShip(1) == false) continue;
      i++;
    }
    // create 2 ships of length 2
    for (let i = 0; i < 2; ) {
      if (randomShip(2) == false) continue;
      i++;
    }
    // create 2 ships of length 3
    for (let i = 0; i < 2; ) {
      if (randomShip(3) == false) continue;
      i++;
    }
    // create 1 ship of length 4
    for (let i = 0; i < 2; ) {
      if (randomShip(4) == false) continue;
      i++;
    }
    board.isStartAllowed.set(true);
  };

  return {
    name,
    board,
    attack,
    randomFleet,
    randomPos,
    turn: {
      get: function () {
        return turn;
      },
      set: function (value) {
        turn = value;
      },
    },
    isTurn,
  };
};

export { Player };
