const { fetchAllProducts } = require('./utils');
const Product = require('./models/product');

jest.mock('./models/product');

it('should fetch products with correct pagination', async () => {
  Product.find.mockReturnValue({
    countDocuments: jest.fn().mockResolvedValue(10),
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockResolvedValue([{ name: 'Product 1' }, { name: 'Product 2' }])
  });

  const req = { query: { page: '1' } };
  const res = { render: jest.fn() };
  const next = jest.fn();

  await fetchAllProducts('file', 'title', 'path', req, res, next);

  expect(res.render).toHaveBeenCalledWith('file', expect.objectContaining({
    products: [{ name: 'Product 1' }, { name: 'Product 2' }],
    currentPage: 1,
    hasNextPage: true,
    hasPreviousPage: false,
    nextPage: 2,
    previousPage: 0,
    lastPage: 5
  }));
});