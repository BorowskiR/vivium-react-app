export const INITIAL = 'INITIAL';
export const FILTER_BY_NAME = 'FILTER_BY_NAME';
export const FILTER_BY_POWER = 'FILTER_BY_POWER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export interface IBeer {
  id: number;
  name: string;
  description: string;
  first_brewed: Date;
  abv: number;
  image_url: string;
}
