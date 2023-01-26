// Copyright 2020-2023 @wavesrcool authors & contributors
// SPDX-License-Identifier: MIT

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const path = require("path");
const { lstatSync, readdirSync } = require("fs");
const scope = `@wavesrcool`
const packages = `packages`
const dir = path.resolve(__dirname, packages);
const list = readdirSync(dir).filter((name) =>
  lstatSync(path.join(dir, name)).isDirectory()
);

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    ...list.reduce(
      (acc, name) => ({
        ...acc,
        [`${scope}/${name}(.*)$`]: `<rootDir>/${packages}/./${name}/src/$1`,
      }),
      {}
    ),
  },
  modulePathIgnorePatterns: [
    ...list.reduce(
      (acc, name) => [...acc, `<rootDir>/${packages}/${name}/lib`],
      []
    ),
  ],
};