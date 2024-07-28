import { Document, Model } from 'mongoose';
import { IBatchDocument } from '@/types/models/batch.model.types';

export interface IBatchScheduleAttrs {
  batch: string;
  schedule: Record<
    string,
    { order: number; startTime: string; endTime: string }
  >;
}

export interface IBatchScheduleDocument extends Document<IBatchScheduleAttrs> {
  id: string;
  batch: string | IBatchDocument;
  /**
   * A Record where the key is the subject and the value is the time.
   * @type {Record<string, { starTime: string; endTime: string }> }
   */
  schedule: Record<
    string,
    { order: number; startTime: string; endTime: string }
  >;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchScheduleModel extends Model<IBatchScheduleDocument> {}
