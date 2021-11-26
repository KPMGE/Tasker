import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { GetListByIdService } from "../../services/lists/GetListByIdService";

export class GetListByIdController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const getListByIdsService = new GetListByIdService();

    try {
      const foundList = await getListByIdsService.execute(id);
      return response.json(foundList);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
