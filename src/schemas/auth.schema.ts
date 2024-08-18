import ZodSchemaGenerator from '@/utils/validators/ZodSchemaGenerator';
import { LoginDTO, ResetPasswordDTO } from '@/types/dtos/auth.dto.types';
import { TrackademicSchemaConfig } from '@/config/TrackademicSchemaConfig';
import { emailSchema } from '@/schemas/user.schema';

const z = ZodSchemaGenerator.getValidatorObject();

const passwordSchema = z
  .string()
  .min(TrackademicSchemaConfig.Auth.PASSWORD_MIN_LENGTH, {
    message: `Password must be at least ${TrackademicSchemaConfig.Auth.PASSWORD_MIN_LENGTH} characters long`
  })
  .max(TrackademicSchemaConfig.Auth.PASSWORD_MAX_LENGTH, {
    message: `Password must be less than ${TrackademicSchemaConfig.Auth.PASSWORD_MAX_LENGTH} characters long`
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
  email: emailSchema,
  password: z.string()
});

export const resetPasswordSchema =
  ZodSchemaGenerator.generateSchema<ResetPasswordDTO>({
    email: emailSchema,
    otp: z.string().min(TrackademicSchemaConfig.Auth.OTP_SIZE).max(TrackademicSchemaConfig.Auth.OTP_SIZE),
    password: passwordSchema,
    _confirmPassword: passwordSchema
  }).refine((data) => data.password === data._confirmPassword, {
    message: 'Passwords must match',
    path: ['_confirmPassword']
  });
