import AdminBro from "admin-bro";
import { buildAuthenticatedRouter } from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";

AdminBro.registerAdapter(AdminBroMongoose);

import { models } from "../models/index.model";
import { COMPANY_NAME, COOKIE_NAME, COOKIE_PASSWORD, ADMIN } from "../config";

const adminBro = new AdminBro({
  resources: models,
  rootPath: "/admin",
  logoutPath: "/admin/logout",
  loginPath: "/admin/login",
  branding: {
    companyName: COMPANY_NAME,
    softwareBrothers: false
  }
});

const router = buildAuthenticatedRouter(adminBro, {
  cookieName: COOKIE_NAME,
  cookiePassword: COOKIE_PASSWORD,
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  }
});

export default router;
