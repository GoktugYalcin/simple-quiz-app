import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchQuestions } from "@/redux/slices/QuizSlice";

export type RouteType = "intro" | "quiz" | "end" | null;

export type RouteProps = {
  type: RouteType;
  pageNumber?: number;
};
export interface RouteStateProps {
  currentRoute: RouteProps;
  loading: boolean;
}

const initialState: RouteStateProps = {
  currentRoute: {
    type: "intro",
  },
  loading: true,
};

const decideNextStep = (current: string) => {
  switch (current) {
    case "intro":
      return "quiz";
    case "quiz":
      return "end";
    default:
      return "intro";
  }
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    iterateRoute: (state, action: PayloadAction<RouteType>) => {
      const newStep = action.payload
        ? action.payload
        : decideNextStep(state.currentRoute.type!);
      state.currentRoute = {
        type: newStep,
        pageNumber: newStep === "quiz" ? 0 : undefined,
      };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {
      state.currentRoute = {
        type: "intro",
        pageNumber: 0,
      };
      state.loading = false;
    });
  },
});

export const { setLoading, iterateRoute } = routeSlice.actions;

export default routeSlice.reducer;
