import { IBatchScheduleAttrs } from '@/types/models/batchSchedule.model.types';
import { CreateTimeSlotDTO } from '@/types/dtos/timeSlot.dto.types';

export type CreateBatchScheduleDTO = Omit<
  IBatchScheduleAttrs,
  'batch' | 'timeSlots'
> & { timeSlots: CreateTimeSlotDTO[] };
