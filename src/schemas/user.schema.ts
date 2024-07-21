import { UserRole } from "@/types/enum.types";
import { toTuple } from "@/utils/helpers";
import zodSchemaGenerator from "@/utils/validators/ZodSchemaGenerator";
import { CreateUserDTO } from "@/types/dtos/user.dto.types";
const z = zodSchemaGenerator.getValidatorObject();

export const createUserSchema =
  zodSchemaGenerator.generateSchema<CreateUserDTO>({
    email: z.string().email(),
    role: z.enum(toTuple(Object.values(UserRole))),
  });
