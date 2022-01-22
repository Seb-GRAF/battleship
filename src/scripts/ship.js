let Ship = (l) => {
  //properties
  const length = l;
  let tiles = [...Array(l).keys()];
  let domTargets = [];

  // replace hit pos by "hit"
  let hit = (pos) => {
    if (tiles[pos] == "hit") return false;
    tiles.splice(pos, 1, "hit");
  };
  // checks if ship is sunk
  let isSunk = () => {
    let stillAlive = false;
    tiles.forEach((e) => {
      if (e !== "hit") stillAlive = true;
    });
    return stillAlive === true ? false : true;
  };

  return { tiles, length, hit, isSunk, domTargets };
};

export { Ship };
