import AdminBro from "admin-bro";
import { buildAuthenticatedRouter, buildRouter } from "admin-bro-expressjs";
import AdminBroMongoose from "admin-bro-mongoose";

AdminBro.registerAdapter(AdminBroMongoose);

import { models } from "../models";
import { COMPANY_NAME, COOKIE_NAME, COOKIE_PASSWORD, ADMIN } from "../config";

import { login } from "./model";

const adminBro = new AdminBro({
  resources: models,
  rootPath: "/admin",
  logoutPath: "/admin/logout",
  loginPath: "/admin/login",
  branding: {
    companyName: COMPANY_NAME,
    softwareBrothers: false
  },
  dashboard: {
    handler: async () => {},
    component: AdminBro.require("./components/index")
  }
});

// const router = buildRouter(adminBro);

const router = buildAuthenticatedRouter(adminBro, {
  cookieName: COOKIE_NAME,
  cookiePassword: COOKIE_PASSWORD,
  authenticate: async (email, password) => {
    if (login(email, password)) return true;
  }
});

export default router;
