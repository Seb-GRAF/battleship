import "./styles/index.scss";
import "./styles/boards.scss";
import { Ship } from "./scripts/ship";
import { Gameboard } from "./scripts/gameboard";
import { Player } from "./scripts/player";
import { populatePlayerFleet, p1, p2 } from "./scripts/game-init";
import { initBoards } from "./scripts/dom";

populatePlayerFleet();
initBoards(p1, p2);

export { Ship, Gameboard, Player };
