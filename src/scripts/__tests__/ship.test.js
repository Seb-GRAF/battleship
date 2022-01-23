import { Ship } from "../ship";

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
  ship1.hit(2);
  expect(ship1.isSunk).toBeTruthy();
});
