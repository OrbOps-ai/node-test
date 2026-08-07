const autocannon = require('autocannon');

it('should handle multiple requests to the product listing page', (done) => {
  autocannon({
    url: 'http://localhost:3000/products',
    connections: 100,
    duration: 10
  }, (err, result) => {
    if (err) {
      done(err);
    } else {
      expect(result.requests.average).toBeGreaterThan(50);
      done();
    }
  });
});