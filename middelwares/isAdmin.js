const isAdmin = (redirectTo) => (req,res,next) => {
  req.user && req.user.rol == "Admin" ? next() : res.redirect(redirectTo);
}

module.exports = isAdmin