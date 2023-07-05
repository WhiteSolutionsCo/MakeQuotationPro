const usersRoute = require("./userRouter");
const cusomtersRoute = require("./customerRouter");
const authRoute = require("./authRouter");
const productRoute = require("./productRouter");
const termsRoute = require("./termRouter");

const mountRoutes = (app) => {
  app.use("/api/v1/users/", usersRoute);
  app.use("/api/v1/customers/", cusomtersRoute);
  app.use("/api/v1/auth/", authRoute);
  app.use("/api/v1/products/", productRoute);
  app.use("/api/v1/terms/", termsRoute);
};
module.exports = mountRoutes;
