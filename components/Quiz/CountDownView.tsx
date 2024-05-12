import React from "react";
import { CountDownViewProps } from "@/types/QuizProps";

const CountDownView: React.FC<CountDownViewProps> = ({ countdown }) => {
  return (
    countdown > 0 && (
      <div className="mt-6 text-md font-medium text-orange-600 flex justify-center items-center gap-2">
        Kalan Zaman:{" "}
        <span className="font-extrabold text-lg">
          {Math.floor(countdown / 1000) + 1}
        </span>
      </div>
    )
  );
};

export default CountDownView;
