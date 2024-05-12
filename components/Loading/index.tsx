"use client";

import React, { useEffect } from "react";
import Lottie from "lottie-react";
import LoadingAnim from "@/assets/LoadingAnimation.json";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchQuestions } from "@/redux/slices/QuizSlice";

const Loading = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((store: RootState) => store.route);

  useEffect(() => {
    if (loading) {
      dispatch(fetchQuestions());
    }
  }, [loading]);

  return (
    <div className="flex flex-col justify-center items-center gap-8 select-none">
      <span className="font-bold">Loading...</span>
    </div>
  );
};

export default Loading;
