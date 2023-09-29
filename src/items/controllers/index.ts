import { Item } from "@/src/items/types/types";
import { items } from "@/items";

export const getAllItemsCtr = async (req: any, reply: any) => {
  reply.send({ items, message: "hello all items" });
};
export const getSignleItemCtr = async (req: any, reply: any) => {
  const { id } = req.params;
  const newItem: Item | undefined = items.find((item: any) => item.id === id);
  reply.send({ items: newItem, message: "hello single item" });
};
