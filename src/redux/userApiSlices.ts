import { apiSlice } from "./apiSlices";
// import { logout } from "./authSlice";
const USERS_URL = '';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data,
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }), 
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                body: data,
            }),
        }), 
        verifyCode: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/verify-code`,
                method: 'POST',
                body: data,
            }),
        }), 
        verifyOTP: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/verifyOTP`,
                method: 'POST',
                body: data,
            }),
        }), 
        solicitud_general: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/peticion/Solicitud-General`,
                method: 'POST',
                body: data,
            }),
        })
    }),
});

export const { 
    useLoginMutation, 
    useLogoutMutation, 
    useRegisterMutation, 
    useUpdateUserMutation, 
    useVerifyCodeMutation,
    useVerifyOTPMutation,
    useSolicitud_generalMutation
} = userApiSlice;
