const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");

AdminBro.registerAdapter(AdminBroMongoose);

const Models = require("../models/index.model");
const config = require("../config");

const adminBro = new AdminBro({
  resources: Models.models,
  rootPath: "/admin",
  logoutPath: "/admin/logout",
  loginPath: "/admin/login",
  branding: {
    companyName: config.COMPANY_NAME,
    softwareBrothers: false
  }
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: config.COOKIE_NAME,
  cookiePassword: config.COOKIE_PASSWORD,
  authenticate: async (email, password) => {
    if (email === config.ADMIN.email && password === config.ADMIN.password) {
      return config.ADMIN;
    }
    return null;
  }
});

module.exports = router;
