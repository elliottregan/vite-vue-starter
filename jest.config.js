module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|mjs)$',
  moduleFileExtensions: ['vue', 'js', 'mjs'],
  globals: {
    'vue-jest': {
      babelConfig: true,
    },
  },
}