import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateEnrollmentDTO } from '@/types/dtos/enrollment.dto.types';
import { MaxSemester } from '@/types';
const z = zodSchemaGenerator.getValidatorObject();

export const createEnrollmentSchema =
  zodSchemaGenerator.generateSchema<CreateEnrollmentDTO>({
    subject: z.string(),
    semester: z.number().max(MaxSemester.Default).min(1),
    enrollmentDate: z.date().refine((date) => date >= new Date(), {
      message: 'Enrollment date must be today or a future date.'
    })
  });
