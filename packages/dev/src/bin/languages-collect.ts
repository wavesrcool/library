#!/usr/bin/env node

// Copyright 2020-2022 @wavesrcool/dev authors & contributors
// SPDX-License-Identifier: MIT

import { appendFileSync, writeFileSync } from "fs";
import glob from "glob";

export const main = (
  src: string,
  callback: (err: Error | null, matches: string[]) => void
) => {
  glob(`${src}/**/*`, callback);
};

main("src", (err, matches) => {
  if (err) {
    console.log(`[library] Error. ${err}`);
  } else {
    let message: string;

    if (!matches || !matches.length) {
      message = `[wavesrcool-dev] Error. No matches.`;
      throw new Error(message);
    }

    const writeindex = "src/index.ts";

    const date = new Date();
    const day = `${date.getDate()}`;
    const month = `${date.getMonth()}`;
    const year = date.getFullYear();

    console.log(matches, `matches`);

    writeFileSync(
      writeindex,
      `// Copyright 2020-2022 @wavesrcool/library authors & contributors
    // SPDX-License-Identifier: MIT
    
    /**
     * * Library Documentation
     *
     * @collection @wavesrcool/library
     * @created ${month} ${day} ${year}
     *
     */
  `
    );

    matches.map((l) => {
      const line = String(l);
      const writable = line.replace("src/", "./").replace(".ts", "");
      const split = writable.split("/");
      const name = split.pop() || "";

      if (!name || !name.includes(".json") || name.includes(".spec")) {
        return;
      }

      console.log(`writing: ${name}`);

      const exportName = name;
      //const exportAs = name.slice(`${`en`}`.length);

      const libraryExport = `export { ${exportName} as ${exportName}0 } from "${writable}";`;
      appendFileSync(writeindex, `${libraryExport}\n`);
    });
  }
});
