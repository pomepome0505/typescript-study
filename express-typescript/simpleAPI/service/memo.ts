import model from '../model';
import mongoose from 'mongoose';

const getAll = async () => {
  try {
    const memos = await model.memo.find({}) || [];
    return memos;
  } catch (e) {
    throw e;
  }
 }

const create = async (message: string, checked: boolean): Promise<void> => {
  try {
    await model.memo.create(
      {
        _id: new mongoose.Types.ObjectId(),
        message,
        checked,
      }
    );
    return;
  } catch (e) {
    throw e;
  }
}

const update = async (id: string, checked: boolean): Promise<void> => {
  if(!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid memo id");
  }
  try {
    const memo = await model.memo.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: {checked} },
      { upsert: false }
    );
    if (memo == null) {
      throw new Error("memo not found");
    }
  } catch (e) {
    throw new Error("memo not founc");
  }
}

const memoDelete = async(id: string): Promise<void> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("invalid memo id");
  }
  try {
    const memo = await model.memo.findOneAndDelete(
      { _id: new mongoose.Types.ObjectId(id)}
    )
    if (memo == null) {
      throw new Error("memo not found");
    }
  } catch (e) {
    throw e;
  }
}

 export default { getAll, create, update, memoDelete };