import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./features/chat/chatSlice";

const store = configureStore({
    reducer: {
        chat: chatReducer
    },
    devTools: process.env.NODE_ENV !== "production"
});

export default store;