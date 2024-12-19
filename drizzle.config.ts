import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  dbCredentials: {
    url: "postgresql://ai-story-builder_owner:6n1HIPKiNcxs@ep-patient-sunset-a1kbolfz.ap-southeast-1.aws.neon.tech/ai-story-builder?sslmode=require",
  },
  verbose: true,
  strict: true,
});
