#!/usr/bin/env node

// Copyright 2020-2023 @wavesrcool/dev authors & contributors
// SPDX-License-Identifier: MIT

import { exec } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const data = `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
yarn lint-staged --allow-empty`;

const main = () => {
  const directory = join(process.cwd(), ".husky");
  mkdirSync(directory, { recursive: true });
  const filename = join(directory, "pre-commit");
  writeFileSync(filename, data);
  exec(`chmod +x ${filename}`);
  exec(`yarn husky install`);
};

main();
