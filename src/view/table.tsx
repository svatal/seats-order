import * as b from "bobril";
import { ITable } from "../data/data";
import { IPersonWithHappiness, Person } from "./person";

export interface ITableWithOccupiers extends ITable {
  occupiers: IPersonWithHappiness[];
}

export function Table({ table }: { table: ITableWithOccupiers }) {
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
        {table.occupiers.map((p) => (
          <Person person={p} />
        ))}
      </div>
    </div>
  );
}
