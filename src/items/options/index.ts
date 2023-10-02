import {
  getAllItemsCtr,
  getSignleItemCtr,
  postItemCtr,
} from "@/src/items/controllers/index";

const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
  },
};

export const getAllItemsOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          items: {
            type: "array",
            items: Item,
          },
          message: { type: "string" },
        },
      },
    },
  },
  handler: getAllItemsCtr,
};
export const getSingleItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          items: Item,
          message: { type: "string" },
        },
      },
    },
  },
  handler: getSignleItemCtr,
};
export const postItemOpts = {
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          items: Item,
          message: { type: "string" },
        },
      },
    },
  },
  handler: postItemCtr,
};
