import { EnvSchema } from "./env";

import { logDevReady } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";
import { Hono } from "hono";
// You can also use it with other runtimes
import { handle } from "hono/cloudflare-pages";
import { remix } from "remix-hono/handler";
import { basicAuth } from "hono/basic-auth";

if (process.env.NODE_ENV === "development") logDevReady(build);

/* type your Cloudflare bindings here */
type Bindings = {};

/* type your Hono variables (used with c.get/c.set) here */
type Variables = {};

type ContextEnv = { Bindings: Bindings; Variables: Variables };

const server = new Hono<ContextEnv>();

server.use("*", basicAuth({ username: "hono", password: "remix" }));

server.use(
  "*",
  remix({
    build,
    mode: process.env.NODE_ENV as "development" | "production",

    getLoadContext(ctx) {
      const env = EnvSchema.parse(ctx.env);
      const response = {
        env,
        db: ctx.env.DB,
      };
      return response;
    },
  })
);

export const onRequest = handle(server);
