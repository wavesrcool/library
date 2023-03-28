// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { TypesLibraryBundles } from "../_types";
import { FiguresLibraryBundlesKeys } from "./FiguresLibraryBundlesKeys";

export const LibraryBundlesKeys = ({
  bundle: bundle0,
  key,
}: FiguresLibraryBundlesKeys): TypesLibraryBundles => {
  const { key: key0, time: t0, letters: letters0, pass: pass0 } = bundle0;
  const t1 = Date.now();
  const clearLetters = key === "Backspace" && key === key0 && t1 - t0 < 777;

  const bundle: TypesLibraryBundles = {
    letters: clearLetters ? `` : letters0,
    pass: clearLetters ? false : pass0,
    time: t1,
    key,
  };

  return bundle;
};
