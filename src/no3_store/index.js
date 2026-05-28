import { configureStore } from "@reduxjs/toolkit";
import todo from "./slice/todoSlice";
import user from "./slice/userSlice";
import emp from "./slice/employeeSlice"

const store = configureStore({
    reducer: {
        todo, user, emp
    }
})

export default store;