import { Document, Model, Types } from 'mongoose';
import { IUserDocument } from '@/types/models/user.model.types';
import { ISubjectDocument } from '@/types/models/subject.model.types';

// TODO: change semester type to ObjectId
export interface IEnrollmentAttrs {
  student: string;
  subject: string;
  semester: number;
}

export interface IEnrollmentDocument extends Document<IEnrollmentAttrs> {
  id: Types.ObjectId | string;
  student: Types.ObjectId | string | IUserDocument;
  subject: Types.ObjectId | string | ISubjectDocument;
  semester: number;
  enrollmentDate: Date;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  attendanceSummary: {
    averageStatus: number;
    totalPresent: number;
    totalAbsent: number;
    totalAttendanceRecords: number;
    isBelowAverage: boolean;
  };
}

export interface IEnrollmentModel extends Model<IEnrollmentDocument> {}

// #region Query and Aggregation Results

export type IStudentDetails = Pick<IUserDocument, 'email' | 'name' | 'id'> & {
  studentDetails: {
    registerNumber: NonNullable<
      IUserDocument['studentDetails']
    >['registerNumber'];
  };
};

export interface IEnrolledStudentDetails {
  studentDetails: IStudentDetails;
}

// #endregion
