function mockLogger() {
  jest.mock('../logging', () => ({
    silly: jest.fn(),
    debug: jest.fn(),
    verbose: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    error: jest.fn()
  }));
  const logger = require('../logging');
  logger.info('test');
}

export default mockLogger
