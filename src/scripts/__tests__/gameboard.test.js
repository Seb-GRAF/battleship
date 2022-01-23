import { Gameboard } from "../gameboard";

test("creates gameboard of 10x10", () => {
  let g = Gameboard();
  expect(g.board.length && g.board[0].length).toBe(10);
});
//placeShip
test("returns false if there's already a ship", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 2, "h");
  expect(g.placeShip(0, 1, 2, "h")).toBe(false);
});
test("place horizontal ship of length 1 at pos 0", () => {
  let g = Gameboard();
  g.placeShip(0, 1, "h");
  expect(g.board[0]).toBeTruthy();
});
test("accepts horizontal ship of 4 at pos 4", () => {
  let g = Gameboard();
  g.placeShip(4, 4, "h");
  expect(g.board[4] && g.board[5] && g.board[6] && g.board[7]).toBeTruthy();
});
test("accepts horizontal ship of 4 at pos 4", () => {
  let g = Gameboard();
  g.placeShip(4, 4, "h");
  expect(g.board[4] && g.board[5] && g.board[6] && g.board[7]).toBeTruthy();
});
test("reject horizontal boat that goes over the right edge", () => {
  let g = Gameboard();
  expect(g.placeShip(1, 6, 5, "h")).toBe(false);
});
test("extend vertical ship down", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 2, "v");
  expect(g.board[0][0] && g.board[1][0]).toBeTruthy();
});
test("reject vertical ship that goes over bottom edge", () => {
  let g = Gameboard();
  expect(g.placeShip(7, 5, 4, "v")).toBe(false);
});
//receiveAttack
test("hit ship return pos with 'hit'", () => {
  let g = Gameboard();
  g.placeShip(0, 5, 5, "h");
  expect(g.receiveAttack(0, 5)).toBe("hit");
});
test("2x hit ship return pos with 'hit'", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 5, "v");
  g.receiveAttack(0, 0);
  g.receiveAttack(1, 0);
  expect(
    g.board[0][0].ship.tiles[g.board[0][0].shipPos] &&
      g.board[1][0].ship.tiles[g.board[1][0].shipPos]
  ).toBe("hit");
});
// checks if ship on board[pos] is sunk
test("sunk ship returns sunk", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 2, "v");
  g.receiveAttack(0, 0);
  g.receiveAttack(1, 0);

  expect(g.isSunk(0, 0)).toBeTruthy();
});
//checks if all ships on board are sunk
test("are all ships on the board sunk?", () => {
  let g = Gameboard();
  g.placeShip(0, 0, 2, "v");
  g.placeShip(0, 4, 2, "h");
  g.receiveAttack(0, 0);
  g.receiveAttack(1, 0);
  g.receiveAttack(0, 4);
  g.receiveAttack(0, 5);

  expect(g.areAllSunk(g.board)).toBeTruthy();
});
