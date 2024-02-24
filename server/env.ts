import { z } from "zod";

export const EnvSchema = z.object({
  DB: z.string().min(1),
});

export type Env = z.infer<typeof EnvSchema>;
