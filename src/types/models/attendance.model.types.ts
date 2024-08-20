import { Document, Model, Types } from 'mongoose';
import { AttendanceStatus } from '@/types/enum.types';
import { IUserDocument } from '@/types/models/user.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { IBatchDocument } from '@/types/models/batch.model.types';
import { IStudentDetails } from '@/types/models/enrollment.model.types';

export interface IAttendanceAttrs {
  faculty: string;
  subject: string;
  batch: string;
  date: Date;
  attendanceRecords: Map<string, { status: AttendanceStatus }>;
}

export interface IAttendanceDocument extends Document<IAttendanceAttrs> {
  id: Types.ObjectId | string;
  faculty: Types.ObjectId | IUserDocument;
  subject: Types.ObjectId | ISubjectDocument;
  batch: Types.ObjectId | IBatchDocument;
  date: Date;
  /**
   * A map of attendance records where the key is the student ID.
   * @type {Map<string, AttendanceStatus>}
   */
  attendanceRecords: Map<Types.ObjectId, { status: AttendanceStatus }>;
  approved: boolean;
  isFreezed: boolean;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IAttendanceModel extends Model<IAttendanceDocument> {}

// #region Query and Aggregation Results
export interface IAbsentRecords {
  id: IStudentDetails['id'];
  absentRecords: {
    status: AttendanceStatus.Absent;
    date: Date;
  }[];
}

export interface IAttendanceStatsResult {
  averageStatus: number;
  totalApproved: number;
  totalNotApproved: number;
  totalAttendanceRecords: number;
  subject: Pick<
    ISubjectDocument,
    'id' | 'name' | 'shortName' | 'subjectCode' | 'semester'
  >;
}

export interface IAttendanceStats {
  overallAverageStatus: number;
  results: IAttendanceStatsResult[];
  message: string;
}

// #endregion
