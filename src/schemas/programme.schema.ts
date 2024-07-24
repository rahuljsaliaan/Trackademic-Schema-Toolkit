import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateProgrammeDTO } from '@/types/dtos/programme.dto.types';
const z = zodSchemaGenerator.getValidatorObject();

export const createProgrammeSchema =
  zodSchemaGenerator.generateSchema<CreateProgrammeDTO>({
    name: z
      .string()
      .regex(/^[A-Za-z][A-Za-z' -]*$/, 'Invalid programme name format')
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
    description: z
      .string()
      .transform(
        (description) =>
          description.trim().charAt(0).toUpperCase() + description.slice(1)
      )
  });
