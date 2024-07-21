import { IUserAttrs, IUserDocument } from "@/types/models/user.model.types";
import { DTOFactory } from "@/types/utility.types";

export type LoginDTO = DTOFactory<
  IUserDocument,
  keyof Omit<IUserAttrs, "role">
>;

export type ResetPasswordDTO = DTOFactory<
  IUserDocument,
  keyof Pick<IUserDocument, "email" | "password" | "role" | "_confirmPassword">
>;
