export type Genre = {
  mal_id: number;
  name: string;
};

export type Anime = {
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
  episodes: number;
  status: string;
  rating: string;
  score: number;
  synopsis: string;
  background: string;
  year: number;
  genres: Genre[];
};

export interface AnimeState {
  items: Anime[];
  status: boolean;
}
