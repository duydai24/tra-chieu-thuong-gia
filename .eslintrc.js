module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'prettier/react',
    'plugin:@next/next/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  plugins: [
    'react',
    'simple-import-sort',
    'import',
    'prettier',
    'autofix'
  ],
  rules: {
    'autofix/no-debugger': 2,
    'no-console': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'constructor-super': 'warn',
    'import/newline-after-import': 'error',
    'indent': [
      0,
      2
    ],
    'no-const-assign': 'warn',
    'no-extra-semi': 'error',
    'no-this-before-super': 'warn',
    'no-undef': 'warn',
    'no-underscore-dangle': 0,
    'no-unreachable': 'warn',
    'no-unused-vars': 1,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'valid-typeof': 'warn',
    'consistent-return': 'off',
    'flowtype/no-types-missing-file-annotation': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 2,
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/no-string-refs': 'off',
    'react/no-unused-prop-types': 'off',
    'react/no-unused-state': 'off',
    'react/display-name': 1,
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'max-len': 'off',
    'no-case-declarations': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-shadow': 'off',
    'no-use-before-define': 1,
    'no-unused-expressions': 0,
    'prefer-promise-reject-errors': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1
      }
    ],
    'prettier/prettier': [
      'off',
      {
        'trailingComma': 'none',
        'singleQuote': false,
        'jsxSingleQuote': false
      }
    ],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*']
      }
    ]
  },
  'overrides': [
    {
      'files': 'server/**/*.js',
      'env': {'node': true},
      'rules': {
        'simple-import-sort/imports': 'off',
        'import/order': ['error', {'newlines-between': 'always'}]
      }
    }
  ],
  settings: {
    'react': {
      'pragma': 'React',
      'version': '16.9'
    },
    'import/resolver': {
      'node': {
        'paths': [
          './src',
          './src/lib/',
          './src/res/',
          './src/core/',
          './src/screens/',
          './src/store/',
          './src/config/',
          './src/utils/',
          './src/modules/',
        ],
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
        'moduleDirectory': ['src', 'node_modules']
      }
    }
  },
  globals: {
    'window': true,
    'document': true,
    'localStorage': true,
    'FormData': true,
    'FileReader': true,
    'Blob': true,
    'navigator': true
  }
};