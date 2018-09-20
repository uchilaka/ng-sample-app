interface Child {
  name: string;
  age: number;
}

export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  // Optional property
  checkInDate?: number;
  children: Child[] | null;
}
