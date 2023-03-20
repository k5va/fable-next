import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { handleServerError, prisma } from "~/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const collections = await prisma.collection.findMany();

      return res.status(StatusCodes.OK).json(collections);
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
