import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";
import { yandexApi } from "./api/yandexApi";
import { subscribersApi } from "./api/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [yandexApi.reducerPath]: yandexApi.reducer,
    [subscribersApi.reducerPath]: subscribersApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, postApi.middleware, yandexApi.middleware, subscribersApi.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


