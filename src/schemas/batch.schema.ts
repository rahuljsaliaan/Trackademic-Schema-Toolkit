import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateBatchDTO } from '@/types/dtos/batch.dto.types';
import { BatchSection } from '@/types/enum.types';
import { TrackademicSchemaConfig } from '@/config/TrackademicSchemaConfig';

const z = zodSchemaGenerator.getValidatorObject();

export const createBatchSchema = zodSchemaGenerator
  .generateSchema<CreateBatchDTO>({
    section: z.nativeEnum(BatchSection),
    startDate: z.string().transform((str) => new Date(str)),
    roomNumber: z
      .number()
      .optional()
      .refine((value) => value === undefined || value >= 1, {
        message: 'Room number must be greater than or equal to 1.'
      }),
    block: z
      .string()
      .optional()
      .transform((str) => str?.toUpperCase()),
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
