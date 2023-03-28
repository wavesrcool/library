// Copyright 2020-2023 @wavesrcool/library authors & contributors
// SPDX-License-Identifier: MIT

import { LibraryBundlesReferenceBasis } from "../_ref";
import { TypesLibraryBundles } from "../_types";
import { ClassLibraryBundlesCyclic } from "./cyclic";

export class ClassLibraryBundles {
  private bundlesCyclic: ClassLibraryBundlesCyclic;

  private bundlesReference: TypesLibraryBundles;

  constructor() {
    this.bundlesCyclic = new ClassLibraryBundlesCyclic();
    this.bundlesReference = LibraryBundlesReferenceBasis;
  }

  public get cyclic() {
    return this.bundlesCyclic;
  }

  public get reference() {
    return this.bundlesReference;
  }
}
