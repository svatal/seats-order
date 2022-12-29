import * as b from "bobril";
import { seating, tableList } from "../data/model";
import { Table } from "./table";

export function App() {
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
      {tableList.map((t) => (
        <Table table={t} />
      ))}
    </div>
  );
}
