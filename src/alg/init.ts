import { peopleList, seating, tableList } from "../data/model";

export function initSeats() {
  const seatsTaken: Record<number, number> = {};
  peopleList.forEach((p) => {
    const seatsNeeded = p.plusOne ? 2 : 1;
    for (let i = 0; i < tableList.length; i++) {
      const table = tableList[i];
      const taken = seatsTaken[table.id] ?? 0;
      const proposedTaken = taken + seatsNeeded;

      if (table.seatCount >= proposedTaken) {
        seating[p.id] = table.id;
        seatsTaken[table.id] = proposedTaken;
        break;
      }
    }
  });
}
