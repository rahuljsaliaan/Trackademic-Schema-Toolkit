import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateBatchDTO } from '@/types/dtos/batch.dto.types';
import { toTuple } from '@/utils/helpers';
import { BatchSection, MaxSemester } from '@/types/enum.types';
const z = zodSchemaGenerator.getValidatorObject();

export const createBatchSchema = zodSchemaGenerator
  .generateSchema<CreateBatchDTO>({
    name: z
      .string()
      .regex(/^[A-Za-z][A-Za-z' -]*$/, 'Invalid programme name format')
      .transform((name) => name.charAt(0).toUpperCase() + name.slice(1)),
    section: z.enum(toTuple(Object.values(BatchSection))),
    startDate: z.date(),
    endDate: z.date().refine((date) => date >= new Date(), {
      message: 'Enrollment date must be today or a future date.'
    }),
    semester: z.number().max(MaxSemester.Default).min(1)
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'End date should not be less than start date',
    path: ['endDate']
  });
