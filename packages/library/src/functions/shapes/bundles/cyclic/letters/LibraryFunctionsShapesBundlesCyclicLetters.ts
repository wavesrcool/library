// Copyright 2020-2022 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryTypesShapesBundlesCyclic } from "../../../../../types/shapes/bundles/cyclic/LibraryTypesShapesBundlesCyclic";
import { TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters } from "./TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters";

export const LibraryFunctionsShapesBundlesCyclicLetters = ({
  bundle: bundle0,
  letters,
  pass,
}: TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters): LibraryTypesShapesBundlesCyclic => {
  const { key } = bundle0;
  const time = Date.now();
  const bundle: LibraryTypesShapesBundlesCyclic = {
    letters,
    pass,
    time,
    key,
  };

  return bundle;
};
