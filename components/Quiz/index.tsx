import React, { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { nextQuestion, pushAnswer } from "@/redux/slices/QuizSlice";
import clsx from "clsx";
import { useCountDown } from "ahooks";
import { iterateRoute } from "@/redux/slices/RoutesSlice";
import CountDownView from "@/components/Quiz/CountDownView";
import { AnswersProps } from "@/types/AnswerProps";

const Quiz = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { currentQuestion, questions } = useSelector(
    (state: RootState) => state.quiz,
  );

  const [targetDate, setTargetDate] = useState<number>();

  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      dispatch(nextQuestion());
      if (currentQuestion < 10) {
        setTargetDate(Date.now() + 30000);
      }
    },
  });

  const AnswerContainerClasses = clsx(
    "flex flex-col justify-center items-center gap-6 w-full",
    Math.floor(countdown / 1000) > 19 &&
      "opacity-40 pointer-events-none cursor-not-allowed",
  );

  const prepareAnswer = useCallback((order: number, answer: string) => {
    const answerPrepare: AnswersProps = {
      [order]: answer,
    };
    dispatch(pushAnswer(answerPrepare));
  }, []);

  const getCurrentQuestion = useMemo(() => {
    if (questions[currentQuestion]) {
      setTargetDate(Date.now() + 30000);
      return questions[currentQuestion];
    } else {
      dispatch(iterateRoute("end"));
    }
  }, [currentQuestion]);

  return (
    <div className=" w-full flex flex-col justify-center items-center px-[400px]">
      {!!getCurrentQuestion && (
        <>
          <h1 className="font-bold text-2xl mb-12">
            {currentQuestion + 1}:{" " + getCurrentQuestion.title + "?"}
          </h1>
          <div className={AnswerContainerClasses}>
            {getCurrentQuestion.body.map((item, index) => (
              <span
                className="w-full border-2 border-gray-300 bg-gray-400 rounded-lg flex justify-start items-center px-4 py-3 text-lg cursor-pointer"
                key={index}
                onClick={() => prepareAnswer(currentQuestion, item)}
              >
                {item}
              </span>
            ))}
          </div>
        </>
      )}
      <CountDownView countdown={countdown} />
    </div>
  );
};

export default Quiz;
