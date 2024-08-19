import { IAttendanceAttrs } from '@/types/models/attendance.model.types';
import { AttendanceStatus } from '@/types/enum.types';

export type CreateAttendanceDTO = Omit<
  IAttendanceAttrs,
  'subject' | 'batch' | 'faculty' | 'date' | 'attendanceRecords'
> & { date: string | Date } & {
  attendanceRecords: Record<string, { status: AttendanceStatus }>;
};
