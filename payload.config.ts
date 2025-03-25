import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { buildConfig } from "payload";
import Media from "./src/app/(payload)/_collections/Media.ts";
import Cars from "./src/app/(payload)/_collections/Cars.ts";

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Cars],
  secret: process.env.NEXT_PUBLIC_PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: process.env.NEXT_PUBLIC_DB_KEY,
  }),
  sharp,
});
