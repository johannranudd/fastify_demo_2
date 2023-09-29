import Fastify from "fastify";
import itemRoutes from "@/src/items/routes/index";
const fastify = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

fastify.register(itemRoutes);

async function server() {
  await fastify.listen({
    port: 5000,
    host: "0.0.0.0",
  });
}

server();
