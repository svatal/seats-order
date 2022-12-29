import * as b from "bobril";
import { IProp, useState } from "bobril";
import { getHappiness } from "../alg/eval";
import { peopleList } from "../data/model";
import { sum, toRecord } from "../util";
import { Tables } from "./tables";

export function App() {
  const happinessList = peopleList.map((p) => getHappiness(p.id));
  const happiness = toRecord(happinessList, (_, i) => peopleList[i].id);
  const ratio = useState(0.5);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
        gap: 20,
      }}
    >
      <Happiness happinessList={happinessList} ratio={ratio} />
      <Tables />
    </div>
  );
}

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
