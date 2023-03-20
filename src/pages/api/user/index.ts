import { type NextApiRequest, type NextApiResponse } from "next";
import { StatusCodes } from "http-status-codes";
import { getCurrentUser } from "~/server/get-current-user";
import { handleServerError } from "~/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return handleGet(req, res);
  }

  return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
}

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, image } = await getCurrentUser(req, res);
    return res.status(StatusCodes.OK).json({ name, email, image });
  } catch (error) {
    handleServerError(error, res);
  }
};
