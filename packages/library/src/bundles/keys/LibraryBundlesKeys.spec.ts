// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryBundlesReferenceBasis } from "../_ref";
import { FiguresLibraryBundlesKeys } from "./FiguresLibraryBundlesKeys";
import { LibraryBundlesKeys } from "./LibraryBundlesKeys";

describe("LibraryBundlesKeys test", () => {
  it("run", () => {
    const bundle = LibraryBundlesReferenceBasis;

    const figure: FiguresLibraryBundlesKeys = {
      bundle,
      key: "Backspace",
    };
    const testFunctionsShapesBundlesKeys = LibraryBundlesKeys(figure);
    expect(testFunctionsShapesBundlesKeys).toBeTruthy();
  });
});
