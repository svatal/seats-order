import * as b from "bobril";
import { ITableWithOccupiers, Table } from "./table";

export function Tables({ tables }: { tables: ITableWithOccupiers[] }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: 10,
      }}
    >
      {tables.map((table) => (
        <Table table={table} />
      ))}
    </div>
  );
}
