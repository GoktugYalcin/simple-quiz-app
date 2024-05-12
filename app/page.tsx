"use client";

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import Loading from "@/components/Loading";
import { useEffect } from "react";
import { fetchQuestions } from "@/redux/slices/QuizSlice";
import Quiz from "@/components/Quiz";
import End from "@/components/End";

export default function Home() {
  const { loading, currentRoute } = useSelector(
    (store: RootState) => store.route,
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <Header title="Quiz App!" />
      {loading ? (
        <Loading />
      ) : currentRoute.type === "quiz" ? (
        <Quiz />
      ) : currentRoute.type === "end" ? (
        <End />
      ) : (
        <Intro />
      )}
    </main>
  );
}
