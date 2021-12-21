module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e8dfe220ecd192f8839ada3340c88fe'),
  },
});
