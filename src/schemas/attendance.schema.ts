// import { AttendanceStatus } from '@/types/enum.types';
import { AttendanceStatus } from '@/types/enum.types';
import { CreateAttendanceDTO } from '@/types/dtos/attendanceSummary.dto.types';
import { toTuple } from '@/utils/helpers';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = zodSchemaGenerator.getValidatorObject();

export const createAttendancesSchema =
  zodSchemaGenerator.generateSchema<CreateAttendanceDTO>({
    date: z.date(),
    attendanceRecords: z.array(
      z.object({
        student: z.string(),
        status: z.enum(toTuple(Object.values(AttendanceStatus)))
      })
    )
  });
