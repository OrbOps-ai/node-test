const csrf = require('csurf');
const express = require('express');

it('should set csrf token in response locals', () => {
  const req = {};
  const res = { locals: {} };
  const next = jest.fn();

  csrf()(req, res, next);

  expect(res.locals.csrfToken).toBeDefined();
  expect(next).toHaveBeenCalled();
});