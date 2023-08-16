import {Game as  loadGame, GameSavingData as saveGame, readGameSaving, writeGameSaving} from "./domain";

const game = new Game();
game.start();