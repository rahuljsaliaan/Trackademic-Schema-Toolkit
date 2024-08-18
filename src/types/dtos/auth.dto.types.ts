import { IUserAttrs, IUserDocument } from '@/types/models/user.model.types';
import { DTOFactory } from '@/types/utility.types';

export type LoginDTO = DTOFactory<
  IUserDocument,
  keyof Omit<IUserAttrs, 'name' | 'role' | 'programme'>
>;

export type VerifyOTPDTO = {
  email: IUserAttrs['email'];
  otp: number;
};

export type ResetPasswordDTO = DTOFactory<
  IUserDocument,
  keyof Pick<IUserDocument, 'email' | 'password' | '_confirmPassword'>
> & { verificationToken: string };
