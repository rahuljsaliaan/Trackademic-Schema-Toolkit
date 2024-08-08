import { AddOrUpdateNoteDTO } from '@/types/dtos/assignedSubject.dto.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';

const z = zodSchemaGenerator.getValidatorObject();

export const addOrUpdateNote =
  zodSchemaGenerator.generateSchema<AddOrUpdateNoteDTO>({
    note: z
      .string()
      .optional()
      .refine((val) => !val || val.length <= 100, {
        message: 'Note must be at most 100 characters long'
      })
  });
