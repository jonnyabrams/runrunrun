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
