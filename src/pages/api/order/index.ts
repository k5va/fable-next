import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { createOrderSchema } from "~/schema";
import { getCurrentUser, handleServerError, prisma } from "~/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    return handlePost(req, res);
  }

  if (req.method === "GET") {
    return handleGet(req, res);
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = await getCurrentUser(req, res);
    const orders = await prisma.order.findMany({
      where: {
        email,
      },
      include: {
        productOrders: {
          include: {
            product: {
              include: {
                image: true,
                images: true,
              },
            },
          },
        },
      },
    });

    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    handleServerError(error, res);
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { productOrders, ...orderData } = await createOrderSchema.parseAsync(
      req.body
    );
    const order = await prisma.order.create({
      data: {
        ...orderData,
        productOrders: {
          createMany: {
            data: productOrders,
          },
        },
      },
      include: {
        productOrders: {
          include: {
            product: {
              include: {
                image: true,
                images: true,
              },
            },
          },
        },
      },
    });

    return res.status(StatusCodes.OK).json(order);
  } catch (error) {
    handleServerError(error, res);
  }
};
