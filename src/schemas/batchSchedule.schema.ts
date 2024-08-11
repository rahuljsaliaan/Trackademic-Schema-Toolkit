import { CreateBatchScheduleDTO } from '@/types/dtos/batchSchedule.dto.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { createTimeSlotSchema } from '@/schemas/timeSlot.schema';

const z = zodSchemaGenerator.getValidatorObject();

export const createBatchScheduleSchema =
  zodSchemaGenerator.generateSchema<CreateBatchScheduleDTO>({
    semester: z.number().int().positive(),
    timeSlots: z.array(createTimeSlotSchema)
  });
