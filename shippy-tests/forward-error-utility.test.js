const { forwardError } = require('./utils');

it('should forward an error with status code 500', () => {
  const next = jest.fn();
  const error = new Error('Test error');

  forwardError(error, next);

  expect(next).toHaveBeenCalledWith(expect.objectContaining({
    httpStatusCode: 500
  }));
});