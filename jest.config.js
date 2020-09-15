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
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/queues/**/*.{js,vue}',
    'src/store/**/*.{js,vue}',
    'src/mixins/**/*.{js,vue}',
    '!src/**/index.js', // No need to cover bootstrap file
  ],
  setupFiles: [
    './tests/config/config.js',
    './src/plugins/webitel-ui.js',
  ],
  setupFilesAfterEnv: ['./tests/config/jest.config.js'],
};
