import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateSubjectDTO } from '@/types/dtos/subject.dto.types';

const z = zodSchemaGenerator.getValidatorObject();

export const createSubjectSchema =
  zodSchemaGenerator.generateSchema<CreateSubjectDTO>({
    name: z
      .string()
      .regex(/^[A-Za-z][A-Za-z' -]*$/, 'Invalid Subject name format')
      .transform((name) =>
        name
          .split(' ')
          .map((word, index) =>
            word.toLowerCase() === 'of' && index !== 0
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ')
      ),
    shortName: z
      .string()
      .transform((shortName) => shortName.replace(/\s+/g, '').toUpperCase()),
    credits: z.number().int().positive(),
    totalHours: z.number().int().positive(),
    _totalMinsInClass: z.number().int().positive(),
    minAttendancePercentage: z.number().int().min(1).max(100),
    semester: z.number().int().positive(),
    subjectCode: z
      .string()
      .transform((subjectCode) => subjectCode.toUpperCase())
  });
