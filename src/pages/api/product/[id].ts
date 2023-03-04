import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const product = await prisma.product.findFirst({
    where: {
      id: String(id),
    },
    include: {
      collection: true,
      category: true,
      image: true,
    },
  });

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).end();
  }

  return res.status(StatusCodes.OK).json(product);
}
