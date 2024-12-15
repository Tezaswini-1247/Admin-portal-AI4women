import { GetRolesParams, useGetRolesQuery } from '../services/users';
import { FindRoles } from '../../../shared/contracts/roles';
export type AdminRole = FindRoles.Response['data'][number];
export declare const useAdminRoles: (params?: GetRolesParams, queryOptions?: Parameters<typeof useGetRolesQuery>[1]) => {
    roles: (import('..').SanitizedAdminRole & {
        usersCount?: number | undefined;
    })[];
    error: any;
    isError: any;
    isLoading: any;
    refetch: () => import('@reduxjs/toolkit/query').QueryActionCreatorResult<import('@reduxjs/toolkit/query').QueryDefinition<void | GetRolesParams, import('@reduxjs/toolkit/query').BaseQueryFn<string | import('../utils/baseQuery').QueryArguments, unknown, import('../utils/baseQuery').BaseQueryError>, "User" | "LicenseLimits" | "Role" | "RolePermissions", (import('..').SanitizedAdminRole & {
        usersCount?: number | undefined;
    })[], "adminApi">>;
};