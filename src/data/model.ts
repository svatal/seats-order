import { createArray, toRecord } from "../util";
import { ITable, Seating } from "./data";

export const tableList: ITable[] = [
  { id: 1, seatCount: 8 },
  { id: 2, seatCount: 10 },
  { id: 3, seatCount: 10 },
  { id: 4, seatCount: 10 },
  { id: 5, seatCount: 10 },
  { id: 6, seatCount: 10 },
  { id: 7, seatCount: 10 },
  { id: 8, seatCount: 12 },
  { id: 9, seatCount: 12 },
  { id: 10, seatCount: 12 },
  { id: 11, seatCount: 12 },
  { id: 12, seatCount: 10 },
  { id: 13, seatCount: 10 },
  { id: 14, seatCount: 12 },
  { id: 15, seatCount: 10 },
  { id: 16, seatCount: 12 },
  { id: 17, seatCount: 10 },
  { id: 18, seatCount: 10 },
];

export const tables = toRecord(tableList, (d) => d.id);

const tableClosenessDef: { id1: number; id2: number; closeness: number }[] = [
  { id1: 1, id2: 2, closeness: 0.2 },
  { id1: 1, id2: 3, closeness: 0.1 },
  { id1: 2, id2: 3, closeness: 0.2 },
  { id1: 2, id2: 4, closeness: 0.2 },
  { id1: 2, id2: 5, closeness: 0.1 },
  { id1: 3, id2: 4, closeness: 0.1 },
  { id1: 3, id2: 5, closeness: 0.2 },
  { id1: 4, id2: 5, closeness: 0.2 },
  { id1: 4, id2: 6, closeness: 0.2 },
  { id1: 4, id2: 7, closeness: 0.1 },
  { id1: 5, id2: 6, closeness: 0.1 },
  { id1: 5, id2: 7, closeness: 0.2 },
  { id1: 6, id2: 7, closeness: 0.2 },
  { id1: 8, id2: 9, closeness: 0.2 },
  { id1: 10, id2: 11, closeness: 0.1 },
  { id1: 12, id2: 13, closeness: 0.2 },
  { id1: 13, id2: 14, closeness: 0.15 },
  { id1: 14, id2: 15, closeness: 0.2 },
  { id1: 15, id2: 16, closeness: 0.2 },
  { id1: 16, id2: 17, closeness: 0.15 },
  { id1: 17, id2: 18, closeness: 0.2 },
];

export const tableClosenessCoef: Record<number, Record<number, number>> = {};
tableList.forEach((t) => {
  tableClosenessCoef[t.id] = {};
  tableList.forEach(
    (t2) => (tableClosenessCoef[t.id][t2.id] = t === t2 ? 1 : 0.1)
  );
});
tableClosenessDef.forEach(({ id1, id2, closeness }) => {
  tableClosenessCoef[id1][id2] = closeness;
  tableClosenessCoef[id2][id1] = closeness;
});

const teams = [6, 7, 8, 6, 7, 8, 7, 8, 9, 7, 8, 9, 8];
export const peopleList = teams
  .map((memberCount, teamIndex) =>
    createArray(memberCount, (i) => ({
      id: (teamIndex + 1) * 100 + i + 1,
      name: `${teamIndex + 1} - ${i + 1}`,
      plusOne: Math.random() < 0.8,
      teamId: teamIndex + 1,
      requestedIds: [],
    }))
  )
  .flat();

export const people = toRecord(peopleList, (p) => p.id);

export const seating: Seating = {};
