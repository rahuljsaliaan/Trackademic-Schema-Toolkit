import { Document, Model, Types } from 'mongoose';

export interface IProgrammeAttrs {
  name: string;
  shortName: string;
  description: string;
}

export interface IProgrammeDocument extends Document<IProgrammeAttrs> {
  id: Types.ObjectId;
  name: string;
  shortName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IProgrammeModel extends Model<IProgrammeDocument> {}
