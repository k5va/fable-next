import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { getCurrentUser, handleServerError, prisma } from "~/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const user = await getCurrentUser(req, res);
      const products = await prisma.product.findMany({
        where: {
          favoriteUsers: {
            some: {
              id: user.id,
            },
          },
        },
        include: {
          images: true,
          image: true,
        },
      });

      return res.status(StatusCodes.OK).json(products);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
