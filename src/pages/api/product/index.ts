import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { handleServerError, prisma } from "~/server";

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
          favoriteUsers: true,
        },
      });

      return res.status(StatusCodes.OK).json(products);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
