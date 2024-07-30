import { UserRole } from '@/types/enum.types';
import zodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import {
  AssignStudentsToBatchDTO,
  CreateFacultyDTO,
  CreateStudentDTO,
  UpdateStudentDTO
} from '@/types/dtos/user.dto.types';

const z = zodSchemaGenerator.getValidatorObject();

// Reusable validation schemas
const nameSchema = z
  .string()
  .regex(/^[A-Za-z][A-Za-z' -]*$/, 'Invalid name format')
  .transform((name) =>
    name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  );

export const emailSchema = z.string().email();

const facultyDetailsSchema = z.object({
  designation: z.string().transform((designation) => {
    // Remove numbers
    const noNumbers = designation.replace(/\d/g, '');

    // Capitalize each word
    const capitalized = noNumbers
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    return capitalized;
  })
});

export const createStudentSchema =
  zodSchemaGenerator.generateSchema<CreateStudentDTO>({
    name: nameSchema,
    email: emailSchema
  });

export const assignStudentsToBatchSchema =
  zodSchemaGenerator.generateSchema<AssignStudentsToBatchDTO>({
    students: z.array(z.string())
  });

export const updateStudentSchema =
  zodSchemaGenerator.generateSchema<UpdateStudentDTO>({
    name: nameSchema.optional(),
    email: emailSchema.optional(),
    studentDetails: z
      .object({
        batch: z.string().optional(),
        registerNumber: z.string().optional()
      })
      .optional()
  });

export const createFacultySchema =
  zodSchemaGenerator.generateSchema<CreateFacultyDTO>({
    name: nameSchema,
    email: emailSchema,
    role: z.nativeEnum(UserRole),
    facultyDetails: facultyDetailsSchema
  });
