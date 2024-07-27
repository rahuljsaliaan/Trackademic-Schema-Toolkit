import { Document, Model } from 'mongoose';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface ISubjectAttrs {
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  programme: string;
  // TODO: Add ObjectId for the semester
  semester: number;
}

export interface ISubjectDocument extends Document<ISubjectAttrs> {
  id: string;
  name: string;
  shortName: string;
  credits: number;
  totalHours: number;
  _totalMinsInClass: number;
  totalNumberOfClasses: number;
  programme: string | IProgrammeDocument;
  // TODO: Add ObjectId for the semester
  semester: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface ISubjectModel extends Model<ISubjectDocument> {}
