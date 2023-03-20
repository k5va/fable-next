import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { StatusCodes } from "http-status-codes";
import { z, ZodError } from "zod";

const queryIdsSchema = z.string().optional();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const idParam = await queryIdsSchema.parseAsync(req.query.ids);
    const ids = idParam ? idParam.split(",") : undefined;

    console.log("ids: ", ids);

    try {
      const products = await prisma.product.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        include: {
          images: true,
          image: true,
        },
      });

      return res.status(StatusCodes.OK).json(products);
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
