import { Item } from "@/src/items/types/types";
import { items } from "@/items";
import { FastifyReply, FastifyRequest } from "fastify";

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
};
