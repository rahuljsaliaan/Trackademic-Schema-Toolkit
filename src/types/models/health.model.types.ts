import { Document, Model } from "mongoose";

export interface IHealthAttrs {
  testName: string;
  testDepartmentName: string;
}

export interface IHealthDocument extends Document<IHealthAttrs> {
  testName: string;
  testDepartmentName: string;
  isDeleted: boolean;
}

export interface IHealthModel extends Model<IHealthDocument> {}
