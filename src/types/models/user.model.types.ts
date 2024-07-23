import { Document, Model } from 'mongoose';
import { UserRole } from '@/types/enum.types';

export interface IUserAttrs {
  name: string;
  email: string;
  role: string;
  password: string;
}

export interface IUserDocument extends Document<IUserAttrs> {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  isDeleted: boolean;
  _confirmPassword?: string;

  checkPassword(candidatePassword: string, password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
