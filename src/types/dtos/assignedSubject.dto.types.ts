import { IBatchScheduleAttrs } from '@/types/models/batchSchedule.model.types';

export interface GetFacultyScheduleDTO {
  subject: string;
  timeSlots: Pick<IBatchScheduleAttrs, 'timeSlots'>;
}
