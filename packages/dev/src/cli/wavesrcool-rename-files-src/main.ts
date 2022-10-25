#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */

import fs from "fs";
import glob from "glob";
import path from "path";

const main = (find: string, replace: string) => {
  const globpath = path.join(
    process.cwd(),
    "src",
    "**",
    "*.{ts,tsx,json,graphql}"
  );
  const files = glob.sync(globpath);

  if (!files || !files.length) {
    const message = `!files`;
    throw new Error(message);
  }

  files.map((filepath00: any) => {
    const filename0 = filepath00.split("/").pop();
    const filepath0 = filepath00.split("/").slice(0, -1).join("/");

    if (!filename0 || filename0 === "index.ts") {
      return;
    }

    if (filename0.includes(find)) {
      const filename1 = filename0.replace(find, replace);
      const filepath1 = path.join(filepath0, filename1);
      fs.renameSync(filepath00, filepath1);
    }
    return;
  });
};

const find = process.argv[2];
let replace = process.argv[3];

if (!(typeof find === "string")) {
  const message = `[wavesrcool-rename-files-src]: Error. Not a valid find declaration in argv[2]. Received: "${find}".`;
  throw new Error(message);
}

if (!(typeof replace === "string")) {
  if (typeof find === "string") {
    replace = "";
  }
  const message = `[wavesrcool-rename-files-src]: Error. Not a valid replace declaration in argv[3]. Received: "${replace}".`;
  throw new Error(message);
}

main(find, replace);
