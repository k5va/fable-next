import { StatusCodes } from "http-status-codes";
import { type NextApiRequest, type NextApiResponse } from "next";
import { z } from "zod";
import { getCurrentUser, handleServerError, prisma } from "~/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PATCH") {
    return handlePatch(req, res);
  }

  if (req.method === "GET") {
    return handleGet(req, res);
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}

const patchQuerySchema = z.object({
  id: z.string(),
  set: z.enum(["true", "false"]),
});

const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getCurrentUser(req, res);
    const { id, set } = patchQuerySchema.parse(req.query);
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        favoriteUsers: true,
      },
    });

    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    await prisma.product.update({
      where: {
        id,
      },
      data: {
        favoriteUsers: {
          set:
            set === "true"
              ? [
                  ...product.favoriteUsers.map((favUser) => ({
                    id: favUser.id,
                  })),
                  { id: user.id },
                ]
              : product.favoriteUsers
                  .filter(({ id }) => id !== user.id)
                  .map((favUser) => ({
                    id: favUser.id,
                  })),
        },
      },
    });

    return res.status(StatusCodes.OK).json({
      productId: product.id,
      userId: user.id,
      isFavorite: set === "true",
    });
  } catch (error) {
    handleServerError(error, res);
  }
};

const getQuerySchema = z.object({
  id: z.string(),
});

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user = await getCurrentUser(req, res);
    const { id } = getQuerySchema.parse(req.query);
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        favoriteUsers: true,
      },
    });

    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).end();
    }

    const isFavorite = product.favoriteUsers.some(({ id }) => id === user.id);

    return res
      .status(StatusCodes.OK)
      .json({ productId: product.id, userId: user.id, isFavorite });
  } catch (error) {
    handleServerError(error, res);
  }
};
