import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "584tokxb",
  dataset: "production",
  apiVersion: "2025-05-29",
  useCdn: false,
});