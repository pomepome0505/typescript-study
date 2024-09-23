import usecase from '../usecase'
import { Request, Response, NextFunction } from "express";

const errorMessage = "error occured";
const getAll = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const memos = await usecase.memo.getAll();  
    return res.status(200).send({"memos": memos});
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": errorMessage});
  }
}

const create = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const message = req.body.message ?? "";
  const checked = req.body.checked ?? false;

  try {
    await usecase.memo.create(message, checked);
    return res.status(200).send({});
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": errorMessage});
  }  
}

const update = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const id = req.params.id;
  const checked = req.body.checked;
  try {
    await usecase.memo.update(id, checked);
    return res.status(200).send({});
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": errorMessage});
  }
}

const memoDelete = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const id = req.query.id;
    if (typeof id !== 'string') {
      return res.status(400).send({"error": "idが指定されていません", "message": errorMessage})
    }
    await usecase.memo.memoDelete(id);
    return res.status(200).send({});
  } catch (e) {
    return res.status(500).send({"error": String(e), "message": errorMessage});
  }
}

export default { getAll, create, update, memoDelete };
