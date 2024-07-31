import { AttendanceStatus } from '@/types/enum.types';
import { CreateAttendanceDTO } from '@/types/dtos/attendance.dto.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = zodSchemaGenerator.getValidatorObject();

export const createAttendancesSchema =
  zodSchemaGenerator.generateSchema<CreateAttendanceDTO>({
    date: z.date(),
    attendanceRecords: z.map(z.string(), z.nativeEnum(AttendanceStatus))
  });
