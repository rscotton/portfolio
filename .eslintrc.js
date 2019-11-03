// https://www.gatsbyjs.org/docs/eslint/
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'prettier', 'prettier/react'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    // Additional es-lint rule preferences here
    'prettier/prettier': 2, // Avoid clashes w/Prettier
    'no-shadow': 2,
    'no-duplicate-imports': 2,
  },
};
