import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

const AnalysisCard = (
  {
    title,
    amount,
    desc,
  }: {
    title: string;
    amount: number;
    desc: string;
  }
) => {
  const percentage = 66;

  return (
    <div className="flex flex-col items-start bg-foreground p-4 gap-2 rounded">
      <h2 className="text-md">{title}</h2>
      <h1 className=" font-semibold lg:text-3xl sm:text-2xl text-xl">{amount}</h1>
      <div className="flex">
        <h4 className="text-sm font-[200]">{desc}</h4>
      </div>
    </div>
  );
};

export default AnalysisCard;
