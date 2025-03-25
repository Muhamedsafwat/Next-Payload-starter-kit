import { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

const Cars: CollectionConfig = {
  access: {
    read: () => true,
  },
  slug: "cars",
  admin: {
    useAsTitle: "name",
    group: "Content management",
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      type: "row",
      fields: [
        {
          name: "Gearbox",
          type: "select",
          required: true,
          options: [
            { value: "Automatic", label: "Automatic" },
            { label: "Manual", value: "manual" },
          ],
        },
        {
          name: "numOfDoors",
          label: "Number of doors",
          type: "select",
          options: [
            { label: "2", value: "2" },
            { label: "4", value: "4" },
          ],
        },
      ],
    },

    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Cars;
