import { renderAttackP2 } from "./dom";

let wasHit = () => {
  let hit = false;
  function set(value) {
    hit = value;
  }
  function get() {
    return hit;
  }
};

let firstHitPos = -1;
let lastHitPos;

function aiPlay(p1, p2) {
  let pos1, pos2;

  renderAttackP2(p1, p2, pos1, pos2);
}
function attackTowards(dir) {
  if (dir === "left") return [lastHitPos[0], lastHitPos[1] - 1];
  if (dir === "right") return [lastHitPos[0], lastHitPos[1] + 1];
  if (dir === "down") return [lastHitPos[0] + 1, lastHitPos[1]];
  if (dir === "up") return [lastHitPos[0] - 1, lastHitPos[1]];
}

export { aiPlay, wasHit };