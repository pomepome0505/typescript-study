import express, { Router } from 'express';
import memo from './memo';

const memoRouter: () => Router = () => {
  const router: Router = express.Router();
  router.get('/', memo.getAll);
  router.post('/', memo.create);
  router.patch('/:id', memo.update);
  router.delete('/', memo.memoDelete);
  return router;
}

export default { memoRouter }