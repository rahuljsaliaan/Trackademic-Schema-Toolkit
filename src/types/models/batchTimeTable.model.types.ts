import { Document, Model } from 'mongoose';

export interface IBatchTimeTableAttrs {
  batch: string;
}

export interface IBatchTimeTableDocument
  extends Document<IBatchTimeTableAttrs> {
  id: string;
  batch: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchTimeTableModel extends Model<IBatchTimeTableDocument> {}
