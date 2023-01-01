import * as b from "bobril";
import { IProp } from "bobril";
import { getResultHappiness } from "../alg/eval";

export function Happiness(p: {
  ratio: IProp<number>;
  happinessList: number[];
}) {
  const { ratio, happinessList } = p;
  const r = ratio();
  const { minHappiness, avgHappiness, resultHappiness } = getResultHappiness(
    happinessList,
    r
  );
  return (
    <div>
      <div>
        avg {r.toFixed(2)}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={r}
          onChange={(v) => ratio(+v)}
        />
        {(1 - r).toFixed(2)} min
      </div>
      <div>min happiness: {minHappiness.toFixed(2)}</div>
      <div>avg happiness: {avgHappiness.toFixed(2)}</div>
      <div>result happiness: {resultHappiness.toFixed(2)}</div>
    </div>
  );
}
