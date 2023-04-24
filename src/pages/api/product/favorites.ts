import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { getCurrentUser, handleServerError, prisma } from "~/server";

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_RECORDS_PER_PAGE = 6;

const getFavoritesSchema = z.object({
  page: z.number({ coerce: true }).positive().default(DEFAULT_PAGE_NUMBER),
  count: z
    .number({ coerce: true })
    .positive()
    .default(DEFAULT_RECORDS_PER_PAGE),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { page, count } = await getFavoritesSchema.parseAsync(req.query);
      const user = await getCurrentUser(req, res);
      const total = await prisma.product.count({
        where: {
          favoriteUsers: {
            some: {
              id: user.id,
            },
          },
        },
      });

      const products = await prisma.product.findMany({
        where: {
          favoriteUsers: {
            some: {
              id: user.id,
            },
          },
        },
        include: {
          images: true,
          image: true,
        },
        skip: (page - 1) * count,
        take: count,
      });

      return res.status(StatusCodes.OK).json({
        products,
        count: products.length,
        total,
        page,
      });
    } catch (error) {
      handleServerError(error, res);
    }
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}
