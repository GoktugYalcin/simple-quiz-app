import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { iterateRoute } from "@/redux/slices/RoutesSlice";

const Intro = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <span>Yeni bir test başlatmak için butona tıklayın.</span>
      <button
        onClick={() => dispatch(iterateRoute(null))}
        className="border-2 border-green-800 px-8 py-3 rounded-full font-medium bg-green-800 text-gray-200 active:border-green-600 active:bg-green-600 active:scale-95 active:rotate-2 transition-all"
      >
        Başla!
      </button>
    </div>
  );
};

export default Intro;
