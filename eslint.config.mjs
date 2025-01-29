import {fixupConfigRules, fixupPluginRules} from '@eslint/compat';
import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import cypress from 'eslint-plugin-cypress';
import jestDom from 'eslint-plugin-jest-dom';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';
import testingLibrary from 'eslint-plugin-testing-library';
import globals from 'globals';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      // "react-app",
      //   'react-app/jest',
      'plugin:react/recommended',
      //   'standard',
      'eslint:recommended',
      //   'plugin:sonarjs/recommended',
      'plugin:prettier/recommended',
      'plugin:jsx-a11y/recommended',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': typescriptEslint,
      prettier: fixupPluginRules(prettier),
      sonarjs: fixupPluginRules(sonarjs),
      'jest-dom': jestDom,
      'testing-library': testingLibrary,
      cypress,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...cypress.environments.globals.globals,
        NodeJS: true,
        React: true,
        jsdom: true,
        JSX: true,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 0,
      'default-param-last': ['error'],

      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-unused-vars': 'off',

      'no-restricted-imports': [
        'error',
        {
          paths: ['import1', 'import2'],
        },
      ],

      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
  ...compat.extends('plugin:jest-dom/recommended', 'plugin:testing-library/react').map(config => ({
    ...config,
    files: ['**/__tests__/**/*.[jt]s?(x)'],
  })),
  ...compat
    .extends('plugin:jest-dom/recommended', 'plugin:testing-library/react', 'plugin:cypress/recommended')
    .map(config => ({
      ...config,
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    })),
];
