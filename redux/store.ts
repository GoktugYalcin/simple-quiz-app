import { configureStore } from "@reduxjs/toolkit";
import routeReducer from "@/redux/slices/RoutesSlice";
import quizReducer from "@/redux/slices/QuizSlice";

export const store = configureStore({
  reducer: {
    route: routeReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
