module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dc4de912f756f0e62485a93711244c07'),
  },
});
