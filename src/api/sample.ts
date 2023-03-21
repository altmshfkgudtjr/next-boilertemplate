import { useQuery, useMutation } from '@tanstack/react-query';
import request from 'api';
// types
import type * as types from 'types/api/sample';

/**
 * 유저 정보
 * @query
 * @version 1
 */
export const useUserQuery = (props?: Select<types.UserQuery, 'Props'>) => {
  return useQuery<Select<types.UserQuery, 'Response'>>(
    ['useUserQuery', JSON.stringify(props)],
    () => request.get(`/api/서버별칭/v1/user/${props?.userId}`),
    { ...props?.options },
  );
};

/**
 * 로그인 신청
 * @mutation
 * @version 1
 */
export const useSignInMutation = (props?: Select<types.SignInMutation, 'Props'>) => {
  return useMutation<
    Select<types.SignInMutation, 'Response'>,
    Select<types.SignInMutation, 'Variables'>
  >(data => request.post(`/api/서버별칭/v1/auth/sign-in`, data), {
    ...props?.options,
  });
};
