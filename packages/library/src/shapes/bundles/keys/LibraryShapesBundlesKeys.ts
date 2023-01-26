// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryTypesShapesBundles } from "../_types";
import { TypesFiguresShapesBundlesKeys } from "./TypesFiguresLibraryShapesBundlesKeys";

export const LibraryShapesBundlesKeys = ({
  bundle: bundle0,
  key,
}: TypesFiguresShapesBundlesKeys): LibraryTypesShapesBundles => {
  const { key: key0, time: t0, letters: letters0, pass: pass0 } = bundle0;
  const t1 = Date.now();
  const clearLetters = key === "Backspace" && key === key0 && t1 - t0 < 777;

  const bundle: LibraryTypesShapesBundles = {
    letters: clearLetters ? `` : letters0,
    pass: clearLetters ? false : pass0,
    time: t1,
    key,
  };

  return bundle;
};
