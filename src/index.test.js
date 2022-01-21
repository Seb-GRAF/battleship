import { Ship, Gameboard } from "./index";

// ===== ship factory tests =====

test("has length property", () => {
  let ship1 = Ship(4);
  expect(ship1.length).toBe(4);
});
test("creates ship tiles", () => {
  let ship1 = Ship(4);
  expect(ship1.tiles).toEqual([0, 1, 2, 3]);
});
test("hits the ship", () => {
  let ship1 = Ship(4);
  ship1.hit(0);
  expect(ship1.tiles[0]).toEqual("hit");
});
test("sinks the ship", () => {
  let ship1 = Ship(3);
  ship1.hit(0);
  ship1.hit(1);
  expect(ship1.hit(2)).toBeTruthy();
});

// === board factory tests === //

test("creates gameboard of 100", () => {
  let g = Gameboard();
  expect(g.board.length).toBe(100);
});
//placeShip
test("returns false if there's already a ship", () => {
  let g = Gameboard();
  g.placeShip(0, 2, "h");
  console.log(g.board);
  expect(g.placeShip(1)).toBe(false);
});
test("place horizontal ship of length 1 at pos 0", () => {
  let g = Gameboard();
  g.placeShip(0, 1, "h");
  expect(g.board[0]).toBeTruthy();
});
test("horizontal ship of length 1 doesn't overlap on other board tiles at pos 0", () => {
  let g = Gameboard();
  g.placeShip(0, 1, "h");
  expect(g.board[1]).toBe(false);
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
  expect(g.placeShip(16, 5, "h")).toBe(false);
});
test("extend vertical ship down (horizontal works)", () => {
  let g = Gameboard();
  g.placeShip(0, 2, "v");
  expect(g.board[0] && g.board[10]).toBeTruthy();
});
test("reject vertical ship that goes over bottom edge", () => {
  let g = Gameboard();
  expect(g.placeShip(75, 4, "v")).toBe(false);
});
//receiveAttack
test("returns ship pos if no ship present", () => {
  let g = Gameboard();
  g.placeShip(6, 5, "h");
  expect(g.receiveAttack(5)).toBe(5);
});
test("hit ship return pos with 'hit'", () => {
  let g = Gameboard();
  g.placeShip(5, 5, "h");
  expect(g.receiveAttack(5)).toBe("hit");
});
test("2x hit ship return pos with 'hit'", () => {
  let g = Gameboard();
  g.placeShip(0, 5, "v");
  g.receiveAttack(0);
  g.receiveAttack(10);
  expect(
    g.board[0].ship.tiles[g.board[0].shipPos] &&
      g.board[10].ship.tiles[g.board[10].shipPos]
  ).toBe("hit");
});
// checks if ship on board[pos] is sunk
test("sunk ship returns sunk", () => {
  let g = Gameboard();
  g.placeShip(0, 2, "v");
  g.receiveAttack(0);
  g.receiveAttack(10);

  expect(g.isSunk(0)).toBeTruthy();
});
//checks if all ships on board are sunk
test("are all ships on the board sunk?", () => {
  let g = Gameboard();
  g.placeShip(0, 2, "v");
  g.placeShip(4, 2, "h");
  g.receiveAttack(0);
  g.receiveAttack(10);
  g.receiveAttack(4);
  g.receiveAttack(5);

  expect(g.areAllSunk()).toBeTruthy();
});

// =========== Players tests ==============

test("are all ships on the board sunk?", () => {
  expect(g.areAllSunk()).toBeTruthy();
});
