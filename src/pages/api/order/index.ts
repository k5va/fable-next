import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "~/server/db";
import { StatusCodes } from "http-status-codes";
import { productOrderSchema } from "~/schema/product-order.schema";
import { ZodError } from "zod";

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
    console.log(error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const productOrders = await productOrderSchema.array().parseAsync(req.body);
    const order = await prisma.order.create({
      data: {
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
    console.log(error);

    if (error instanceof ZodError) {
      return res.status(StatusCodes.BAD_REQUEST).json(error.issues);
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
  }
};
