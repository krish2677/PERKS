module.exports = {
  ensureAdmin: function (req, res, next) {
    // We assume ensureAuth has already run, so req.user exists
    if (req.isAuthenticated() && req.user.role === 'admin') {
      return next();
    } else {
      res.status(403).json({ message: 'Forbidden: Admins only' });
    }
  },
};