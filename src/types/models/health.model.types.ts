import { Document, Model, Types } from 'mongoose';

export interface IHealthAttrs {
  testName: string;
  testDepartmentName: string;
}

export interface IHealthDocument extends Document<IHealthAttrs> {
  id: Types.ObjectId;
  testName: string;
  testDepartmentName: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IHealthModel extends Model<IHealthDocument> {}
