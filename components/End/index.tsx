import React from "react";
import ResultTable from "@/components/End/ResultTable";

const End = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-2xl">Quiz bitti!</h1>
      <h2 className="font-bold text-lg">Aşağıdan sonuçları görebilirsiniz:</h2>
      <ResultTable />
    </div>
  );
};

export default End;
