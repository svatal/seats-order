import { IPerson } from "../data/data";
import { people, peopleList, seating, tableClosenessCoef } from "../data/model";
import { isDefined, sum } from "../util";

const teamMateCoef = 10;

export function getHappiness(personId: number) {
  const tableId = seating[personId];
  if (tableId === undefined) return -1;
  let max = 0;
  let score = 0;
  const team = getTeamMates(personId);
  max += team.length * teamMateCoef;
  score += getClosenessCoef(team, tableId) * teamMateCoef;
  return score / max;
}

function getClosenessCoef(persons: IPerson[], tableId: number) {
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
