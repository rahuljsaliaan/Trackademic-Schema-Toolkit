import { Document, Model } from 'mongoose';
import { ScheduleDay } from '@/types/enum.types';

export interface ITimeSlotAttrs {
  day: ScheduleDay;
  subject: string;
  startTime: string;
  endTime: string;
}

export interface ITimeSlotDocument extends Document<ITimeSlotAttrs> {
  id: string;
  day: ScheduleDay;
  subject: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface ITimeSlotModel extends Model<ITimeSlotDocument> {}
