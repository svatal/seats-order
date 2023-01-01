import { IPerson, Seating } from "../data/data";
import { people, peopleList, tableClosenessCoef } from "../data/model";
import { isDefined, sum } from "../util";

const teamMateCoef = 10;

export function getHappiness(personId: number, seating: Seating) {
  const tableId = seating[personId];
  if (tableId === undefined) return -1;
  let max = 0;
  let score = 0;
  const team = getTeamMates(personId);
  max += team.length * teamMateCoef;
  score += getClosenessCoef(team, tableId, seating) * teamMateCoef;
  return score / max;
}

function getClosenessCoef(
  persons: IPerson[],
  tableId: number,
  seating: Seating
) {
  return persons
    .map((p) => seating[p.id])
    .filter(isDefined)
    .map((tId) => tableClosenessCoef[tableId][tId])
    .reduce(sum, 0);
}

function getTeamMates(personId: number) {
  const teamId = people[personId].teamId;
  return peopleList.filter((p) => p.teamId === teamId && p.id !== personId);
}

export function getResultHappiness(happinessList: number[], ratio: number) {
  const minHappiness = Math.min(...happinessList);
  const avgHappiness = happinessList.reduce(sum, 0) / happinessList.length;
  const resultHappiness = ratio * avgHappiness + (1 - ratio) * minHappiness;
  return { minHappiness, avgHappiness, resultHappiness };
}
