import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { handleServerError } from "~/server";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      const category = await prisma.category.findFirst({
        where: {
          id: String(id),
        },
      });

      if (!category) {
        return res.status(StatusCodes.NOT_FOUND).end();
      }

      return res.status(StatusCodes.OK).json(category);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
