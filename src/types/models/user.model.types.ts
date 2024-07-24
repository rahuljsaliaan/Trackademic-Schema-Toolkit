import { Document, Model } from 'mongoose';
import { UserRole } from '@/types/enum.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { MongooseObjectId } from '@/types/utility.types';

export interface IUserAttrs {
  name: string;
  email: string;
  role: string;
  password: string;
  studentDetails?: {
    batch: string;
    registerNumber: string;
  };
}

export interface IUserDocument extends Document<IUserAttrs> {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  studentDetails?: {
    batch: MongooseObjectId | IBatchDocument;
    registerNumber: string;
  };
  _confirmPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  checkPassword(candidatePassword: string, password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
