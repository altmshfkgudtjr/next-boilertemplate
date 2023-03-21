// types
import type { BaseQuery, BaseMutation } from 'types/api';

export type UserQuery = BaseQuery<
  {
    userId: string;
  },
  {
    userId: string;
    name: string;
    email: string;
    phone: string;
  }
>;

export type SignInMutation = BaseMutation<
  {
    id: string;
    password: string;
  },
  boolean
>;
