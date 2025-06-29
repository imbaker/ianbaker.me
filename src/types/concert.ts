export interface Song {
  title: string;
}

export interface Venue {
  name: string;
  city: string;
  country: string;
}

export interface Concert {
  data: {
    date: Date;
    venue: Venue;
    songs: Song[];
  };
}