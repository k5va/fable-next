import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { handleServerError, prisma } from "~/server";

const queryIdSchema = z.string();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const id = queryIdSchema.parse(req.query.id);
      const product = await prisma.product.findFirst({
        where: {
          id,
        },
        include: {
          collection: true,
          category: true,
          image: true,
          images: true,
        },
      });

      if (!product) {
        return res.status(StatusCodes.NOT_FOUND).end();
      }

      return res.status(StatusCodes.OK).json(product);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
