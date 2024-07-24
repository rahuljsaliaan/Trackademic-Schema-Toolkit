import { UserRole } from '@/types/enum.types';
import { toTuple } from '@/utils/helpers';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { CreateUserDTO } from '@/types/dtos/user.dto.types';
const z = zodSchemaGenerator.getValidatorObject();

export const createUserSchema =
  zodSchemaGenerator.generateSchema<CreateUserDTO>({
    name: z
      .string()
      .regex(/^[A-Za-z][A-Za-z' -]*$/, 'Invalid name format')
      .transform((name) =>
        name
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ')
      ),
    email: z.string().email(),
    role: z.enum(toTuple(Object.values(UserRole))),
    studentDetails: z
      .object({
        batch: z.string(),
        registerNumber: z
          .string()
          .transform((registerNumber) => registerNumber.toUpperCase())
      })
      .optional()
  });
