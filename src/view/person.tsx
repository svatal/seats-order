import * as b from "bobril";
import { IPerson } from "../data/data";

export function Person(p: { person: IPerson; happiness: number }) {
  const { person, happiness } = p;
  return (
    <div
      style={{
        width: 98,
        gridRowEnd: `span ${person.plusOne ? 2 : 1}`,
        backgroundColor: getColor(happiness),
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        boxSizing: "border-box",
        margin: 1,
        marginBottom: 2,
      }}
    >
      {person.name} - {happiness.toFixed(2)}
    </div>
  );
}

function getColor(happiness: number) {
  return `#${colorFragment(1 - happiness)}${colorFragment(happiness)}00`;
}

function colorFragment(n: number) {
  return Math.round(Math.min(255 * n * 2, 255)).toString(16);
}
