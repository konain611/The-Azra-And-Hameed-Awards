export type Winner = {
  place: 1 | 2 | 3;
  name?: string;
  title?: string;
  journal?: string;
  publicationDate?: string;
  institution?: string;
  designation?: string;
};

export type CategoryWinners = {
  category: string;
  winners: Winner[];
};

// Placeholder data — replace with real winners when available
const winners: CategoryWinners[] = [
  {
    category: "Social Sciences",
    winners: [
      { place: 1 },
      { place: 2 },
      { place: 3 },
    ],
  },
  {
    category: "Natural Sciences",
    winners: [
      { place: 1 },
      { place: 2 },
      { place: 3 },
    ],
  },
];

export default winners;
