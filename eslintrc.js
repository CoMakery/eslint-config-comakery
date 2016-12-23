const off = 0
const warn = 1
const error = 2

const unusedVars = [
  'd',    // debug function from lightsaber
]

const config = {
  env: {
    es6: true,
    node: true,
  },

  globals: {
    document: false,
  },

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  plugins: [
    'promise',
    'react',
    'standard',
  ],

  rules: {
    // STANDARD:
    'accessor-pairs': error,
    'arrow-spacing': [error, { 'before': true, 'after': true }],
    'block-spacing': [error, 'always'],
    'brace-style': [error, '1tbs', { 'allowSingleLine': true }],
    'camelcase': [error, { 'properties': 'never' }],
    // 'comma-dangle': [error, 'never'],
    'comma-spacing': [error, { 'before': false, 'after': true }],
    'comma-style': [error, 'last'],
    'constructor-super': error,
    'curly': [error, 'multi-line'],
    'dot-location': [error, 'property'],
    'eol-last': error,
    'eqeqeq': [error, 'allow-null'],
    'func-call-spacing': [error, 'never'],
    'handle-callback-err': [error, '^(err|error)$'],
    'indent': [error, 2, { 'SwitchCase': 1 }],
    'key-spacing': [error, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [error, { 'before': true, 'after': true }],
    'new-cap': [error, { 'newIsCap': true, 'capIsNew': false }],
    'new-parens': error,
    'no-array-constructor': error,
    'no-caller': error,
    'no-class-assign': error,
    'no-cond-assign': error,
    'no-const-assign': error,
    'no-constant-condition': [error, { 'checkLoops': false }],
    'no-control-regex': error,
    'no-debugger': error,
    'no-delete-var': error,
    'no-dupe-args': error,
    'no-dupe-class-members': error,
    'no-dupe-keys': error,
    'no-duplicate-case': error,
    'no-duplicate-imports': error,
    'no-empty-character-class': error,
    'no-empty-pattern': error,
    'no-eval': error,
    'no-ex-assign': error,
    'no-extend-native': error,
    'no-extra-bind': error,
    'no-extra-boolean-cast': error,
    'no-extra-parens': [error, 'functions'],
    'no-fallthrough': error,
    'no-floating-decimal': error,
    'no-func-assign': error,
    'no-global-assign': error,
    'no-implied-eval': error,
    'no-inner-declarations': [error, 'functions'],
    'no-invalid-regexp': error,
    'no-irregular-whitespace': error,
    'no-iterator': error,
    'no-label-var': error,
    'no-labels': [error, { 'allowLoop': false, 'allowSwitch': false }],
    'no-lone-blocks': error,
    'no-mixed-spaces-and-tabs': error,
    // 'no-multi-spaces': error,
    'no-multi-str': error,
    'no-multiple-empty-lines': [error, { 'max': 1 }],
    'no-native-reassign': error,
    'no-negated-in-lhs': error,
    'no-new': error,
    'no-new-func': error,
    'no-new-object': error,
    'no-new-require': error,
    'no-new-symbol': error,
    'no-new-wrappers': error,
    'no-obj-calls': error,
    'no-octal': error,
    'no-octal-escape': error,
    'no-path-concat': error,
    'no-proto': error,
    'no-redeclare': error,
    'no-regex-spaces': error,
    // 'no-return-assign': [error, 'except-parens'],
    'no-self-assign': error,
    'no-self-compare': error,
    'no-sequences': error,
    'no-shadow-restricted-names': error,
    'no-sparse-arrays': error,
    'no-tabs': error,
    'no-template-curly-in-string': error,
    'no-this-before-super': error,
    'no-throw-literal': error,
    'no-trailing-spaces': error,
    'no-undef': error,
    'no-undef-init': error,
    'no-unexpected-multiline': error,
    'no-unmodified-loop-condition': error,
    'no-unneeded-ternary': [error, { 'defaultAssignment': false }],
    'no-unreachable': error,
    'no-unsafe-finally': error,
    'no-unsafe-negation': error,
    // 'no-unused-vars': [error, { 'vars': 'all', 'args': 'none' }],
    'no-useless-call': error,
    'no-useless-computed-key': error,
    'no-useless-constructor': error,
    'no-useless-escape': error,
    'no-useless-rename': error,
    'no-whitespace-before-property': error,
    'no-with': error,
    'object-property-newline': [error, { 'allowMultiplePropertiesPerLine': true }],
    'one-var': [error, { 'initialized': 'never' }],
    'operator-linebreak': [error, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],
    'padded-blocks': [error, 'never'],
    'quotes': [error, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    'rest-spread-spacing': [error, 'never'],
    'semi': [error, 'never'],
    'semi-spacing': [error, { 'before': false, 'after': true }],
    'space-before-blocks': [error, 'always'],
    // 'space-before-function-paren': [error, 'always'],
    'space-in-parens': [error, 'never'],
    'space-infix-ops': error,
    'space-unary-ops': [error, { 'words': true, 'nonwords': false }],
    'spaced-comment': [error, 'always', { 'line': { 'markers': ['*package', '!', ','] }, 'block': { 'balanced': true, 'markers': ['*package', '!', ','], 'exceptions': ['*'] } }],
    'template-curly-spacing': [error, 'never'],
    'unicode-bom': [error, 'never'],
    'use-isnan': error,
    'valid-typeof': error,
    'wrap-iife': [error, 'any', { 'functionPrototypeMethods': true }],
    'yield-star-spacing': [error, 'both'],
    'yoda': [error, 'never'],
    'standard/object-curly-even-spacing': [error, 'either'],
    'standard/array-bracket-even-spacing': [error, 'either'],
    'standard/computed-property-even-spacing': [error, 'even'],
    'promise/param-names': error,

    // STANDARD-REACT:
    'jsx-quotes': [error, 'prefer-single'],
    'react/jsx-boolean-value': error,
    'react/jsx-curly-spacing': [error, 'never'],
    'react/jsx-equals-spacing': [error, 'never'],
    'react/jsx-indent-props': [error, 2],
    'react/jsx-indent': [error, 2],
    'react/jsx-no-bind': [ 2, { 'allowArrowFunctions': true, 'allowBind': false, 'ignoreRefs': true } ],
    'react/jsx-no-duplicate-props': error,
    'react/jsx-no-undef': error,
    'react/jsx-space-before-closing': error,
    'react/jsx-uses-react': error,
    'react/jsx-uses-vars': error,
    'react/no-did-update-set-state': error,
    'react/no-unknown-property': error,
    'react/prop-types': error,
    'react/react-in-jsx-scope': error,
    'react/self-closing-comp': error,

    // FROM AEGIR:
    'block-scoped-var': error,
    'default-case': error,
    'dot-notation': warn,
    'guard-for-in': warn,
    'max-depth': [error, 3],
    'max-nested-callbacks': [error, 2],
    'no-alert': error,
    'no-case-declarations': error,
    'no-continue': warn,
    'no-div-regex': error,
    'no-empty': warn,
    'no-extra-semi': error,
    'no-implicit-coercion': error,
    'no-loop-func': error,
    'no-script-url': error,
    'no-warning-comments': warn,
    'require-yield': error,
    'strict': [error, 'safe'],

    // CUSTOM:
    'comma-dangle': [error, 'only-multiline'],
    'complexity': [error, { 'max': 3 }],
    'consistent-this': [error, 'self'],
    'func-style': [error, 'expression'],
    'linebreak-style': [error, 'unix'],
    'no-nested-ternary': error,
    'no-return-assign': off,
    'no-multi-spaces': [ error, { 'exceptions': { 'ArrayExpression': true } } ],
    'no-unused-vars': [error, { 'varsIgnorePattern': '^(' + unusedVars.join('|') + ')$' }],
    'no-var': error,
    'promise/always-return': error,
    'promise/catch-or-return': warn,
    'promise/no-native': error,
    'space-before-function-paren': [error, 'never'],
    'prefer-arrow-callback': warn,
  }
}

module.exports = config
