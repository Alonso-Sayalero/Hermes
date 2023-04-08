import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.topic.findMany({
      where: {
        authorId: ctx.userId,
      },
    });
  }),

  create: privateProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.topic.create({
        data: {
          title: input.title,
          authorId: ctx.userId,
        },
      });
    }),
});
