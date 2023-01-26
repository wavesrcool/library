// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { ReferenceShapesBundlesBasis } from "../_ref";
import { FiguresLibraryShapesBundlesKeys } from "./FiguresLibraryShapesBundlesKeys";
import { LibraryShapesBundlesKeys } from "./LibraryShapesBundlesKeys";

describe("LibraryShapesBundlesKeys test", () => {
  it("run", () => {
    const bundle = ReferenceShapesBundlesBasis;

    const figure: FiguresLibraryShapesBundlesKeys = {
      bundle,
      key: "Backspace",
    };
    const testFunctionsShapesBundlesKeys = LibraryShapesBundlesKeys(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
