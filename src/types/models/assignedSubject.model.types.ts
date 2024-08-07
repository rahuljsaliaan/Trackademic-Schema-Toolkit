import { Document, Model, Types } from 'mongoose';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IUserDocument } from '@/types/models/user.model.types';

export interface IAssignedSubjectAttrs {
  subject: string;
  batch: string;
  faculty: string;
}

export interface IAssignedSubjectDocument
  extends Document<IAssignedSubjectAttrs> {
  id: Types.ObjectId | string;
  subject: Types.ObjectId | string | ISubjectDocument;
  batch: Types.ObjectId | string | IBatchDocument;
  faculty: Types.ObjectId | string | IUserDocument;
  assignedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAssignedSubjectModel
  extends Model<IAssignedSubjectDocument> {}
