import { Document, Model } from 'mongoose';
import { UserRole } from '@/types/enum.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IUserAttrs {
  name: string;
  email: string;
  role: UserRole | Omit<UserRole, 'student'>;
  password: string;
  programme: string;
  studentDetails: {
    batch: string;
    registerNumber: string;
  };
  facultyDetails: {
    designation: string;
  };
}

export interface IUserDocument extends Document<IUserAttrs> {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  programme: string | IProgrammeDocument;
  studentDetails?: {
    batch: string | IBatchDocument;
    registerNumber: string;
  };
  facultyDetails?: {
    designation: string;
  };
  _confirmPassword?: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  checkPassword(candidatePassword: string): Promise<boolean>;
}

export interface IUserModel extends Model<IUserDocument> {}
