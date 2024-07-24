import { IUserAttrs } from '@/types/models/user.model.types';

export type CreateUserDTO = Omit<IUserAttrs, 'password'>;
