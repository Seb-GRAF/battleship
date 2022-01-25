import { renderAttackP2 } from "./dom";

let wasHit = false;
let lastHitPos = [];
function setWasHit(value, pos1, pos2) {
  wasHit = value;
  lastHitPos = [pos1, pos2];
}
function getWasHit() {
  return [wasHit, lastHitPos];
}
function registerSurroundingTiles(pos1, pos2) {}

function aiPlay(p1, p2) {
  let pos, pos1, pos2;
  if (!wasHit) {
    pos = p1.randomPos();
    pos1 = pos[0];
    pos2 = pos[1];
  } else {
    pos1 = lastHitPos[0];
    if (lastHitPos[1] !== 0) pos2 = lastHitPos[1] - 1;
    else pos2 = lastHitPos[1] + 1;
  }

  renderAttackP2(p1, p2, pos1, pos2);
}
function attackTowards(dir) {
  if (dir === "left") return [lastHitPos[0], lastHitPos[1] - 1];
  if (dir === "right") return [lastHitPos[0], lastHitPos[1] + 1];
  if (dir === "down") return [lastHitPos[0] + 1, lastHitPos[1]];
  if (dir === "up") return [lastHitPos[0] - 1, lastHitPos[1]];
}

export { aiPlay, getWasHit, setWasHit };
