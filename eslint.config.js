import pluginJs from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import importPlugin from 'eslint-plugin-import';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { ignores: ['node_modules', 'dist', 'build'] },
  { languageOptions: { globals: globals.browser } },

  // Plugins
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  importPlugin.flatConfigs.recommended,
  ...pluginQuery.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
  },

  // Settings
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,

  // Rules
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'dot-notation': 'off',
      'no-bitwise': 'off',
      'no-case-declarations': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react-native/no-inline-styles': 'off',
      'react-refresh/only-export-': 'off',
      'react-refresh/only-export-components': 'off',
      'react/no-children-prop': 'off',
      'react/no-unstable-nested-components': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'unused-imports/no-unused-vars': 'off',
      radix: 'off',

      // Unused vars
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none', // Avoid reporting unused function arguments
          vars: 'all', // Report unused variables
          varsIgnorePattern: '^_', // Ignore variables starting with an underscore
          ignoreRestSiblings: true, // Ignore unused variables when destructuring
        },
      ],
      'no-unused-vars': [
        'warn',
        {
          args: 'none', // Avoid reporting unused function arguments
          vars: 'all', // Report unused variables
          varsIgnorePattern: '^_', // Ignore variables starting with an underscore
          ignoreRestSiblings: true, // Ignore unused variables when destructuring
        },
      ],
      // Imports
      '@typescript-eslint/consistent-type-imports': 'error',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'builtin',
              position: 'before',
            },
            {
              pattern: '@**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
          },
        },
      ],
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 120,
        },
      ],
    },
  },
];
