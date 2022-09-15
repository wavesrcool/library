// Copyright 2020-2022 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryReferenceShapesBundlesCyclicBasis } from "../../../../../reference/shapes/bundles/cyclic/LibraryReferenceShapesBundlesCyclicBasis";
import { LibraryFunctionsShapesBundlesCyclicKeys } from "./LibraryFunctionsShapesBundlesCyclicKeys";
import { TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys } from "./TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys";

describe("LibraryFunctionsShapesBundlesCyclicKeys test", () => {
  it("run", () => {
    const bundle = LibraryReferenceShapesBundlesCyclicBasis;

    const figure: TypesFiguresLibraryFunctionsShapesBundlesCyclicKeys = {
      bundle,
      key: "Backspace",
    };
    const testFunctionsShapesBundlesCyclicKeys =
      LibraryFunctionsShapesBundlesCyclicKeys(figure);
    expect(testFunctionsShapesBundlesCyclicKeys).toBeTruthy();
  });
});
