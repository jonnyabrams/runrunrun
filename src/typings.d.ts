export type Runner = {
  id: string;
  bookingDate: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  status: string;
  eventId: number;
  eventTitle: string;
  organiserTitle: string;
  organiserId: number;
  raceId: string;
  raceStartDate: string;
  raceTitle: string;
  ticketPrice: {
    originalValue: number;
    value: number;
    fee: number;
    currencyCode: string;
  };
  ticketId: string;
  ticketTitle: string;
};

export type OrganiserType = {
  title: string;
  id: number;
};

export type EventType = {
  title: string;
  id: number;
  organiser: string;
  organiserId: number;
  date: string;
};

export type RaceType = {
  title: string;
  id: string;
  event: string;
  eventId: number;
  organiser: string;
  organiserId: number;
  date: string;
  price: number;
  qty: number;
}
