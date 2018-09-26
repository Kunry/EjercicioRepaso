

const isRol = (rol="DonPepe", redirectTo="/auth/login") => (req, res, next) => {
  if(req.user && (req.user.rol === rol || req.user.rol === "Admin")){
    console.log("Acces granted");
    next();
  } else {
    console.log("Acces denied");
    res.redirect(redirectTo)
  }
}

module.exports = isRol;