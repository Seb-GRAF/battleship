import { renderPlayerFleet } from "./dom";

let totalAmountShips = 0;
function shipDrag(player, shipName) {
  let amountLeft = 2;
  const ship = document.querySelector(shipName);
  const body = document.querySelector("body");
  const cells = document.querySelectorAll(".cell-p2");
  const child = ship.childNodes;
  let dragSelection;
  let offset;
  let dir = "h";

  // offset for ship selection
  if (child[0]) child[0].addEventListener("mouseenter", () => (offset = 0));
  if (child[1]) child[1].addEventListener("mouseenter", () => (offset = -1));
  if (child[2]) child[2].addEventListener("mouseenter", () => (offset = -2));
  if (child[3]) child[3].addEventListener("mouseenter", () => (offset = -3));

  // click changes ship dir
  ship.addEventListener("click", (e) => changeDir(e));

  ship.addEventListener("dragstart", (e) => {
    //shows position reserved
    for (let i = 0; i < 10; i++)
      player.board.board[i].forEach((e, j) => {
        if (e === "res")
          document
            .getElementById(`p2-row${i}-cell${j}`)
            .classList.toggle("not-available");
      });
  });
  ship.addEventListener("dragend", (e, i) => {
    // removes reserved cell display
    document
      .querySelectorAll(".not-available")
      .forEach((e) => e.classList.remove("not-available"));

    if (dragSelection === -1) return; // prevents offset error
    let pos1;
    let pos2;
    let pos = "" + dragSelection;

    // transform index string to array of pos1 and pos2
    if (dragSelection < 10) {
      pos1 = 0;
      pos2 = dragSelection;
    } else {
      pos = pos.split("");
      pos1 = pos[0] * 1;
      pos2 = pos[1] * 1;
    }

    // place ships with proper offset
    if (dir === "h") pos2 += offset;
    if (dir === "v") pos1 += offset;
    if (pos2 < 0) return;
    if (shipName === ".ship-1")
      if (player.board.placeShip(pos1, pos2, 1, dir) === false) return;
    if (shipName === ".ship-2")
      if (player.board.placeShip(pos1, pos2, 2, dir) === false) return;
    if (shipName === ".ship-3")
      if (player.board.placeShip(pos1, pos2, 3, dir) === false) return;
    if (shipName === ".ship-4")
      if (player.board.placeShip(pos1, pos2, 4, dir) === false) return;
    renderPlayerFleet(player); // renders fleet

    //removes ship div after 2 have been placed
    amountLeft -= 1;
    totalAmountShips++;
    if (totalAmountShips === 8) player.board.isStartAllowed.set(true);
    console.log(player.board.isStartAllowed.get());
    ship.parentNode.firstChild.textContent = amountLeft + "x";
    if (amountLeft === 0) ship.parentNode.style.display = "none";
  });

  //event listeners for drag on cells
  cells.forEach((e, i) => {
    e.addEventListener("dragover", (e) => {
      e.preventDefault();
      dragSelection = i;
    });
  });

  // removes index if drop outside of cells
  body.addEventListener("dragenter", () => {
    dragSelection = -1;
  });

  //changes direction of ship on click
  function changeDir(e) {
    if (dir === "h") {
      dir = "v";
      e.target.parentNode.classList.toggle("rotated");
    } else {
      dir = "h";
      e.target.parentNode.classList.toggle("rotated");
    }
  }
}

export { shipDrag, totalAmountShips };
