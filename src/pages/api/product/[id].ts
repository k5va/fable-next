import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z, ZodError } from "zod";
import { prisma } from "~/server/db";

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
      console.log(error);

      if (error instanceof ZodError) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
