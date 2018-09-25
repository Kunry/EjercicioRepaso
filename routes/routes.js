const p = (app) => {

const index = require('./routes/index');
app.use('/', index);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const celebrities = require("./routes/celebrities");
app.use("/peliculas", celebrities);

const comentarios = require("./routes/comment");
app.use("/comment", comentarios);}