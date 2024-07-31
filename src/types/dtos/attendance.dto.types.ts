import { IAttendanceAttrs } from '@/types/models/attendance.model.types';

export type CreateAttendanceDTO = Omit<
  IAttendanceAttrs,
  'subject' | 'batch' | 'faculty'
>;
