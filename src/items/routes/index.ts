// @ts-ingore
import {
  getAllItemsOpts,
  getSingleItemOpts,
  postItemOpts,
} from "@/src/items/options/index";

export default async function (fastify: any, opts: any, done: any) {
  // get all items
  fastify.get("/items", getAllItemsOpts);
  // get single item
  fastify.get("/items/:id", getSingleItemOpts);
  // post item
  fastify.post("/items", postItemOpts);
}
