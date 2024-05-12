import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ResultTable from "@/components/End/ResultTable";

const End = () => {
  const { answers } = useSelector((root: RootState) => root.quiz);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-2xl">Quiz bitti!</h1>
      <h2 className="font-bold text-lg">Aşağıdan sonuçları görebilirsiniz:</h2>
      <ResultTable />
    </div>
  );
};

export default End;
