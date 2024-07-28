import { Document, Model } from 'mongoose';
import { IBatchDocument } from '@/types/models/batch.model.types';

export interface IBatchScheduleAttrs {
  batch: string;
  timeSubjectMap: Map<string, string>;
}

export interface IBatchScheduleDocument extends Document<IBatchScheduleAttrs> {
  id: string;
  batch: string | IBatchDocument;
  /**
   * A map where the key is the subject and the value is the time.
   * @type {Map<string, string>}
   */
  timeSubjectMap: Map<string, string>;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchScheduleModel extends Model<IBatchScheduleDocument> {}
