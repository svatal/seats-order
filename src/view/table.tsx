import * as b from "bobril";
import { getHappiness } from "../alg/eval";
import { ITable } from "../data/data";
import { peopleList, seating } from "../data/model";
import { Person } from "./person";

export function Table({ table }: { table: ITable }) {
  const persons = peopleList.filter((p) => seating[p.id] === table.id);
  return (
    <div
      style={{
        width: 100,
        backgroundColor: "lightGray",
      }}
    >
      <div style={{ height: 20 }}>Table #{table.id}</div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: `repeat(${table.seatCount}, 20px)`,
          gridTemplateColumns: "1fr",
          gap: 2,
        }}
      >
        {persons.map((p) => (
          <Person person={p} happiness={getHappiness(p.id)} />
        ))}
      </div>
    </div>
  );
}
