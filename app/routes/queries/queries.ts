import { neon } from "@neondatabase/serverless";
import { AppLoadContext } from "@remix-run/cloudflare";
import { database } from "db/db.server";

export async function queryHotels(context: AppLoadContext) {
  const db = database(neon(context.db as string));
  const hotels = await db.query.hotels.findMany();
  return hotels;
}
