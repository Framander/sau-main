import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// `${}`10.100.90.232
const ADDRESS = import .meta.env.VITE_ADDRESS || "localhost"
console.log();


const baseQuery = fetchBaseQuery({ baseUrl: `http://${ADDRESS}:5000/api/users`, credentials: 'include'});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: () => ({}),
});