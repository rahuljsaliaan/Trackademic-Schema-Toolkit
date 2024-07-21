import { Document, Model } from "mongoose";
import { UserRole } from "@/types/enum.types";

export interface IUserAttrs {
  email: string;
  role: string;
  password: string;
}

export interface IUserDocument extends Document<IUserAttrs> {
  id: string;
  email: string;
  password: string;
  role: UserRole;
  isDeleted: boolean;
  _confirmPassword?: string;

  checkPassword(candidatePassword: string, password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
