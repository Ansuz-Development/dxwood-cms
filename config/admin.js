module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '790fc0e2b2c5b36dfc9e4c1961e4899b'),
  },
  url: '/dashboard',
});
