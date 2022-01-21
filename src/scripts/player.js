import { Gameboard } from "./gameboard";

const Player = (n) => {
  const name = n;
  let board = Gameboard();
  // calls an attack on target
  let attack = (player, pos) => {
    player.board.receiveAttack(pos);
  };
  // calls an random attack on target
  let randomAttack = (player) => {
    let randomPos = Math.floor(Math.random() * 100);
    player.board.receiveAttack(randomPos);
  };
  return { name, board, attack, randomAttack };
};

export { Player };
