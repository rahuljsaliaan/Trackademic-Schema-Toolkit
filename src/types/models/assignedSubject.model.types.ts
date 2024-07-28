import { Document, Model } from 'mongoose';
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
  id: string;
  subject: string | ISubjectDocument;
  batch: string | IBatchDocument;
  faculty: string | IUserDocument;
  assignedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAssignedSubjectModel
  extends Model<IAssignedSubjectDocument> {}
