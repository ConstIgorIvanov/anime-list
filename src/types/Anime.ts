export type Genre = {
  mal_id: number;
  name: string;
};

enum Season {
  spring = 'spring',
  summer = 'summer',
  fall = 'fall',
  winter = 'winter',
}
export interface Anime {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  title_english: string;
  title_japanese: string;
  type: string;
  season: Season;
  episodes: number;
  status: string;
  rating: string;
  score: number;
  synopsis: string;
  background: string;
  year: number;
  genres: Genre[];
}
