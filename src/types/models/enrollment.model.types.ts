import { Document, Model } from 'mongoose';
import { IUserDocument } from '@/types/models/user.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';

// TODO: change semester type to ObjectId
export interface IEnrollmentAttrs {
  student: string;
  subject: string;
  semester: number;
}

export interface IEnrollmentDocument extends Document<IEnrollmentAttrs> {
  id: string;
  student: string | IUserDocument;
  subject: string | ISubjectDocument;
  semester: number;
  enrollmentDate: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IEnrollmentModel extends Model<IEnrollmentDocument> {}
