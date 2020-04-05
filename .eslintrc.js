module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'class-prefer-methods',
    'simple-import-sort',
  ],
  overrides: [
    {
      files: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '__tests__/**',
        'e2e/**',
        '**/*.driver.tsx',
      ],
      rules: { 'import/no-extraneous-dependencies': 'off' },
      env: { jest: true },
    },
  ],
  globals: {
    fetch: true,
    fetchMock: true,
    jasmine: true,
    document: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'react/forbid-prop-types': ['error'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/static-property-placement': ['error', 'static public field'],
    '@typescript-eslint/camelcase': [
      'error',
      { properties: 'never', ignoreDestructuring: true },
    ],
    'react/jsx-no-bind': ['error', {}],
    'class-prefer-methods/prefer-methods': 'error',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [['^react', '^@?\\w']],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-fragments': [1, 'element'],
    'react/jsx-props-no-spreading': ['off'],
    'react/react-in-jsx-scope': ['off'], // nextjs provide global react
    'no-unused-vars': ['off'], // works badly with typescript
    'import/extensions': ['off'], // works badly with typescript
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      typescript: {},
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    react: {
      version: 'detect',
    },
  },
};
