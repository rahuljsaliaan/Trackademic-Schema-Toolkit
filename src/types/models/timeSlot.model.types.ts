import { Document, Model, Types } from 'mongoose';
import { ScheduleDay } from '@/types/enum.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';

export interface ITimeSlotAttrs {
  day: ScheduleDay;
  subject: string;
  startTime: string;
  endTime: string;
}

export interface ITimeSlotDocument extends Document<ITimeSlotAttrs> {
  id: Types.ObjectId;
  day: ScheduleDay;
  subject: Types.ObjectId | ISubjectDocument;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface ITimeSlotModel extends Model<ITimeSlotDocument> {}
