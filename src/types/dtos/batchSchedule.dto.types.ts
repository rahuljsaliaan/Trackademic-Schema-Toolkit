import { IBatchScheduleAttrs } from '@/types/models/batchSchedule.model.types';
import { ITimeSlotAttrs } from '@/types/models/timeSlot.model.types';

export type CreateBatchScheduleDTO = Omit<
  IBatchScheduleAttrs,
  'batch' | 'timeSlots'
> & { timeSlots: ITimeSlotAttrs[] };
