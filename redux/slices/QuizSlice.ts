import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { QuestionProps, QuizSliceProps } from "@/types/QuizSliceProps";
import { AnswersProps } from "@/types/AnswerProps";

const initialState: QuizSliceProps = {
  questions: [],
  answers: [],
  currentQuestion: 0,
};

export const fetchQuestions = createAsyncThunk("quiz/fetch", async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await axios.get(url);
  return res.data.slice(0, 10).map((i: any) => ({
    ...i,
    body: splitStringToPieces(i.body),
  }));
});

const splitStringToPieces = (text: string) => {
  let length = text.length;
  let partLength = Math.ceil(length / 4);

  let parts: string[] = [];

  Array.from({ length: 4 }).forEach((_, index) => {
    let startIndex = index * partLength;
    let part = text.substr(startIndex, partLength);
    parts.push(part);
  });

  return parts;
};

export const quizSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<QuestionProps[]>) => {
      state.questions = action.payload;
    },
    pushAnswer: (state, action: PayloadAction<AnswersProps>) => {
      state.answers = [...current(state.answers), action.payload];
      state.currentQuestion = current(state).currentQuestion + 1;
    },
    nextQuestion: (state) => {
      state.currentQuestion = current(state).currentQuestion + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, { payload }) => {
      state.questions = payload;
    });
  },
});

export const { pushAnswer, nextQuestion } = quizSlice.actions;

export default quizSlice.reducer;
