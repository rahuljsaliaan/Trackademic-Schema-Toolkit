import { Document, Model } from 'mongoose';

export interface IAssignedSubjectAttrs {
  subject: string;
  batch: string;
  faculty: string;
}

export interface IAssignedSubjectDocument
  extends Document<IAssignedSubjectAttrs> {
  id: string;
  subject: string;
  batch: string;
  faculty: string;
  assignedDate: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAssignedSubjectModel
  extends Model<IAssignedSubjectDocument> {}
