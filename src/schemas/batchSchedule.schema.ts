import { CreateBatchScheduleDTO } from '@/types/dtos/batchSchedule.dto.types';
import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = ZodSchemaGenerator.getValidatorObject();

export const batchScheduleSchema =
  ZodSchemaGenerator.generateSchema<CreateBatchScheduleDTO>({
    timeSubjectMap: z.map(
      z.string(),
      z
        .string()
        .regex(
          /^([01]\d|2[0-3]):([0-5]\d)$/,
          'Invalid time format. Expected HH:MM'
        )
    )
  });
