import { StatusCodes } from "http-status-codes";
import { NextApiResponse } from "next";
import { ZodError } from "zod";
import { ServerError } from "./server-error";

export const handleServerError = (error: unknown, res: NextApiResponse) => {
  console.log(error);

  if (error instanceof ServerError) {
    return res.status(error.status).json(error.message);
  }

  if (error instanceof ZodError) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.message);
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};
