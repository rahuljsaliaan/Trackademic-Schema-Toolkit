import { CreateBatchScheduleDTO } from '@/types/dtos/batchSchedule.dto.types';
import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = ZodSchemaGenerator.getValidatorObject();

const timeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Expected HH:MM');

export const createBatchScheduleSchema =
  ZodSchemaGenerator.generateSchema<CreateBatchScheduleDTO>({
    semester: z.number().int().positive(),
    timeSlots: z.array(
      z
        .object({
          subject: z.string(),
          startTime: timeSchema,
          endTime: timeSchema
        })
        .refine(
          (data) => {
            const [startHour, startMinute] = data.startTime
              .split(':')
              .map(Number);
            const [endHour, endMinute] = data.endTime.split(':').map(Number);
            return (
              (endHour ?? 0) > (startHour ?? 0) ||
              ((endHour ?? 0) === startHour &&
                (endMinute ?? 0) > (startMinute ?? 0))
            );
          },
          {
            message: 'endTime must be greater than startTime',
            path: ['endTime']
          }
        )
    )
  });
