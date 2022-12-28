export interface ITable {
  id: number;
  seatCount: number;
  //   closeTables: { id: number; closeness: number }[];
}

export interface IPerson {
  id: number;
  name: string;
  teamId: number;
  plusOne: boolean;
  requestedIds: number[];
}

export interface ITeam {
  id: number;
  name: string;
  departmentId: string;
  // memberIds: number[];
}

export interface IDepartment {
  id: number;
  name: string;
}
