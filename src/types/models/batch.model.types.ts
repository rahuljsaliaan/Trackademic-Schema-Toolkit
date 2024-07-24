import { Document, Model } from 'mongoose';
import { BatchSection } from '@/types/enum.types';
import { MongooseObjectId } from '@/types/utility.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IBatchAttrs {
  name: string;
  section: string;
  startDate: Date;
  endDate: Date;
  programme: string;
  // TODO: Add semester object Id
  semester: number;
}

export interface IBatchDocument extends Document<IBatchAttrs> {
  id: string;
  name: string;
  section: BatchSection;
  startDate: Date;
  endDate: Date;
  programme: MongooseObjectId | IProgrammeDocument;
  // TODO: Add semester object Id
  semester: number;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchModel extends Model<IBatchDocument> {}
