import '@tanstack/react-query';
// types
import type { AxiosError } from 'axios';
import type {
  /** Query Types */
  QueryFunction,
  QueryKey,
  DefinedUseQueryResult,
  UseQueryOptions,
  UseQueryResult,
  /** Mutations Types */
  MutationFunction,
  MutationKey,
  UseMutationOptions,
  UseMutationResult,
} from '@tanstack/react-query';
import { ErrResponse } from 'types/api';

declare module '@tanstack/react-query' {
  //////////////
  // useQuery //
  //////////////
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'initialData'> & {
      initialData?: () => undefined;
    },
  ): UseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: Omit<UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>, 'initialData'> & {
      initialData: TQueryFnData | (() => TQueryFnData);
    },
  ): DefinedUseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
  ): UseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryKey' | 'initialData'
    > & {
      initialData?: () => undefined;
    },
  ): UseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryKey' | 'initialData'
    > & {
      initialData: TQueryFnData | (() => TQueryFnData);
    },
  ): DefinedUseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    options?: Omit<UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>, 'queryKey'>,
  ): UseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryKey' | 'queryFn' | 'initialData'
    > & {
      initialData?: () => undefined;
    },
  ): UseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryKey' | 'queryFn' | 'initialData'
    > & {
      initialData: TQueryFnData | (() => TQueryFnData);
    },
  ): DefinedUseQueryResult<TData, AxiosError>;
  export declare function useQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
      UseQueryOptions<TQueryFnData, AxiosError, TData, TQueryKey>,
      'queryKey' | 'queryFn'
    >,
  ): UseQueryResult<TData, AxiosError>;

  /////////////////
  // useMutation //
  /////////////////
  export declare function useMutation<TData = unknown, TVariables = void, TContext = unknown>(
    options: UseMutationOptions<TData, AxiosError, TVariables, TContext>,
  ): UseMutationResult<TData, AxiosError<ErrResponse, any>, TVariables, TContext>;
  export declare function useMutation<TData = unknown, TVariables = void, TContext = unknown>(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: Omit<UseMutationOptions<TData, AxiosError, TVariables, TContext>, 'mutationFn'>,
  ): UseMutationResult<TData, AxiosError<ErrResponse, any>, TVariables, TContext>;
  export declare function useMutation<TData = unknown, TVariables = void, TContext = unknown>(
    mutationKey: MutationKey,
    options?: Omit<UseMutationOptions<TData, AxiosError, TVariables, TContext>, 'mutationKey'>,
  ): UseMutationResult<TData, AxiosError<ErrResponse, any>, TVariables, TContext>;
  export declare function useMutation<TData = unknown, TVariables = void, TContext = unknown>(
    mutationKey: MutationKey,
    mutationFn?: MutationFunction<TData, TVariables>,
    options?: Omit<
      UseMutationOptions<TData, AxiosError, TVariables, TContext>,
      'mutationKey' | 'mutationFn'
    >,
  ): UseMutationResult<TData, AxiosError<ErrResponse, any>, TVariables, TContext>;

  //////////////////////
  // useInfiniteQuery //
  //////////////////////
  export declare function useInfiniteQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    options: UseInfiniteQueryOptions<TQueryFnData, AxiosError, TData, TQueryFnData, TQueryKey>,
  ): UseInfiniteQueryResult<TData, AxiosError>;
  export declare function useInfiniteQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    options?: Omit<
      UseInfiniteQueryOptions<TQueryFnData, AxiosError, TData, TQueryFnData, TQueryKey>,
      'queryKey'
    >,
  ): UseInfiniteQueryResult<TData, AxiosError>;
  export declare function useInfiniteQuery<
    TQueryFnData = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
  >(
    queryKey: TQueryKey,
    queryFn: QueryFunction<TQueryFnData, TQueryKey>,
    options?: Omit<
      UseInfiniteQueryOptions<TQueryFnData, AxiosError, TData, TQueryFnData, TQueryKey>,
      'queryKey' | 'queryFn'
    >,
  ): UseInfiniteQueryResult<TData, AxiosError>;
}
