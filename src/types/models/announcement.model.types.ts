import { Document, Model, Types } from 'mongoose';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IUserDocument } from '@/types/models/user.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IAnnouncementAttrs {
  announcementSubject: string;
  announcementContent: string;
  targetAudience: {
    programme?: string;
    batch?: string;
  };
  announcer: string;
}

export interface IAnnouncementDocument extends Document<IAnnouncementAttrs> {
  id: Types.ObjectId | string;
  announcementSubject: string;
  announcementContent: string;
  targetAudience: {
    programme?: Types.ObjectId | string | IProgrammeDocument;
    batch?: Types.ObjectId | string | IBatchDocument;
  };
  announcer: Types.ObjectId | string | IUserDocument;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAnnouncementModel extends Model<IAnnouncementDocument> {}
