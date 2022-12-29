import * as b from "bobril";
import { IProp } from "bobril";
import { sum } from "../util";

export function Happiness(p: {
  ratio: IProp<number>;
  happinessList: number[];
}) {
  const { ratio, happinessList } = p;
  const minHappiness = Math.min(...happinessList);
  const avgHappiness = happinessList.reduce(sum, 0) / happinessList.length;
  const r = ratio();
  const resultHappiness = r * avgHappiness + (1 - r) * minHappiness;
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={r}
          onChange={(v) => ratio(+v)}
        />
        {r.toFixed(2)}
      </div>
      <div>min happiness: {minHappiness.toFixed(2)}</div>
      <div>avg happiness: {avgHappiness.toFixed(2)}</div>
      <div>result happiness: {resultHappiness.toFixed(2)}</div>
    </div>
  );
}
