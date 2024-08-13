import { Document, Model, Types } from 'mongoose';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface ISubjectAttrs {
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  minAttendancePercentage: number;
  programme: string;
  semester: number;
  subjectCode: string;
}

export interface ISubjectDocument extends Document<ISubjectAttrs> {
  id: Types.ObjectId | string;
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  totalNumberOfClasses: number;
  minAttendancePercentage: number;
  programme: Types.ObjectId | string | IProgrammeDocument;
  semester: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  subjectCode: string;
}

export interface ISubjectModel extends Model<ISubjectDocument> {}
