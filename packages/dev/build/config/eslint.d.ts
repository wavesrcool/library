declare const _default: {
    env: {
        browser: boolean;
        jest: boolean;
        node: boolean;
    };
    extends: string[];
    plugins: string[];
    parser: string;
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: boolean;
    };
    rules: {
        "import/prefer-default-export": string;
        "class-methods-use-this": string;
        "no-console": string;
        "no-nested-ternary": string;
        "no-useless-return": string;
        "no-bitwise": (string | {
            allow: string[];
        })[];
        "import/extensions": (string | {
            json: string;
        })[];
        "import/no-unresolved": number;
        "prettier/prettier": string[];
        "no-use-before-define": string;
        "@typescript-eslint/no-use-before-define": string[];
        "no-shadow": string;
        "@typescript-eslint/no-shadow": string[];
        "@typescript-eslint/no-unused-vars": number;
        "unused-imports/no-unused-imports": string;
        "no-param-reassign": (string | {
            props: boolean;
            ignorePropertyModificationsFor: string[];
        })[];
    };
    ignorePatterns: string[];
};
export default _default;
//# sourceMappingURL=eslint.d.ts.map