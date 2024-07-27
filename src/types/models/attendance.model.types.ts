import { Document, Model } from 'mongoose';
import { AttendanceStatus } from '@/types/enum.types';
import { IUserDocument } from '@/types/models/user.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IAttendanceAttrs {
  faculty: string;
  subject: string;
  batch: string;
  programme: string;
  date: Date;
  attendanceRecords: Map<string, AttendanceStatus>;
}

export interface IAttendanceDocument extends Document<IAttendanceAttrs> {
  id: string;
  faculty: string | IUserDocument;
  subject: string | ISubjectDocument;
  batch: string | IBatchDocument;
  programme: string | IProgrammeDocument;
  date: Date;
  attendanceRecords: Map<string, AttendanceStatus>;
  approved: boolean;
  isLocked: boolean;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAttendanceModel extends Model<IAttendanceDocument> {}
