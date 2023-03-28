// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryBundlesReferenceBasis } from "../_ref";
import { FiguresLibraryBundlesLetters } from "./FiguresLibraryBundlesLetters";
import { LibraryBundlesLetters } from "./LibraryBundlesLetters";

describe("LibraryBundlesLetters test", () => {
  it("run", () => {
    const bundle = LibraryBundlesReferenceBasis;

    const figure: FiguresLibraryBundlesLetters = {
      bundle,
      letters: "a",
      pass: false,
    };
    const testFunctionsShapesBundlesKeys = LibraryBundlesLetters(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
