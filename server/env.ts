import { z } from "zod";

export const EnvSchema = z.object({
  DATABASE_URL: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;
