import { Document, Model, Types } from 'mongoose';
import { IUserDocument } from '@/types/models/user.model.types';
import { ITimeSlotDocument } from '@/types/models/timeSlot.model.types';

export interface IFacultyScheduleAttrs {
  faculty: string;
  timeSlots: string[];
}

export interface IFacultyScheduleDocument
  extends Document<IFacultyScheduleAttrs> {
  id: Types.ObjectId;
  faculty: Types.ObjectId | IUserDocument;
  semester: number;
  scheduled: number;
  taken: number;
  timeSlots: Types.ObjectId[] | ITimeSlotDocument[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IFacultyScheduleModel
  extends Model<IFacultyScheduleDocument> {}
