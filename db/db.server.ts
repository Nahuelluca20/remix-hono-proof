import { drizzle } from "drizzle-orm/neon-http";
import { text, pgTable, integer } from "drizzle-orm/pg-core";

export const hotelsTable = pgTable("hotels", {
  id: text("id"),
  name: text("name"),
  description: text("description"),
  createdAt: text("createdAt"),
  image: text("image"),
  hotelUrl: text("hotel_url"),
  stars: integer("stars"),
  province: text("province"),
  userId: text("userId"),
});

export function database(neon: any) {
  return drizzle(neon, {
    schema: {
      hotels: hotelsTable,
    },
  });
}
