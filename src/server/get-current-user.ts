import { StatusCodes } from "http-status-codes";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
import { prisma } from "./db";
import { ServerError } from "./server-error";

export const getCurrentUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user.email) {
    throw new ServerError("Not signed in", StatusCodes.UNAUTHORIZED);
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new ServerError("User not found", StatusCodes.UNAUTHORIZED);
  }

  return user;
};
