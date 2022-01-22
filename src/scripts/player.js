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
  let attack = (player, pos) => {
    return player.board.receiveAttack(pos);
  };
  // calls an random attack on target
  let randomPos = () => {
    return (randomPos = Math.floor(Math.random() * 100));
  };
  // will transform this function into a drag and drop for ship placement
  let populateFleet = (pos, length, direction) => {
    board.placeShip(pos, length, direction);
  };
  return {
    name,
    board,
    attack,
    randomPos,
    populateFleet,
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
