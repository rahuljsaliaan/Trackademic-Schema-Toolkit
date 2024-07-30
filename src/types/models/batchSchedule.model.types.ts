import { Model, Document } from 'mongoose';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { ITimeSlotDocument } from '@/types/models/timeSlot.model.types';

export interface IBatchScheduleAttrs {
  batch: string;
  semester: number;
  timeSlots: string[];
}

export interface IBatchScheduleDocument extends Document<IBatchScheduleAttrs> {
  id: string;
  batch: string | IBatchDocument;
  semester: number;
  timeSlots: string[] | ITimeSlotDocument[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IBatchScheduleModel extends Model<IBatchScheduleDocument> {}
