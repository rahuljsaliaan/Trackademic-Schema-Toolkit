import { Document, Model, Types } from 'mongoose';
import { IUserDocument } from '@/types/models/user.model.types';
import { ITimeSlotDocument } from '@/types/models/timeSlot.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';
import { IAssignedSubjectDocument } from '@/types/models/assignedSubject.model.types';

export interface IFacultyScheduleAttrs {
  faculty: string;
  timeSlots: string[];
}

export interface IFacultyScheduleDocument
  extends Document<IFacultyScheduleAttrs> {
  id: Types.ObjectId | string;
  faculty: Types.ObjectId | string | IUserDocument;
  semester: number;
  timeSlots: Types.ObjectId[] | string[] | ITimeSlotDocument[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IFacultyScheduleModel
  extends Model<IFacultyScheduleDocument> {}

// #region Query and Aggregation Results

export interface IFacultyScheduleDetails {
  semester: number;
  id: string;
  timeSlot: {
    startTime: ITimeSlotDocument['startTime'];
    endTime: ITimeSlotDocument['endTime'];
    day: ITimeSlotDocument['day'];
    subject: {
      id: ISubjectDocument['id'];
      name: ISubjectDocument['name'];
    };
    batch: {
      id: IBatchDocument['id'];
      section: IBatchDocument['section'];
      roomNumber: IBatchDocument['roomNumber'];
      block: IBatchDocument['block'];
    };
    programme: {
      id: IProgrammeDocument['id'];
      shortName: IProgrammeDocument['shortName'];
    };
    note?: IAssignedSubjectDocument['note']; // Optional field
  };
}

// #endregion
