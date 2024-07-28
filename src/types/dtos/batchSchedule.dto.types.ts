import { IBatchScheduleAttrs } from '@/types/models/batchSchedule.model.types';

export type CreateBatchScheduleDTO = Omit<IBatchScheduleAttrs, 'batch'>;
