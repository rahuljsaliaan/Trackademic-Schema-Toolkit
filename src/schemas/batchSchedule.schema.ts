import { CreateBatchScheduleDTO } from '@/types/dtos/batchSchedule.dto.types';
import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = ZodSchemaGenerator.getValidatorObject();

export const batchScheduleSchema =
  ZodSchemaGenerator.generateSchema<CreateBatchScheduleDTO>({
    schedule: z.array(
      z.object({
        subject: z.string(),
        time: z
          .string()
          .regex(
            /^([01]\d|2[0-3]):([0-5]\d)$/,
            'Invalid time format. Expected HH:MM'
          )
      })
    )
  });
