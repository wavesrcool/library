// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { ReferenceShapesBundlesBasis } from "../_ref";
import { FiguresLibraryShapesBundlesLetters } from "./FiguresLibraryShapesBundlesLetters";
import { LibraryShapesBundlesLetters } from "./LibraryShapesBundlesLetters";

describe("LibraryShapesBundlesLetters test", () => {
  it("run", () => {
    const bundle = ReferenceShapesBundlesBasis;

    const figure: FiguresLibraryShapesBundlesLetters = {
      bundle,
      letters: "a",
      pass: false,
    };
    const testFunctionsShapesBundlesKeys = LibraryShapesBundlesLetters(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
