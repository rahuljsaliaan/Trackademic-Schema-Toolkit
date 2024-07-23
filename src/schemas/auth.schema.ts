import { PasswordSettings, UserRole } from '@/types/enum.types';
import { toTuple } from '@/utils/helpers';
import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { LoginDTO, ResetPasswordDTO } from '@/types/dtos/auth.dto.types';
const z = ZodSchemaGenerator.getValidatorObject();

// Directly using environment variables with fallbacks
const passwordValidation = z
  .string()
  .min(PasswordSettings.MaxPasswordLength, {
    message: `Password must be at least ${PasswordSettings.MinPasswordLength} characters long`
  })
  .max(PasswordSettings.MaxPasswordLength, {
    message: `Password must be less than ${PasswordSettings.MaxPasswordLength} characters long`
  })
  .regex(/[A-Z]/, {
    message: 'Password must contain at least one uppercase letter'
  })
  .regex(/[a-z]/, {
    message: 'Password must contain at least one lowercase letter'
  })
  .regex(/[0-9]/, { message: 'Password must contain at least one number' })
  .regex(/[\W_]/, {
    message: 'Password must contain at least one special character'
  });

export const loginSchema = ZodSchemaGenerator.generateSchema<LoginDTO>({
  email: z.string().email(),
  password: z.string()
});

export const resetPasswordSchema =
  ZodSchemaGenerator.generateSchema<ResetPasswordDTO>({
    email: z.string().email(),
    role: z.enum(toTuple(Object.values(UserRole))),
    password: passwordValidation,
    _confirmPassword: passwordValidation
  }).refine((data) => data.password === data._confirmPassword, {
    message: 'Passwords must match',
    path: ['_confirmPassword']
  });
