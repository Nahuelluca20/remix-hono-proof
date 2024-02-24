import { createRequestHandler, logDevReady } from "@remix-run/cloudflare";
import type { AppLoadContext } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";
// import { Hono } from "hono";
// You can also use it with other runtimes
// import { handle } from "hono/cloudflare-pages";
// import { remix } from "remix-hono/handler";
// import { staticAssets } from "remix-hono/cloudflare";
// import { basicAuth } from "hono/basic-auth";
import { EnvSchema } from "./env";

const remix = createRequestHandler(build, build.mode);

if (process.env.NODE_ENV === "development") logDevReady(build);

export async function onRequest(
  ctx: EventContext<RuntimeEnv, any, Record<string, unknown>>
) {
  const env = EnvSchema.parse(ctx.env);
  const response = await remix(ctx.request, {
    env,
    db: ctx.env.DB,
  } satisfies AppLoadContext);

  return response;
}
