import { IUserAttrs, IUserDocument } from "@/types/models/user.model.types";
import { DTOFactory } from "@/types/utility.types";

export type CreateUserDTO = DTOFactory<
  IUserDocument,
  keyof Omit<IUserAttrs, "password">
>;
