// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryTypesShapesBundles } from "../_types";
import { TypesFiguresShapesBundlesLetters } from "./TypesFiguresLibraryShapesBundlesLetters";

export const LibraryShapesBundlesLetters = ({
  bundle: bundle0,
  letters,
  pass,
}: TypesFiguresShapesBundlesLetters): LibraryTypesShapesBundles => {
  const { key } = bundle0;
  const time = Date.now();
  const bundle: LibraryTypesShapesBundles = {
    letters,
    pass,
    time,
    key,
  };

  return bundle;
};
