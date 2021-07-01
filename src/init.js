import game, { handleUserAction } from "./gamestate";
import initButtons from "./buttons";
import { TICK_RATE } from "./constants";
/**
 * Tick-rate Method for javascript
 * init() starts the requestAnimationFrame that runs once with requestAnimationFrame
 * then we create a endless closure loop calling requestAnimationFrame inside the closure function
 */
async function init() {
  // eslint-disable-next-line no-console
  console.log("starting game");
  initButtons(handleUserAction);

  let nextTimeToTick = Date.now();
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }

  nextAnimationFrame();
}

init();
