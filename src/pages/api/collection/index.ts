import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { StatusCodes } from "http-status-codes";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const collections = await prisma.collection.findMany();

  return res.status(StatusCodes.OK).json(collections);
}
