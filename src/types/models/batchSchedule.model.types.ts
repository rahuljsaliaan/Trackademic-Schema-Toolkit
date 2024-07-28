import { Document, Model } from 'mongoose';
import { IBatchDocument } from '@/types/models/batch.model.types';

export interface IBatchScheduleAttrs {
  batch: string;
  semester: number;
  timeSlots: { subject: string; startTime: string; endTime: string }[];
}

export interface IBatchScheduleDocument extends Document<IBatchScheduleAttrs> {
  id: string;
  batch: string | IBatchDocument;
  semester: number;
  /**
   * An array of objects representing time slots for different subjects.
   * Each object contains the subject name, start time, and end time.
   * @type {Array<{ subject: string; startTime: string; endTime: string }>}
   */
  timeSlots: { subject: string; startTime: string; endTime: string }[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchScheduleModel extends Model<IBatchScheduleDocument> {}
