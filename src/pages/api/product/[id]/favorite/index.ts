import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { getCurrentUser, handleServerError, prisma } from "~/server";

const querySchema = z.object({
  id: z.string(),
  set: z.boolean(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    try {
      const user = await getCurrentUser(req, res);
      const { id, set } = querySchema.parse(req.query);
      const product = await prisma.product.findUnique({
        where: {
          id,
        },
        include: {
          favoriteUsers: true,
        },
      });

      if (!product) {
        return res.status(StatusCodes.NOT_FOUND).end();
      }

      const updatedProduct = await prisma.product.update({
        where: {
          id,
        },
        data: {
          favoriteUsers: {
            set: set
              ? [
                  ...product.favoriteUsers.map((favUser) => ({
                    ...favUser,
                    email: favUser.email ?? undefined,
                  })),
                  user,
                ]
              : product.favoriteUsers
                  .filter(({ id }) => id !== user.id)
                  .map((favUser) => ({
                    ...favUser,
                    email: favUser.email ?? undefined,
                  })),
          },
        },
        include: {
          favoriteUsers: true,
        },
      });

      return res.status(StatusCodes.OK).json(updatedProduct);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
