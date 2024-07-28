import { IAttendanceSummaryAttrs } from '@/types/models/attendanceSummary.model.types';

export type CreateAttendanceDTO = Omit<
  IAttendanceSummaryAttrs,
  'subject' | 'programme' | 'batch' | 'faculty'
>;
