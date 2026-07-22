export interface Song {
  order: number;
  title: string;
}

export interface Venue {
  name: string;
  city: string;
  country: string;
}

export interface Concert {
  id: string;
  date: Date;
  venue: Venue;
  songs: Song[];
}