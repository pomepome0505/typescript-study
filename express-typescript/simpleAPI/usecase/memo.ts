import service from '../service';

const getAll = async () => {
  try {
    const memos = await service.memo.getAll();
    return memos;
  } catch (e) {
    throw e;
  }
}

const create = async(message: string, checked: boolean): Promise<void> => {
  try {
    await service.memo.create(message, checked);
  } catch (e) {
    throw e;
  }
}

const update = async (id: string, checked: boolean) => {
  try {
    await service.memo.update(id, checked);
  } catch (e) {
    throw e;
  }
}

const memoDelete = async(id: string): Promise<void> => {
  try {
    service.memo.memoDelete(id);
  } catch (e) {
    throw e;
  }
}

export default { getAll, create, update, memoDelete };