// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { TypesLibraryBundles } from "../_types";
import { FiguresLibraryBundlesLetters } from "./FiguresLibraryBundlesLetters";

export const LibraryBundlesLetters = ({
  bundle: bundle0,
  letters,
  pass,
}: FiguresLibraryBundlesLetters): TypesLibraryBundles => {
  const { key } = bundle0;
  const time = Date.now();
  const bundle: TypesLibraryBundles = {
    letters,
    pass,
    time,
    key,
  };

  return bundle;
};
