import { Document, Model, Types } from 'mongoose';
import { BatchSection } from '@/types/enum.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IBatchAttrs {
  section: string;
  startDate: Date;
  endDate: Date;
  programme: string;
  roomNumber?: number;
  block?: string;
  // TODO: Add semester object Id
  semester: number;
}

export interface IBatchDocument extends Document<IBatchAttrs> {
  id: Types.ObjectId | string;
  section: BatchSection;
  startDate: Date;
  endDate: Date;
  roomNumber: number;
  block: string;
  programme: Types.ObjectId | string | IProgrammeDocument;
  // TODO: Add semester object Id
  semester: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchModel extends Model<IBatchDocument> {}
