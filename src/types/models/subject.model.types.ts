import { Document, Model, Types } from 'mongoose';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface ISubjectAttrs {
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  programme: string;
  semester: number;
  subjectCode: string;
}

export interface ISubjectDocument extends Document<ISubjectAttrs> {
  id: Types.ObjectId;
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  totalNumberOfClasses: number;
  programme: Types.ObjectId | IProgrammeDocument;
  semester: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  subjectCode: string;
}

export interface ISubjectModel extends Model<ISubjectDocument> {}
