import React from "react";
import { TimeframeButton } from "../ui/TimeframeButton";

interface TimeframeColumnProps {
  activeTimeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

export const TimeframeColumn: React.FC<TimeframeColumnProps> = ({
  activeTimeframe,
  onTimeframeChange,
}) => {
  const timeframes = ["1d", "1h", "4h", "1m", "5m", "15m", "30m", "1w"];

  return (
    <div className="flex flex-col gap-4 justify-center items-stretch">
      {timeframes.map((timeframe) => (
        <TimeframeButton
          key={timeframe}
          content={timeframe}
          active={activeTimeframe === timeframe}
          onClick={() => onTimeframeChange(timeframe)}
        />
      ))}
    </div>
  );
};
