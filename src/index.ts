import * as sss from "sounds-some-sounds";
import cloneDeep from "lodash.clonedeep";

globalThis.sss = sss;
globalThis.cloneDeep = cloneDeep;

import "crisp-game-lib";

const title = "Roguelike";

const description = `
[hjkl] Move
`;

const characters = [
  `
 llll
l    l
l ll l
l llll
l
 llll
`,
];

let pos = vec(45, 45);
function update() {
  if (!ticks) {
  }

  if (keyboard.code.KeyH.isJustPressed) {
    pos.x -= 6;
  } else if (keyboard.code.KeyJ.isJustPressed) {
    pos.y += 6;
  } else if (keyboard.code.KeyK.isJustPressed) {
    pos.y -= 6;
  } else if (keyboard.code.KeyL.isJustPressed) {
    pos.x += 6;
  }
  char("a", pos);
}

init({
  update,
  title,
  description,
  characters,
  options: { theme: "dark", isPlayingBgm: true },
});
