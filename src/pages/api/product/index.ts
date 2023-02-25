import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { StatusCodes } from "http-status-codes";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const products = await prisma.product.findMany({
    include: {
      images: true,
    },
  });

  return res.status(StatusCodes.OK).json(products);
}
