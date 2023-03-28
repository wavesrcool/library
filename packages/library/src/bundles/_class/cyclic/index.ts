// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { FiguresLibraryBundlesKeys } from "../../keys/FiguresLibraryBundlesKeys";
import { LibraryBundlesKeys } from "../../keys/LibraryBundlesKeys";
import { FiguresLibraryBundlesLetters } from "../../letters/FiguresLibraryBundlesLetters";
import { LibraryBundlesLetters } from "../../letters/LibraryBundlesLetters";

export class ClassLibraryBundlesCyclic {
  public letters(
    f: FiguresLibraryBundlesLetters
  ): ReturnType<typeof LibraryBundlesLetters> {
    const bundle = LibraryBundlesLetters(f);
    return bundle;
  }

  public keys(
    f: FiguresLibraryBundlesKeys
  ): ReturnType<typeof LibraryBundlesKeys> {
    const bundle = LibraryBundlesKeys(f);
    return bundle;
  }
}
