import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateBatchDTO } from '@/types/dtos/batch.dto.types';
import { toTuple } from '@/utils/helpers';
import { BatchSection } from '@/types/enum.types';
import { TrackademicSchemaConfig } from '@/config/TrackademicSchemaConfig';
const z = zodSchemaGenerator.getValidatorObject();

export const createBatchSchema = zodSchemaGenerator
  .generateSchema<CreateBatchDTO>({
    section: z.enum(toTuple(Object.values(BatchSection))),
    startDate: z.string().transform((str) => new Date(str)),
    endDate: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => date >= new Date(), {
        message: 'Enrollment date must be today or a future date.'
      }),
    semester: z
      .number()
      .max(TrackademicSchemaConfig.Academics.MAX_SEMESTER)
      .min(1)
  })
  .refine((data) => data.endDate >= data.startDate, {
    message: 'End date should not be less than start date',
    path: ['endDate']
  });
