import { Item } from "@/src/items/types/types";
import { items } from "@/items";
import { FastifyReply, FastifyRequest } from "fastify";
// @ts-ignore
import { v4 as uuidv4 } from "uuid";

export const getAllItemsCtr = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  reply.code(200).send({ items, message: "hello all items" });
};
export const getSignleItemCtr = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const { id }: any = req.params;
  const newItem: Item | undefined = items.find((item: any) => item.id === id);
  reply.code(200).send({ items: newItem, message: "hello single item" });
};

export const postItemCtr = async (req: FastifyRequest, reply: FastifyReply) => {
  //
  const { name }: any = req.body;
  const newItem = {
    id: uuidv4(),
    name: name,
  };
  console.log("newitem::: ", newItem);
  const newListOfItems = [...items, newItem];
  items.length = 0;
  items.push(...newListOfItems);
  reply.code(201).send({ items, message: "A new item has been added" });
};
