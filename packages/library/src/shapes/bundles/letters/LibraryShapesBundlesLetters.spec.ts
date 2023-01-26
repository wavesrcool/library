// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryReferenceShapesBundlesBasis } from "../_ref";
import { LibraryShapesBundlesLetters } from "./LibraryShapesBundlesLetters";
import { TypesFiguresShapesBundlesLetters } from "./TypesFiguresLibraryShapesBundlesLetters";

describe("LibraryShapesBundlesLetters test", () => {
  it("run", () => {
    const bundle = LibraryReferenceShapesBundlesBasis;

    const figure: TypesFiguresShapesBundlesLetters = {
      bundle,
      letters: "a",
      pass: false,
    };
    const testFunctionsShapesBundlesKeys = LibraryShapesBundlesLetters(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
