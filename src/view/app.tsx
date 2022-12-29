import * as b from "bobril";
import { useState } from "bobril";
import { getHappiness } from "../alg/eval";
import { peopleList, seating, tableList } from "../data/model";
import { Happiness } from "./happiness";
import { Tables } from "./tables";

export function App() {
  const peopleWithHappiness = peopleList.map((p) => ({
    ...p,
    happiness: getHappiness(p.id),
  }));
  const ratio = useState(0.5);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
        gap: 20,
      }}
    >
      <Happiness
        happinessList={peopleWithHappiness.map((p) => p.happiness)}
        ratio={ratio}
      />
      <Tables
        tables={tableList.map((t) => ({
          ...t,
          occupiers: peopleWithHappiness.filter((p) => seating[p.id] === t.id),
        }))}
      />
    </div>
  );
}
