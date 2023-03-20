import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { orderSchema } from "~/schema";
import { handleServerError, prisma } from "~/server";

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

const handleGet = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        productOrders: true,
      },
    });

    return res.status(StatusCodes.OK).json(orders);
  } catch (error) {
    handleServerError(error, res);
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { productOrders, ...orderData } = await orderSchema.parseAsync(
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
        productOrders: true,
      },
    });

    return res.status(StatusCodes.OK).json(order);
  } catch (error) {
    handleServerError(error, res);
  }
};
