// Copyright 2020-2022 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryTypesShapesBundlesCyclic } from "../../../../../types/shapes/bundles/cyclic/LibraryTypesShapesBundlesCyclic";
import { TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys } from "./TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys";

export const LibraryFunctionsShapesBundlesCyclicKeys = ({
  bundle: bundle0,
  key,
}: TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys): LibraryTypesShapesBundlesCyclic => {
  const { key: key0, time: t0, letters: letters0, pass: pass0 } = bundle0;
  const t1 = Date.now();
  const clearLetters = key === "Backspace" && key === key0 && t1 - t0 < 777;

  const bundle: LibraryTypesShapesBundlesCyclic = {
    letters: clearLetters ? `` : letters0,
    pass: clearLetters ? false : pass0,
    time: t1,
    key,
  };

  return bundle;
};
