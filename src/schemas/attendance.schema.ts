import { AttendanceStatus } from '@/types/enum.types';
import { CreateAttendanceDTO } from '@/types/dtos/attendance.dto.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = zodSchemaGenerator.getValidatorObject();

export const createAttendancesSchema =
  zodSchemaGenerator.generateSchema<CreateAttendanceDTO>({
    date: z.string().transform((str) => new Date(str)),
    attendanceRecords: z.record(
      z.string(),
      z.object({ status: z.nativeEnum(AttendanceStatus) })
    )
  });
