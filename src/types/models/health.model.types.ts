import { Document, Model } from 'mongoose';

export interface IHealthAttrs {
  testName: string;
  testDepartmentName: string;
}

export interface IHealthDocument extends Document<IHealthAttrs> {
  id: string;
  testName: string;
  testDepartmentName: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IHealthModel extends Model<IHealthDocument> {}
