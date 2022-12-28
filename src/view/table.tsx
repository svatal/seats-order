import * as b from "bobril";
import { getHappiness } from "../alg/eval";
import { ITable } from "../data/data";
import { peopleList, seating } from "../data/model";

export function Table({ table }: { table: ITable }) {
  const persons = peopleList.filter((p) => seating[p.id] === table.id);
  return (
    <div
      style={{
        width: 100,
        height: table.seatCount * 20,
        backgroundColor: "lightGray",
      }}
    >
      {persons.map((p) => (
        <div
          style={{
            width: 98,
            height: p.plusOne ? 38 : 18,
            // backgroundColor: "gray",
            backgroundColor: getColor(p.id),
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: 1,
            boxSizing: "border-box",
            margin: 1,
            marginBottom: 2,
          }}
        >
          {p.name}
        </div>
      ))}
    </div>
  );
}

function getColor(personId: number) {
  const happiness = getHappiness(personId);
  return `#${colorFragment(1 - happiness)}${colorFragment(happiness)}00`;
}

function colorFragment(n: number) {
  return Math.round(Math.min(255 * n * 2, 255)).toString(16);
}
