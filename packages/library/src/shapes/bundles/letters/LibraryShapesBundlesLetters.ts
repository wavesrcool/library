// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { TypesShapesBundles } from "../_types";
import { FiguresLibraryShapesBundlesLetters } from "./FiguresLibraryShapesBundlesLetters";

export const LibraryShapesBundlesLetters = ({
  bundle: bundle0,
  letters,
  pass,
}: FiguresLibraryShapesBundlesLetters): TypesShapesBundles => {
  const { key } = bundle0;
  const time = Date.now();
  const bundle: TypesShapesBundles = {
    letters,
    pass,
    time,
    key,
  };

  return bundle;
};
