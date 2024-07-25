import { UserRole } from '@/types/enum.types';
import { toTuple } from '@/utils/helpers';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import {
  CreateFacultyDTO,
  CreateStudentDTO
} from '@/types/dtos/user.dto.types';
const z = zodSchemaGenerator.getValidatorObject();

export const createStudentSchema =
  zodSchemaGenerator.generateSchema<CreateStudentDTO>({
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
    role: z.enum([UserRole.Student]),
    studentDetails: z.object({
      registerNumber: z
        .string()
        .transform((registerNumber) => registerNumber.toUpperCase())
    })
  });

export const createFacultySchema =
  zodSchemaGenerator.generateSchema<CreateFacultyDTO>({
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
    facultyDetails: z.object({
      designation: z.string().transform((designation) => {
        // Remove numbers
        const noNumbers = designation.replace(/\d/g, '');

        // Capitalize each word
        const capitalized = noNumbers
          .split(' ')
          .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(' ');

        return capitalized;
      })
    })
  });
