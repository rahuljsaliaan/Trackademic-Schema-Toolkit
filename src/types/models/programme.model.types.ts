import { Document, Model } from 'mongoose';

export interface IProgrammeAttrs {
  name: string;
  shortName: string;
  description: string;
}

export interface IProgrammeDocument extends Document<IProgrammeAttrs> {
  name: string;
  shortName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IProgrammeModel extends Model<IProgrammeDocument> {}
