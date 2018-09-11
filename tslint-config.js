const path = require('path')

const resolveRule = (moduleId, pathTo) =>
    path.join(path.dirname(require.resolve(moduleId)), pathTo)

module.exports = {
  rulesDirectory: [
    resolveRule('tslint-consistent-codestyle', './'),
    resolveRule('tslint-eslint-rules', 'dist/rules'),
    resolveRule('tslint-microsoft-contrib', './'),
    resolveRule('vrsource-tslint-rules', 'rules'),
  ],
  rules: {
    'cyclomatic-complexity': [true, 10],
    'prefer-const': true,
    'no-var-keyword': true,
    'object-literal-shorthand': true,
    'object-shorthand-properties-first': false,
    'object-literal-key-quotes': [
      true,
      'as-needed',
    ],
    'no-conditional-assignment': true,
    'no-constant-condition': true,
    'no-ex-assign': true,
    'no-debugger': true,
    'no-empty': [true, 'allow-empty-catch'],
    'no-extra-boolean-cast': true,
    'use-isnan': true,
    'prefer-array-literal': false,
    'quotemark': [
      true,
      'single',
      'jsx-single',
    ],
    'no-eval': true,
    'no-function-constructor-with-string-args': true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
    "no-param-reassign": false, // Disable invalid check
    "no-parameter-reassignment": true, // Enable valid check
    'align': [
      true,
      'elements',
      'members',
      'parameters',
      'statements',
    ],
    'ter-prefer-arrow-callback': [
      true,
      {
        'allowNamedFunctions': true,
      },
    ],
    'arrow-parens': false,
    'ter-arrow-parens': [
      true,
      'as-needed',
      {
        'requireForBlockBody': false,
      },
    ],
    'no-duplicate-imports': true,
    'one-variable-per-declaration': [
      true,
      'ignore-for-loop',
    ],
    'no-increment-decrement': false,
    'triple-equals': [
      true,
      'allow-null-check',
    ],
    'brace-style': [
      true,
      '1tbs',
      {
        'allowSingleLine': true,
      },
    ],
    'comment-format': [
      true,
      'check-space',
    ],
    indent: [
      true,
      'space',
    ],
    'ter-indent': [
      true,
      2,
      { 'SwitchCase': 1 },
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-operator',
      'check-preblock',
    ],
    eofline: true,
    'space-in-parens': [
      true,
      'never',
    ],
    'array-bracket-spacing': [
      true,
      'never',
    ],
    'object-curly-spacing': [
      true,
      'always',
    ],
    'max-line-length': [
      true,
      250,
    ],
    'trailing-comma': [
      true,
      {
        'multiline': {
          'arrays': 'always',
          'exports': 'always',
          'functions': 'always',
          'imports': 'always',
          'objects': 'always',
          'typeLiterals': 'ignore',
        },
        'singleline': 'never',
      },
    ],
    'semicolon': [
      true,
      'never',
    ],
    'radix': true,
    'no-construct': true,
    'function-name': [
      true,
      {
        'static-method-regex': '^[a-z][\\w\\d]+$',
        'function-regex': '^[A-Za-z][\\w\\d]+$',
      },
    ],
    'variable-name': [
      true,
      'ban-keywords',
      'check-format',
      'allow-pascal-case',
    ],
    'no-this-assignment': true,
    'import-name': false,
  },
}
