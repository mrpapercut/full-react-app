const path = require('path');

module.exports = {
    extends: 'standard',
    rules: {
        camelcase: 'off',
        indent: [
            'off',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'multiline-ternary': 'off',
        'no-case-declarations': 'off',
        'no-multi-spaces': 'off',
        'no-prototype-builtins': 'off',
        'no-sequences': 'off',
        'no-useless-constructor': 'off',
        'object-curly-spacing': 'off',
        'one-var': 'off',
        'prefer-const': 'warn',
        'prefer-promise-reject-errors': 'off',
        'promise/param-names': 'off',
        'semi': [
            'error',
            'always'
        ],
        'space-before-function-paren': 'off',
        'spaced-comment': 'off'
    },
    parserOptions: {
        ecmaVersion: 8,
        sourceType: 'module',
        babelOptions: {
            configFile: path.join(__dirname, '.babelrc')
        }
    },
    env: {
        browser: true,
        node: true,
        "jest/globals": true
    },
    parser: '@babel/eslint-parser',
    globals: {
        import: 'readonly'
    }
};
