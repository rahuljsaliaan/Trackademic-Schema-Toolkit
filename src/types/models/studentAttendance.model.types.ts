import { Document, Model } from 'mongoose';
import { ISubjectDocument } from '@/types/models/subject.model.types';
import { AttendanceStatus } from '@/types/enum.types';

export interface IStudentAttendanceAttrs {
  subject: string;
  student: string;
  records: { date: Date; status: AttendanceStatus }[];
}

export interface IStudentAttendanceDocument
  extends Document<IStudentAttendanceAttrs> {
  id: string;
  subject: string | ISubjectDocument;
  student: string | ISubjectDocument;
  records: { date: Date; status: AttendanceStatus }[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

export interface IStudentAttendanceModel
  extends Model<IStudentAttendanceDocument> {}
