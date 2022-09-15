#!/usr/bin/env node

// Copyright 2020-2022 @wavesrcool/dev authors & contributors
// SPDX-License-Identifier: MIT

import { appendFileSync, writeFileSync } from "fs";
import * as yargs from "yargs";
import glob from "glob";

export const collect = (
  src: string,
  callback: (err: Error | null, matches: string[]) => void
) => {
  glob(`${src}/**/*`, callback);
};

const scopes = ["@wavesrcool"];
const packages = ["Library"];

const argv = yargs.options({
  scope: {
    alias: "s",
    choices: scopes,
    default: "@wavesrcool",
  },
  package: {
    alias: "p",
    choices: packages,
    default: "Library",
  },
}).argv;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { s, p } = argv as any;

if (!s || !scopes.includes(s)) {
  throw new Error(`[@wavesrcool/dev]: Error. Incorrect argument for scope.`);
}

if (!p || !packages.includes(p)) {
  throw new Error(`[@wavesrcool/dev]: Error. Incorrect argument for package.`);
}

const root = p;
const LibraryFunctions = `${root}Functions`;
const LibraryFunctionsFigure = `TypesFigures${root}Functions`;
const LibraryFunctionsResolve = `TypesResolve${root}Functions`;
const LibraryTypes = `${root}Types`;
const LibraryReference = `${root}Reference`;

collect("src", (err, matches) => {
  if (err) {
    console.log(`[library] Error. ${err}`);
  } else {
    const classroot = "src/index.ts";

    const date = new Date();
    const day = `${date.getDate()}`;
    const month = `${date.getMonth()}`;
    const year = date.getFullYear();

    writeFileSync(
      classroot,
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

      if (
        !name ||
        name.includes(".txt") ||
        name.includes(".test") ||
        name.includes(".spec")
      ) {
        return;
      }

      if (
        // functions
        name.slice(0, LibraryFunctions.length) === LibraryFunctions ||
        // functions figures
        name.slice(0, LibraryFunctionsFigure.length) ===
          LibraryFunctionsFigure ||
        // functions resolve
        name.slice(0, LibraryFunctionsResolve.length) ===
          LibraryFunctionsResolve ||
        // types
        name.slice(0, LibraryTypes.length) === LibraryTypes ||
        // reference
        name.slice(0, LibraryReference.length) === LibraryReference
      ) {
        const libraryExport = `export { ${name} } from '${writable}'`;
        appendFileSync(classroot, `${libraryExport}\n`);
        return;
      }

      return;
    });
  }
});
