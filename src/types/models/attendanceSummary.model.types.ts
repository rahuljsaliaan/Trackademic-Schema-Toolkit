import { Document, Model } from 'mongoose';
import { AttendanceStatus } from '@/types/enum.types';
import { IUserDocument } from '@/types/models/user.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IProgrammeDocument } from '@/types/models/programme.model.types';

export interface IAttendanceSummaryAttrs {
  faculty: string;
  subject: string;
  batch: string;
  programme: string;
  date: Date;
  attendanceRecords: { student: string; status: AttendanceStatus }[];
}

export interface IAttendanceSummaryDocument
  extends Document<IAttendanceSummaryAttrs> {
  id: string;
  faculty: string | IUserDocument;
  subject: string | ISubjectDocument;
  batch: string | IBatchDocument;
  programme: string | IProgrammeDocument;
  date: Date;
  /**
   * An array of attendance records.
   * @type {AttendanceRecord[]}
   */
  attendanceRecords: { student: string; status: AttendanceStatus }[];
  approved: boolean;
  isFreezed: boolean;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAttendanceSummaryModel
  extends Model<IAttendanceSummaryDocument> {}
