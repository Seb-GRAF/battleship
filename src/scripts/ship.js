let Ship = (l) => {
  //properties
  const length = l;
  let tiles = [...Array(l).keys()]; //creates an array to represent each ship tiles

  // replace hit pos by "hit"
  let hit = (pos) => {
    if (tiles[pos] == "hit") return false;
    tiles.splice(pos, 1, "hit");
    return isSunk();
  };
  // checks if ship is sunk
  let isSunk = () => {
    let stillAlive = false;
    tiles.forEach((e) =>
      e !== "hit" ? (stillAlive = true) : (stillAlive = false)
    );
    return stillAlive === true ? false : true;
  };

  return { tiles, length, hit, isSunk };
};

export { Ship };
