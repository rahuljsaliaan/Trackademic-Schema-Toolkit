import { CreateBatchScheduleDTO } from '@/types/dtos/batchSchedule.dto.types';
import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = ZodSchemaGenerator.getValidatorObject();

const timeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Expected HH:MM');

const scheduleSchema = z
  .object({
    order: z.number().positive(),
    startTime: timeSchema,
    endTime: timeSchema
  })
  .refine(
    (data) => {
      const [startHour, startMinute] = data.startTime.split(':').map(Number);
      const [endHour, endMinute] = data.endTime.split(':').map(Number);
      return (
        (endHour ?? 0) > (startHour ?? 0) ||
        ((endHour ?? 0) === startHour && (endMinute ?? 0) > (startMinute ?? 0))
      );
    },
    {
      message: 'endTime must be greater than starTime',
      path: ['endTime']
    }
  );

export const createBatchScheduleSchema =
  ZodSchemaGenerator.generateSchema<CreateBatchScheduleDTO>({
    schedule: z.record(z.string(), scheduleSchema).refine(
      (schedules) => {
        const orders = Object.values(schedules).map(
          (schedule) => schedule.order
        );
        return orders.every((order, index) => order === index + 1);
      },
      {
        message:
          'Order must be incremental and based on the position within the map',
        path: ['schedule']
      }
    )
  });
