import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "helloworld-yendo",
  apiKey: process.env.API_KEY,
});
