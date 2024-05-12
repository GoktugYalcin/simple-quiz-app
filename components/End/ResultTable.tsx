import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ResultTable = () => {
  const { answers } = useSelector((store: RootState) => store.quiz);

  const getAnswer = useCallback((ansKey: number) => {
    const answerObj = answers.find(
      (answer) => Object.keys(answer)[0] === ansKey.toString(),
    );

    return answerObj ? Object.values(answerObj)[0] : "-";
  }, []);

  const allAnswers = Array.from(Array(10).keys()).map((i) => getAnswer(i));

  return (
    <div className="relative overflow-x-auto mt-6">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Soru
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Cevap
            </th>
          </tr>
        </thead>
        <tbody>
          {allAnswers.map((item, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4 text-center">{item.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
