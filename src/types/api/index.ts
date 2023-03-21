import type { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import type { AxiosError, DefaultResponse } from 'axios';

type QueryOptions<Response> = UseQueryOptions<
  DefaultResponse<Response>,
  AxiosError,
  DefaultResponse<Response>
>;

type MutationOptions<Props, Response> = UseMutationOptions<
  DefaultResponse<Response>,
  AxiosError,
  Props
>;
type MutationProps<Props, Response> = {
  options?: MutationOptions<Props, Response>;
};

/**
 * Query Type Group
 * @template PropsType API 인자
 * - 받지 않아도 된다면, `{}` 를 넣어주세요.
 * @template ResponseType API 반환 데이터
 * - 의미가 없는 반환값은 `never`을 넣어주세요.
 */
export type BaseQuery<PropsType, ResponseType> = {
  Props:
    | Resolve<
        PropsType & {
          options?: QueryOptions<ResponseType>;
        }
      >
    | undefined;
  Response: DefaultResponse<ResponseType>;
  Options: QueryOptions<ResponseType>;
};

/**
 * Mutation Type Group
 * @template VariableType API 실행 인자
 * @template ResponseType API 반환 데이터
 * @template PropsType API 인자
 */
export type BaseMutation<VariableType, ResponseType, PropsType = {}> = {
  Variables: Resolve<VariableType>;
  Response: DefaultResponse<ResponseType>;
  Props?: Resolve<PropsType & MutationProps<VariableType, ResponseType>>;
};

/**
 * API Error Response
 */
export type ErrResponse = {
  error: {
    code: string;
    message: string;
  };
};
