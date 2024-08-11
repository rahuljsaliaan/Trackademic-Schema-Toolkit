import { CreateTimeSlotDTO } from '@/types/dtos/timeSlot.dto.types';
import { ScheduleDay } from '@/types/enum.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = zodSchemaGenerator.getValidatorObject();

const timeSchema = z
  .string()
  .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format. Expected HH:MM');

export const createTimeSlotSchema = zodSchemaGenerator
  .generateSchema<CreateTimeSlotDTO>({
    day: z.nativeEnum(ScheduleDay),
    subject: z.string(),
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
      message: 'endTime must be greater than startTime',
      path: ['endTime']
    }
  );
