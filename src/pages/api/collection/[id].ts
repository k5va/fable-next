import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const collection = await prisma.collection.findFirst({
    where: {
      id: String(id),
    },
  });

  if (!collection) {
    return res.status(StatusCodes.NOT_FOUND).end();
  }

  return res.status(StatusCodes.OK).json(collection);
}
