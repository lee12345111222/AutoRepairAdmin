module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript'
  ],
  // parser: '@typescript-eslint/parser',
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  ignorePatterns: ['.eslintrc.cjs', 'def/auto-imports.d.ts', 'def/components.d.ts', 'public/*'],
  rules: {
    'arrow-parens': 1,
    'generator-star-spacing': 0,
    'no-debugger': ['error'],
    'no-console': 'error',
    'no-tabs': 'error',
    'keyword-spacing': ['error', { before: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ['error', 'always'],
    "space-before-blocks": "off",
    "@typescript-eslint/space-before-blocks": "error",
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    "@typescript-eslint/member-delimiter-style": ['error'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'object-curly-newline': ['error',  { 'minProperties': 2, 'multiline': true }],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'no-multi-spaces': 'error',
    'quotes': ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren":['error', 'never'],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-empty': 'error',
    'object-shorthand': 'error',
    'no-empty-function': 'error',
    'semi': ['error', 'always'],
    "indent": "off",
    "@typescript-eslint/indent":["error", 2], 
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/multi-word-component-names': 0,
     /**
     * Good
     * const inputRef: Ref<HTMLElement | null> = ref(null)
     * 
     * Bad
     * const inputRef:Ref<HTMLElement | null> = ref(null)
     */
    '@typescript-eslint/type-annotation-spacing': 'error',
    "brace-style": "off",
    "@typescript-eslint/brace-style": "error",
    /**
     * Good
     * const inputRef: Ref<HTMLElement | null> = ref(null)
     * 
     * Bad
     * const inputRef: Ref<HTMLElement|null> = ref(null)
     */
    '@typescript-eslint/space-infix-ops': 'error',

    "space-in-parens": ["error", "never"],

    /**
     * GOOD const obj = { 'foo': 'bar', 'baz': 'qur' };
     * BAD const obj = { 'foo': 'bar','baz': 'qur' }; 
     */
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],

    // "quote-props": ["error", "as-needed"],
    // "linebreak-style": ["error", "unix"],
    "eol-last": ["error", "always"]
  }
};