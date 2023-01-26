#!/usr/bin/env node

// Copyright 2020-2023 @wavesrcool/dev authors & contributors
// SPDX-License-Identifier: MIT

import { appendFileSync, writeFileSync } from "fs";
import glob from "glob";

const pkg = process.argv[2];
const pkglib = process.argv[3];

if (!(typeof pkg === "string")) {
  if (pkg[0] !== `@`) {
    const message = `[compose-library]: Error. Not a valid "pkg" declaration in argv[2]. This script uses "@" namespaced packages.`;
    throw new Error(message);
  }
  const message = `[compose-library]: Error. Not a valid "pkg" declaration in argv[2]. Received: ${pkg}`;
  throw new Error(message);
}

if (!(typeof pkglib === "string")) {
  const message = `[compose-library]: Error. Not a valid "pkglib" declaration in argv[3]. Received: ${pkglib}`;
  throw new Error(message);
}

const writeCopyrights = (
  pkg: string,
  pkglib: string,
  lic?: "MIT" | "BSD-2-Clause" | "BSD-3-Clause"
): string => {
  return `// Copyright 2020-2023 @${pkg}/${pkglib} authors & contributors
    // SPDX-License-Identifier: ${lic || `UNLICENSED`}`;
};

export const main = (
  src: string,
  callback: (err: Error | null, matches: string[]) => void
) => {
  glob(`${src}/**/*`, callback);
};

main("src", (err, matches) => {
  if (err) {
    console.log(`[compose-library] Error. ${err}`);
  } else {
    const writefile = `src/index.ts`;

    const date = new Date();
    const day = `${date.getDate()}`;
    const month = `${date.getMonth()}`;
    const year = date.getFullYear();

    writeFileSync(
      writefile,
      `${writeCopyrights(pkg, pkglib)}

/**
 * * ${pkg.replace(`@`, ``)} documentation
 *
 * @collection ${pkg}/${pkglib}
 * @created ${month} ${day} ${year}
 *
 */
`
    );

    type TypeWritableExport = {
      mod: string;
      writable: string;
    };
    let writableExportsList: TypeWritableExport[] = [];

    let exportMapPrimary: TypeWritableExport;

    matches.map((l) => {
      const line = String(l);
      const filename = line.split("/").pop() || "";
      const relativeLine = line.replace("src/", "./");

      let writable: string;
      if (relativeLine.includes(".tsx")) {
        writable = relativeLine.replace(".tsx", "");
      } else {
        writable = relativeLine.replace(".ts", "");
      }

      const split = writable.split("/");
      const name = split.pop() || "";

      if (
        filename === "index.ts" ||
        filename === "index.tsx" ||
        filename.includes(".test") ||
        filename.includes(".spec") ||
        !(filename.includes(".ts") || filename.includes(".tsx")) ||
        filename.includes(".d.ts")
      ) {
        return;
      }

      if (filename && name) {
        const mod = name;
        exportMapPrimary = { mod, writable };
        writableExportsList = [exportMapPrimary];
      } else {
        return;
      }

      writableExportsList.map((e) => {
        const libraryExport = `export { ${e.mod} } from "${e.writable}";`;
        appendFileSync(writefile, `${libraryExport}\n`);
        return;
      });
      return;
    });
  }
});
