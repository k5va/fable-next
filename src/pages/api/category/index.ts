import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { StatusCodes } from "http-status-codes";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const categories = await prisma.category.findMany();

  return res.status(StatusCodes.OK).json(categories);
}
