// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryReferenceShapesBundlesBasis } from "../_ref";
import { LibraryShapesBundlesKeys } from "./LibraryShapesBundlesKeys";
import { TypesFiguresShapesBundlesKeys } from "./TypesFiguresLibraryShapesBundlesKeys";

describe("LibraryShapesBundlesKeys test", () => {
  it("run", () => {
    const bundle = LibraryReferenceShapesBundlesBasis;

    const figure: TypesFiguresShapesBundlesKeys = {
      bundle,
      key: "Backspace",
    };
    const testFunctionsShapesBundlesKeys = LibraryShapesBundlesKeys(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
