function initBoards(p1, p2) {
  p1.board.board.forEach((e, i) => {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `p1-cell${i}`);
    document.getElementById("board1").appendChild(cell);
  });
  p2.board.board.forEach((e, i) => {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("id", `p2-cell${i}`);
    document.getElementById("board2").appendChild(cell);
  });
}

export { initBoards };
