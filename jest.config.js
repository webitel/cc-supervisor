module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@webitel/ui-sdk/src).+\\.js$',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/unit/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tests/unit/mocks/fileMock.js',
  },
  setupFiles: ['./src/plugins/webitel-ui.js'],
};
