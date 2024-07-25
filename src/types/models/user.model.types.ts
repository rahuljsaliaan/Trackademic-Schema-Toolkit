import { Document, Model } from 'mongoose';
import { UserRole } from '@/types/enum.types';
import { MongooseObjectId } from '@/types/utility.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IUserAttrs {
  name: string;
  email: string;
  role: UserRole | Omit<UserRole, 'student'>;
  password: string;
  studentDetails: {
    batch: string;
    registerNumber: string;
  };
  facultyDetails: {
    programme: string;
    designation: string;
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
  facultyDetails?: {
    programme: MongooseObjectId | IProgrammeDocument;
    designation: string;
  };
  _confirmPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  checkPassword(candidatePassword: string, password: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
