module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier", "prettier/react"],
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version.
      flowVersion: "0.53", // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {
        property: "freeze",
        object: "Object",
      },
      {
        property: "myFavoriteWrapper",
      },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {
        name: "Link",
        linkAttribute: "to",
      },
    ],
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ["react"],
  rules: {
    // react
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    // braces
    curly: "error",
    // enable additional rules
    "no-eval": "error",
    "no-implied-eval": "error",
    "dot-notation": "error",
    eqeqeq: ["error", "smart"],
    "no-caller": "error",
    "no-extra-bind": "error",
    "no-unused-expressions": "error",
    "no-useless-call": "error",
    "no-useless-return": "error",
    radix: "warn",
    // modify rules from base configurations
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        vars: "all",
      },
    ],
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    // disable rules from base configurations
    "no-control-regex": "off",
    "require-atomic-updates": "off",
    "no-async-promise-executor": "off",
    // stylistic conventions
    "brace-style": ["error", "1tbs"],
    "space-before-blocks": ["error", "always"],
    "block-spacing": "error",
    "array-bracket-spacing": "error",
    "comma-spacing": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        exceptions: ["/"],
      },
    ],
    "comma-style": "error",
    "computed-property-spacing": "error",
    "no-trailing-spaces": "warn",
    "eol-last": "error",
    "func-call-spacing": "error",
    "key-spacing": [
      "warn",
      {
        mode: "minimum",
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true,
      },
    ],
    camelcase: [
      "error",
      {
        properties: "always",
      },
    ],
    semi: ["error", "always"],
    "unicode-bom": "error",
    "require-jsdoc": [
      "off",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
        },
      },
    ],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "no-whitespace-before-property": "error",
    "space-in-parens": "error",
    "no-var": "error",
    "prefer-const": "error",
  },
  overrides: [
    {
      files: "tests/**/*",
      rules: {
        "no-unused-expressions": "off",
        "no-console": "off",
      },
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: { browser: true, es6: true, node: true },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      globals: { Atomics: "readonly", SharedArrayBuffer: "readonly" },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: {
        indent: ["error", 2, { SwitchCase: 1 }],
        "linebreak-style": ["error", "unix"],
        "@typescript-eslint/no-explicit-any": 0,
        semi: "off",
        "@typescript-eslint/semi": ["error"],
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  globals: {
    $: false,
    jQuery: false,
    Chart: false,
    App: false,
    React: false,
  },
};
