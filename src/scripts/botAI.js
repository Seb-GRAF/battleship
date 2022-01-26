import { renderAttackP2 } from "./dom";

let wasHit = false;
let status = false;
let lastHitPos = [];
let firstHitPos = [];
let surroundingPos = [];
function setWasHit(value, pos1, pos2, stat) {
  wasHit = value;
  lastHitPos = [pos1, pos2];
  status = stat;
  if (firstHitPos.length == 0) firstHitPos = [pos1, pos2];
}
function getWasHit() {
  return [wasHit, lastHitPos, status];
}
function registerSurroundingPos(pos1, pos2) {
  surroundingPos = [];
  if (pos2 !== 0) surroundingPos.push([pos1, pos2 - 1]);
  if (pos2 !== 9) surroundingPos.push([pos1, pos2 + 1]);
  if (pos1 !== 0) surroundingPos.push([pos1 - 1, pos2]);
  if (pos1 !== 9) surroundingPos.push([pos1 + 1, pos2]);
  return surroundingPos;
}

function aiPlay(p1, p2, isSunk) {
  let pos, pos1, pos2;
  if (isSunk == true) {
    firstHitPos = [];
    wasHit = false;
    status = false;
    surroundingPos = [];
  }
  if (!wasHit && surroundingPos.length == 0 && status == false) {
    pos = p1.randomPos();
    pos1 = pos[0];
    pos2 = pos[1];
  } else {
    if (surroundingPos.length == 0)
      registerSurroundingPos(lastHitPos[0], lastHitPos[1]);
    if (surroundingPos.length == 0 && status == true)
      registerSurroundingPos(firstHitPos[0], firstHitPos[1]);
    let newPos = surroundingPos.pop();
    pos1 = newPos[0];
    pos2 = newPos[1];
  }

  renderAttackP2(p1, p2, pos1, pos2);
}
// function attackTowards(dir) {
//   if (dir === "left") return [lastHitPos[0], lastHitPos[1] - 1];
//   if (dir === "right") return [lastHitPos[0], lastHitPos[1] + 1];
//   if (dir === "down") return [lastHitPos[0] + 1, lastHitPos[1]];
//   if (dir === "up") return [lastHitPos[0] - 1, lastHitPos[1]];
// }

export { aiPlay, getWasHit, setWasHit, lastHitPos, surroundingPos };
