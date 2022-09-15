// Copyright 2020-2022 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryReferenceShapesBundlesCyclicBasis } from "../../../../../reference/shapes/bundles/cyclic/LibraryReferenceShapesBundlesCyclicBasis";
import { LibraryFunctionsShapesBundlesCyclicLetters } from "./LibraryFunctionsShapesBundlesCyclicLetters";
import { TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters } from "./TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters";

describe("LibraryFunctionsShapesBundlesCyclicLetters test", () => {
  it("run", () => {
    const bundle = LibraryReferenceShapesBundlesCyclicBasis;

    const figure: TypesFiguresLibraryFunctionsShapesBundlesCyclicLetters = {
      bundle,
      letters: "a",
      pass: false,
    };
    const testFunctionsShapesBundlesCyclicKeys =
      LibraryFunctionsShapesBundlesCyclicLetters(figure);
    expect(testFunctionsShapesBundlesCyclicKeys).toBeTruthy();
  });
});
