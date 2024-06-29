import { envField as e } from "astro/config";

export const schema = {
  PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID: e.string({
    context: "client",
    access: "public",
    optional: true,
  }),
};
