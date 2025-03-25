import { CollectionConfig } from "payload";

const Media: CollectionConfig = {
  slug: "media",
  upload: true,
  fields: [],
  access: {
    read: () => true,
  },
};

export default Media;
