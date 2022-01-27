import { renderAttackP2 } from "./dom";

let wasHit = false;
let status = false;
let lastHitPos = [];
let firstHitPos = [];
let secondHitPos = [];
let surroundingPos = [];
let attackDirection;

function setWasHit(value, stat, pos1, pos2) {
  wasHit = value;
  if (stat !== undefined) status = stat;
  if (pos1 !== undefined) lastHitPos = [pos1, pos2];
  if (firstHitPos.length == 0 && pos1 !== undefined) firstHitPos = [pos1, pos2];
  else if (
    firstHitPos.length !== 0 &&
    secondHitPos.length == 0 &&
    pos1 !== undefined
  )
    secondHitPos = [pos1, pos2];
  console.log({ firstHitPos, secondHitPos, lastHitPos, wasHit, status });
  console.log("===================");
  console.log("");
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

function aiPlay(repeat, p1, p2, isSunk) {
  let pos, pos1, pos2;
  if (isSunk === true) {
    lastHitPos = [];
    firstHitPos = [];
    secondHitPos = [];
    surroundingPos = [];
    wasHit = false;
    status = false;
    attackDirection = "";
  }
  if (!status && !wasHit) {
    pos = p1.randomPos();
    console.log("attacking random");

    return renderAttackP2(p1, p2, pos[0], pos[1]);
  } else if (secondHitPos.length !== 0 && wasHit && !repeat) {
    let newPos;
    if (firstHitPos[0] == secondHitPos[0] - 1) newPos = attackTowards("down");
    if (firstHitPos[0] == secondHitPos[0] + 1) newPos = attackTowards("up");
    if (firstHitPos[1] == secondHitPos[1] - 1) newPos = attackTowards("right");
    if (firstHitPos[1] == secondHitPos[1] + 1) newPos = attackTowards("left");
    console.log("2 in a row, now attacking direction: " + newPos);
    if (newPos[0] >= 0 && newPos[0] <= 9 && newPos[1] >= 0 && newPos[1] <= 9)
      return renderAttackP2(p1, p2, newPos[0], newPos[1]);
  } else if (secondHitPos.length !== 0 && status && !wasHit) {
    lastHitPos = firstHitPos;
    secondHitPos = [];
    let newPos;
    if (attackDirection === "up") newPos = attackTowards("down");
    if (attackDirection === "down") newPos = attackTowards("up");
    if (attackDirection === "right") newPos = attackTowards("left");
    if (attackDirection === "left") newPos = attackTowards("right");
    if (newPos[0] >= 0 && newPos[0] <= 9 && newPos[1] >= 0 && newPos[1] <= 9)
      console.log("new pos = first hit pos, attacking opposite now");
    return renderAttackP2(p1, p2, newPos[0], newPos[1]);
  } else if (status) {
    if (surroundingPos.length == 0)
      registerSurroundingPos(lastHitPos[0], lastHitPos[1]);
    if (surroundingPos.length == 0 && status == true)
      registerSurroundingPos(firstHitPos[0], firstHitPos[1]);
    let newPos = surroundingPos.pop();
    console.log(surroundingPos);
    console.log("attacking surrounding");
    return renderAttackP2(p1, p2, newPos[0], newPos[1]);
  }
}
// get pos of attack based on direction
function attackTowards(dir) {
  if (dir === "left") {
    attackDirection = "left";
    return [lastHitPos[0], lastHitPos[1] - 1];
  }
  if (dir === "right") {
    attackDirection = "right";
    return [lastHitPos[0], lastHitPos[1] + 1];
  }
  if (dir === "down") {
    attackDirection = "down";
    return [lastHitPos[0] + 1, lastHitPos[1]];
  }
  if (dir === "up") {
    attackDirection = "up";
    return [lastHitPos[0] - 1, lastHitPos[1]];
  }
}

export { aiPlay, getWasHit, setWasHit, lastHitPos, surroundingPos };
